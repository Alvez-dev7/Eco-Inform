document.addEventListener("DOMContentLoaded", function(){
    let idioma_atual = "pt"
    
    

    const heroSection = document.querySelector('#hero');
    const heroScene = document.querySelector('.hero-scene');
    const phrases = document.querySelectorAll('.hero-phrase');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (heroSection && heroScene && phrases.length === 4) {
        heroSection.classList.add('story-ready');

        if (!reduceMotion.matches) {
            let frame = 0;
            let pointerFrame = 0;
            let lightX = window.innerWidth / 2;
            let lightY = window.innerHeight * 0.44;
            let targetX = lightX;
            let targetY = lightY;

            function updateStory(){
                frame = 0;
                const rect = heroSection.getBoundingClientRect();
                const sceneHeight = heroScene.clientHeight;
                const range = Math.max(rect.height - sceneHeight, 1);
                const progress = Math.min(Math.max(-rect.top / range, 0), 1);
                const storyStep = Math.min(Math.max((progress - 0.14) / 0.72 * 5, 0), 5);
                const lightProgress = Math.min(Math.max((progress - 0.2) / 0.8, 0), 1);
                const introOpacity = Math.min(Math.max(1 - progress / 0.16, 0), 1);

                heroScene.style.setProperty('--story-y', `${(1 - storyStep) * sceneHeight}px`);
                heroScene.style.setProperty('--scene-shade', (0.72 - lightProgress * 0.34).toFixed(2));
                heroScene.style.setProperty('--intro-opacity', introOpacity.toFixed(2));
                heroScene.style.setProperty('--intro-y', `${-progress * 56}px`);
                heroScene.style.setProperty('--indicator-opacity', Math.max(1 - progress * 8, 0).toFixed(2));
                heroScene.querySelector('.hero-copy').inert = progress > 0.16;

                const activePhrase = Math.min(Math.max(Math.round(storyStep) - 1, 0), phrases.length - 1);
                phrases.forEach(function(phrase, index){
                    const active = index === activePhrase;
                    phrase.style.setProperty('--phrase-opacity', active ? '1' : '0');
                    phrase.setAttribute('aria-hidden', active ? 'false' : 'true');
                });
            }

            function requestStoryUpdate(){
                if (!frame) frame = window.requestAnimationFrame(updateStory);
            }

            function moveLight(event){
                const rect = heroScene.getBoundingClientRect();
                targetX = event.clientX - rect.left;
                targetY = event.clientY - rect.top;

                if (!pointerFrame) pointerFrame = window.requestAnimationFrame(animateLight);
            }

            function animateLight(){
                lightX += (targetX - lightX) * 0.16;
                lightY += (targetY - lightY) * 0.16;
                heroScene.style.setProperty('--light-x', `${lightX}px`);
                heroScene.style.setProperty('--light-y', `${lightY}px`);

                if (Math.abs(targetX - lightX) + Math.abs(targetY - lightY) > 0.5) {
                    pointerFrame = window.requestAnimationFrame(animateLight);
                } else {
                    pointerFrame = 0;
                }
            }

            heroScene.addEventListener('pointermove', function(event){
                if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    moveLight(event);
                }
            });
            heroScene.addEventListener('pointerleave', function(){
                targetX = heroScene.clientWidth * 0.52;
                targetY = heroScene.clientHeight * 0.44;
                if (!pointerFrame) pointerFrame = window.requestAnimationFrame(animateLight);
            });
            window.addEventListener('scroll', requestStoryUpdate, {passive: true});
            window.addEventListener('resize', requestStoryUpdate);
            requestStoryUpdate();
        }
    }
    
    const indicador_rolagem = document.querySelector('#indicador-rolagem')

    const quiz = document.querySelector('#quiz')

    // CONSTRUÇÃO DO QUIZ - INFORMAÇÕES


    // CHAMAMENTO DO QUIZ - Hero --> Quiz
    const botao_quiz = document.querySelector('#link-quiz')
    if (botao_quiz) {
        botao_quiz.addEventListener('click', function(link){
            link.preventDefault()
            quiz.classList.add('quiz-visivel') //Deixando o quiz visivel
            quiz.scrollIntoView({behavior: 'smooth'})
        })
    }
    const quizQuestions = [
        {question: 'quizQuestion1', options: ['quizQ1A', 'quizQ1B'], correct: 0, explanation: 'quizExplainQ1'},
        {question: 'quizQuestion2', options: ['quizQ2A', 'quizQ2B'], correct: 1, explanation: 'quizExplainQ2'},
        {question: 'quizQuestion3', options: ['quizQ3A', 'quizQ3B'], correct: 0, explanation: 'quizExplainQ3'}
    ];
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizStage = document.querySelector('#quiz-stage');
    const quizEnd = document.querySelector('#quiz-end');
    const quizFeedback = document.querySelector('#quiz-feedback');
    const quizFeedbackTitle = document.querySelector('#quiz-feedback-title');
    const quizExplanation = document.querySelector('#quiz-explanation-text');
    const quizProgress = document.querySelector('#quiz-progress');
    const quizProgressBar = document.querySelector('#quiz-progress-bar');
    const quizProgressLabel = document.querySelector('#quiz-progress-label');
    const quizNext = document.querySelector('#quiz-next');
    let quizIndex = 0;
    let quizAnswered = false;

    function setCopy(element, key){
        element.dataset.i18n = key;
        element.textContent = traducoes[idioma_atual][key];
    }

    function updateQuizProgress(){
        quizProgress.setAttribute('aria-label', traducoes[idioma_atual].quizProgressAria);
        quizProgressLabel.textContent = quizIndex >= quizQuestions.length
            ? traducoes[idioma_atual].quizComplete
            : traducoes[idioma_atual].quizQuestionCount
                .replace('{current}', String(quizIndex + 1))
                .replace('{total}', String(quizQuestions.length));
    }

    function renderQuiz(){
        const question = quizQuestions[quizIndex];
        setCopy(document.querySelector('#quiz-question'), question.question);
        quizOptions.forEach(function(option, index){
            setCopy(option, question.options[index]);
            option.classList.remove('is-selected', 'is-correct', 'is-wrong');
            option.setAttribute('aria-pressed', 'false');
            option.disabled = false;
        });
        quizFeedback.hidden = true;
        quizFeedbackTitle.removeAttribute('data-i18n');
        quizExplanation.removeAttribute('data-i18n');
        document.querySelector('#quiz-explanation').open = false;
        quizNext.hidden = true;
        setCopy(quizNext, quizIndex === quizQuestions.length - 1 ? 'quizFinish' : 'quizNext');
        quizProgress.setAttribute('aria-valuenow', String(quizIndex + 1));
        quizProgressBar.style.width = `${((quizIndex + 1) / quizQuestions.length) * 100}%`;
        updateQuizProgress();
        quizStage.hidden = false;
        quizEnd.hidden = true;
        quizAnswered = false;
    }

    quizOptions.forEach(function(option, selectedIndex){
        option.addEventListener('click', function(){
            if (quizAnswered) return;
            quizAnswered = true;
            const question = quizQuestions[quizIndex];
            const correct = selectedIndex === question.correct;

            quizOptions.forEach(function(answer, index){
                answer.disabled = true;
                answer.setAttribute('aria-pressed', String(index === selectedIndex));
                if (index === selectedIndex) answer.classList.add('is-selected');
                if (index === question.correct) answer.classList.add('is-correct');
                else if (index === selectedIndex) answer.classList.add('is-wrong');
            });

            quizFeedback.hidden = false;
            setCopy(quizFeedbackTitle, correct ? 'quizCorrect' : 'quizIncorrect');
            setCopy(quizExplanation, question.explanation);
            quizNext.hidden = false;
            quizNext.focus();
        });
    });

    quizNext.addEventListener('click', function(){
        quizIndex += 1;
        if (quizIndex === quizQuestions.length) {
            quizStage.hidden = true;
            quizEnd.hidden = false;
            updateQuizProgress();
            quizProgress.setAttribute('aria-valuenow', String(quizQuestions.length));
            quizProgressBar.style.width = '100%';
            document.querySelector('#quiz-restart').focus();
            return;
        }
        renderQuiz();
        quizOptions[0].focus();
    });

    document.querySelector('#quiz-restart').addEventListener('click', function(){
        quizIndex = 0;
        renderQuiz();
        quizOptions[0].focus();
    });

    renderQuiz();

    const profileForm = document.querySelector('#profile-form');
    const profileInputs = [
        {input: document.querySelector('#profile-shower'), output: document.querySelector('#profile-shower-value'), unit: 'profileMinutes'},
        {input: document.querySelector('#profile-electronics'), output: document.querySelector('#profile-electronics-value'), unit: 'profileDevices'},
        {input: document.querySelector('#profile-impulse'), output: document.querySelector('#profile-impulse-value'), unit: 'profileOutOfTen'}
    ];

    function updateProfileValues(){
        profileInputs.forEach(function(control){
            const value = control.input.value;
            control.output.textContent = traducoes[idioma_atual][control.unit].replace('{value}', value);
            control.input.setAttribute('aria-valuetext', control.output.textContent);
        });
    }

    profileInputs.forEach(function(control){
        control.input.addEventListener('input', updateProfileValues);
    });
    updateProfileValues();

    profileForm.addEventListener('submit', function(event){
        event.preventDefault();
        const scores = profileInputs.map(function(control){
            const range = Number(control.input.max) - Number(control.input.min);
            return (Number(control.input.value) - Number(control.input.min)) / range * 100;
        });
        const score = Math.round(scores.reduce(function(total, value){ return total + value; }, 0) / scores.length);
        const highest = scores.indexOf(Math.max(...scores));
        const recommendations = ['profileTipShower', 'profileTipElectronics', 'profileTipImpulse'];
        document.querySelector('#resultado-numero').textContent = String(score);
        setCopy(document.querySelector('#texto-recomendacao-primaria'), recommendations[highest]);

        const result = document.querySelector('#card-pessoal');
        const firstResult = result.hidden;
        result.hidden = false;
        if (firstResult) result.scrollIntoView({behavior: 'smooth', block: 'center'});
    });

    const btn_idioma = document.querySelector("#btn-idioma") // Identifica o botão de troca de idioma
    if (btn_idioma) {
        btn_idioma.classList.add('visivel')
    }

    function atualizaTextos(){
        document.documentElement.lang = idioma_atual === 'pt' ? 'pt-BR' : idioma_atual;
        //Traduz os elementos estáticos
        const elementosTraduziveis = document.querySelectorAll('[data-i18n]') // Identifica todos os elementos traduziveis estáticos

        elementosTraduziveis.forEach(function(elementoTraduzivel){ // Identifica cada elemento Traduzivel

            const chave = elementoTraduzivel.dataset.i18n; // Identifica a chave de cada um. em que: data-i18n
            if(traducoes[idioma_atual][chave]){ 
                elementoTraduzivel.innerHTML = traducoes[idioma_atual][chave]; //Identifica o dicionário de estado, e a chave do data-i18n dentro da const traducoes
            }
        })
        document.querySelectorAll('[data-i18n-alt]').forEach(function(element){
            const key = element.dataset.i18nAlt;
            if (traducoes[idioma_atual][key]) element.alt = traducoes[idioma_atual][key];
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(function(element){
            const key = element.dataset.i18nAriaLabel;
            if (traducoes[idioma_atual][key]) element.setAttribute('aria-label', traducoes[idioma_atual][key]);
        });
        //Traduz Elementos data-titulo
        const elementosTitulo = document.querySelectorAll('[data-i18n-titulo]')
        elementosTitulo.forEach(function(elementoTitulo){
            
                const chaveTitulo = elementoTitulo.dataset.i18nTitulo
            if(traducoes[idioma_atual][chaveTitulo]){
                elementoTitulo.setAttribute("data-titulo", traducoes[idioma_atual][chaveTitulo]) //Traz para o data-titulo o texto traduzido
            }
        })
        //Traduz Elementos data-info
        const elementosInfo = document.querySelectorAll('[data-i18n-info]')
        elementosInfo.forEach(function(elementoInfo){
            const chaveInfo = elementoInfo.dataset.i18nInfo
            if(traducoes[idioma_atual][chaveInfo]){
                elementoInfo.setAttribute('data-info', traducoes[idioma_atual][chaveInfo]) //Traz para o data-info o texto traduzido
            }
        })


        document.querySelector('#texto-sigla').innerText = traducoes[idioma_atual].textoBotaoIdioma;
        updateQuizProgress();
        updateProfileValues();

    }

    btn_idioma.addEventListener('click', function(){ //Lógica de troca de idiomas conforme o clique no botão
        if (idioma_atual === "pt"){
            idioma_atual = 'en'
        } else if(idioma_atual ==='en'){
            idioma_atual = 'es'
        } else{
            idioma_atual = 'pt'
        }
        atualizaTextos() 
    })

})
//PREVENÇÃO DE PONTOS - CALCULADORA
function validarLimiteInput(input) { 
        const min = parseInt(input.min);
        const max = parseInt(input.max);
        const valor = parseInt(input.value);

        if (isNaN(valor)){
            return
        }
        if (valor > max) {
            input.value = max;
        }
    }

    function validarMinimoInput(input) {
        const min = parseInt(input.min);
        const valor = parseInt(input.value);

        if (!isNaN(valor) && valor < min) {
            input.value = min;
        }
    }

window.addEventListener("beforeunload", function () {
    sessionStorage.setItem("posicaoScroll", window.scrollY);
});

window.addEventListener("load", function () {
    const posicaoSalva = sessionStorage.getItem("posicaoScroll");
    if (posicaoSalva) {
        window.scrollTo(0, Number(posicaoSalva));
    }
});
