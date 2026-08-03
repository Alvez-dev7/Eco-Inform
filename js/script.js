document.addEventListener("DOMContentLoaded", function(){
    
    const heroSection = document.querySelector('#hero');
    const caixa_escura = document.querySelector('#efeito-escuro');

    function moverLanterna(c) {
        if (window.innerWidth > 768) {
            const retangulo = heroSection.getBoundingClientRect();
            const x = c.clientX - retangulo.left;
            const y = c.clientY - retangulo.top;

            caixa_escura.style.setProperty('--x', x + 'px');
            caixa_escura.style.setProperty('--y', y + 'px');
        }
    }
    
    if (heroSection) {
        heroSection.addEventListener('mousemove', moverLanterna);
    }

    const cards = window.document.querySelectorAll('.card-frase')

    const observador = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('visivel')
            }
        })
        
     },{threshold: 0.2})

    cards.forEach(function(card){
        observador.observe(card)
    })

    const cabecalho = document.querySelector('#cabecalho-fixo')
    const quiz = document.querySelector('#quiz')
    const observador_cabecalho = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                cabecalho.classList.add('cabecalho-visivel')
            } else{
                cabecalho.classList.remove('cabecalho-visivel')
            }
            
        })
    })

    observador_cabecalho.observe(quiz)

    const botao_quiz = document.querySelector('#link-quiz')
    botao_quiz.addEventListener('click', function(link){
        link.preventDefault()
        quiz.classList.add('quiz-visivel')
        quiz.scrollIntoView({behavior: 'smooth'})
    })
    
    const botoes_quiz = document.querySelectorAll('.btn-opcao')

    botoes_quiz.forEach(function(clica_botao){

        clica_botao.addEventListener('click', function(){
            const id_alvo = clica_botao.dataset.alvo;

            const container_info = document.querySelector(id_alvo)

            const paragrafo_info = container_info.querySelector('p')
            const titulo_info = container_info.querySelector('h3')

            paragrafo_info.innerHTML = clica_botao.dataset.info
            titulo_info.innerHTML = clica_botao.dataset.titulo

            container_info.classList.add('visivel');

            container_info.scrollIntoView({behavior: 'smooth'})
        });
    });

    const btn_avancar_conjunto = document.querySelectorAll('.btn-avancar');

    const barra_progresso = document.querySelector('#barra-progresso')

    let progresso_total = 20

    btn_avancar_conjunto.forEach(function(btn_avancar_individual){
        
        btn_avancar_individual.addEventListener('click', function(){
            const proxima_quest = btn_avancar_individual.dataset.proxima

            const destino = document.querySelector(proxima_quest);

            destino.classList.remove('escondida')
            destino.classList.add('visivel')

            destino.scrollIntoView({behavior: 'smooth'})

            if (progresso_total < 100){
                progresso_total += 20
                barra_progresso.style.width = `${progresso_total}%`
            }

        })
    })    
    
    const btn_chama_calculadora = document.querySelector('.btn-chama-calculadora')
    const secao_calculadora = document.querySelector('#calculadora')

    btn_chama_calculadora.addEventListener('click', function(){
        quiz.classList.remove('quiz-visivel')
        observador_cabecalho.observe(secao_calculadora)
        progresso_total = 0; 
        
        if(barra_progresso) {
            barra_progresso.style.width = '0%';
        }
        
        if (progresso_total < 100){
            progresso_total += 20
            barra_progresso.style.width = `${progresso_total}%`
        }
        
        secao_calculadora.classList.add('visivel')
        secao_calculadora.scrollIntoView({behavior: 'smooth'})
    })

    const botoes_avancar_calculadora = document.querySelectorAll('.btn-avancar-calc')
    let pontuacao_total = 0
    
    botoes_avancar_calculadora.forEach(function(btn_avancar_calc){
        btn_avancar_calc.addEventListener('click', function(){
            const caixa_pai = btn_avancar_calc.parentElement
            
            const valor_digitado = caixa_pai.querySelector('input').value
            
            if(valor_digitado === ""){
                window.alert('Para prosseguir, preencha o campo vazio.')
            } else{
                progresso_total += 20
                barra_progresso.style.width = `${progresso_total}%`

                let valor_calc = Number(valor_digitado)
                pontuacao_total += valor_calc
                const proxima = document.querySelector(btn_avancar_calc.dataset.proxima)
                const footer = document.querySelector('footer')
                if(btn_avancar_calc.dataset.proxima ==="#card-pessoal"){
                    document.querySelector('#resultado-numero').innerHTML = (pontuacao_total*3);
                    footer.style.display = 'block'
                    const campo_mensagem = document.querySelector('#resultado-mensagem')
                    if (pontuacao_total > 30){
                        campo_mensagem.innerText = "Atenção ao seu consumo! Pequenas mudanças nas escolhas diárias geram grande impacto. A ODS 12 da ONU nos alerta que os recursos da Terra são finitos, mas nosso padrão de consumo atual continua crescendo. Ajustar pequenas decisões no dia a dia do prato de comida à escolha das roupas ajuda a construir uma cadeia produtiva mais justa e sustentável para as próximas gerações."
                    } else{
                        campo_mensagem.innerText = "Parabéns! Você demonstra hábitos de consumo consciente e equilibrado. Cada decisão inteligente que você toma desde evitar produtos descartáveis até valorizar cadeias de produção sustentáveis reduz diretamente a sua pegada ecológica. Você já faz parte da solução para preservar os recursos naturais que todos nós compartilhamos.";
                    }
                }

                proxima.classList.remove('escondida')
                proxima.classList.add('visivel')
                proxima.scrollIntoView({behavior: 'smooth'})
            }
        })
    })
})