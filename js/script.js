document.addEventListener("DOMContentLoaded", function(){
    
    

    const heroSection = document.querySelector('#hero');
    const caixa_escura = document.querySelector('#efeito-escuro');

    // EFEITO LANTERNA - HERO SECTION

    function moverLanterna(c) {
        if (window.innerWidth > 768) {
            const retangulo = heroSection.getBoundingClientRect(); // Calcular topo do HEADER de acordo com a VH
            const x = c.clientX - retangulo.left;
            const y = c.clientY - retangulo.top;

            caixa_escura.style.setProperty('--x', x + 'px'); //Concatenação das coordenadas para o CSS
            caixa_escura.style.setProperty('--y', y + 'px');
        }
    }
    
    if (heroSection) {
        heroSection.addEventListener('mousemove', moverLanterna);
    }

    //EFEITO CARDS - HERO SECTION

    const cards = window.document.querySelectorAll('.card-frase')

    const observador = new IntersectionObserver(function(lista_cards){ //Nova instancia
        lista_cards.forEach(function(relatorio_card){
            if(relatorio_card.isIntersecting){
                relatorio_card.target.classList.add('visivel')
            }
        })
        
     },{threshold: 0.2}) // 2° Parametro do observer - 20% do card

    cards.forEach(function(card){
        observador.observe(card)
    })


    // CABECALHO INVISIVEL - HERO / QUIZ
    const cabecalho = document.querySelector('#cabecalho-fixo')
    const quiz = document.querySelector('#quiz')
    const observador_cabecalho = new IntersectionObserver(function(entries){ //Nova instancia - Todas as entradas
        entries.forEach(function(entry){ 
            if(entry.isIntersecting){
                cabecalho.classList.add('cabecalho-visivel')
            } else{
                cabecalho.classList.remove('cabecalho-visivel')
            }
            
        })
    },{threshold: 0.1}) // 2° parametro do observer

    observador_cabecalho.observe(quiz)

    // CONSTRUÇÃO DO QUIZ - INFORMAÇÕES


    // CHAMAMENTO DO QUIZ - Hero --> Quiz
    const botao_quiz = document.querySelector('#link-quiz')
    botao_quiz.addEventListener('click', function(link){
        link.preventDefault()
        quiz.classList.add('quiz-visivel') //Deixando o quiz visivel
        quiz.scrollIntoView({behavior: 'smooth'})
    })
    //CLICAGEM DE BOTAO NO QUIZ
    const botoes_quiz = document.querySelectorAll('.btn-opcao')

    botoes_quiz.forEach(function(clica_botao){

        clica_botao.addEventListener('click', function(){
            const id_alvo = clica_botao.dataset.alvo; // Identifica a Questao alvo

            const container_info = document.querySelector(id_alvo) // Container_info recebe o ID da questao

            const paragrafo_info = container_info.querySelector('p') //Busca limitada -- Informações sobre a questao
            const titulo_info = container_info.querySelector('h3')

            paragrafo_info.innerHTML = clica_botao.dataset.info // Inserindo informações
            titulo_info.innerHTML = clica_botao.dataset.titulo

            container_info.classList.add('visivel'); //Container de informações passa a ficar visivel

            container_info.scrollIntoView({behavior: 'smooth'}) //Faz a rolagem para informação de forma leve

            const botao_avancar_info = container_info.querySelector('.btn-avancar')

            if(botao_avancar_info){
                botao_avancar_info.focus()
            }

        });
    });

    //BARRA DE PROGRESSO E CONSTRUÇÃO DAS QUESTOES

    const btn_avancar_conjunto = document.querySelectorAll('.btn-avancar');

    const barra_progresso = document.querySelector('#barra-progresso')

    let progresso_total = 20 // Barra de progresso começa com 20 

    btn_avancar_conjunto.forEach(function(btn_avancar_individual){
        
        btn_avancar_individual.addEventListener('click', function(){
            const proxima_quest = btn_avancar_individual.dataset.proxima //Identifica qual será a proxima questão

            const destino = document.querySelector(proxima_quest); // Pega o ID dessa questão

            destino.classList.remove('escondida') // Proxima questão passa  a ser visivel
            destino.classList.add('visivel')

            destino.scrollIntoView({behavior: 'smooth'}) //Rolagem leve até a proxima questão 

            if (progresso_total < 100){ //Lógica de progresso para a barra de progresso
                progresso_total += 20
                barra_progresso.style.width = `${progresso_total}%`
            }

        })
    })    
    
    const btn_chama_calculadora = document.querySelector('.btn-chama-calculadora') // Botao final do quiz que irá fazer a calc ficar visivel
    const secao_calculadora = document.querySelector('#calculadora')

    btn_chama_calculadora.addEventListener('click', function(){
        quiz.classList.remove('quiz-visivel')   // Quiz passa a ficar invisivel
        observador_cabecalho.observe(secao_calculadora) // Cabeçalho também fica visivel na seção calc 
        progresso_total = 20; // Barra de progresso diminui numericamente
        
        if(barra_progresso) {  
            barra_progresso.style.width = `${progresso_total}%`; // Barra de progresso diminui visualmente
        }
         
        secao_calculadora.classList.add('visivel') //Deixa a seção da calculadora visivel

        secao_calculadora.scrollIntoView({behavior: 'smooth'}) //Faz um efeito de rolagem simples até ela
    })

    const botoes_avancar_calculadora = document.querySelectorAll('.btn-avancar-calc')
    let pontuacao_total = 0
    
    botoes_avancar_calculadora.forEach(function(btn_avancar_calc){
        const caixa_pai = btn_avancar_calc.parentElement //Caixa_pai recebe a caixa relacionada ao botao de avançar especifico
            const campo_input_calc = caixa_pai.querySelector('input')

            campo_input_calc.addEventListener('keypress', function(entry){ 
                if(entry.key === 'Enter'){ //Adicionando opção de clicagem com a tecla ENTER
                    entry.preventDefault();

                    btn_avancar_calc.click();
                }
            })
        btn_avancar_calc.addEventListener('click', function(){
            
            const valor_digitado = campo_input_calc.value // Identificamos o valor digitado na caixa pai selecionada
            
            if(valor_digitado === ""){
                window.alert('Para prosseguir, preencha o campo vazio.') //Precaução de campo vazio
            } else{

                btn_avancar_calc.disabled = true; //Desativa o botão de avançar - Prevenção de clique duplo e resultado falso.

                campo_input_calc.disabled = true; //Trava o input


                progresso_total += 20
                barra_progresso.style.width = `${progresso_total}%` //Barra de progresso é atualizada com +20%

                let valor_calc = Number(valor_digitado)
                pontuacao_total += valor_calc //Calculamos o acumulamento do valor digitado
                const proxima = document.querySelector(btn_avancar_calc.dataset.proxima) // identificamos a proxima questao
                

                if(btn_avancar_calc.dataset.proxima ==="#card-pessoal"){  
                    document.querySelector('#resultado-numero').innerHTML = (pontuacao_total*3); //Resultado é 3x da pontuação total


                    const campo_mensagem = document.querySelector('#resultado-mensagem') 
                    //Campo da mensagem do card recebe informações conforme a pontuação total

                    if (pontuacao_total > 30){
                        campo_mensagem.innerText = "Atenção ao seu consumo! Pequenas mudanças nas escolhas diárias geram grande impacto. A ODS 12 da ONU nos alerta que os recursos da Terra são finitos, mas nosso padrão de consumo atual continua crescendo. Ajustar pequenas decisões no dia a dia do prato de comida à escolha das roupas ajuda a construir uma cadeia produtiva mais justa e sustentável para as próximas gerações."
                    } else{
                        campo_mensagem.innerText = "Parabéns! Você demonstra hábitos de consumo consciente e equilibrado. Cada decisão inteligente que você toma desde evitar produtos descartáveis até valorizar cadeias de produção sustentáveis reduz diretamente a sua pegada ecológica. Você já faz parte da solução para preservar os recursos naturais que todos nós compartilhamos.";
                    }
                }

                

                

                proxima.classList.remove('escondida') // Revela a proxima questão
                proxima.classList.add('visivel')
                proxima.scrollIntoView({behavior: 'smooth'}) //Faz um efeito de rolagem leve


                    const proximo_input = proxima.querySelector('input')

                    if (proximo_input){
                        proximo_input.focus()
                    }
                

            }

        })
    })

    const botao_pessoal = document.querySelector('.btn-pessoal')
    const link_game = document.querySelector('#link-game')

    botao_pessoal.addEventListener('click', function(){
        link_game.classList.add('visivel')
        link_game.scrollIntoView({behavior: 'smooth'})
    })

    const btn_chama_game = document.querySelector('#btn-chama-game')
    const secao_game = document.querySelector('#game')
    btn_chama_game.addEventListener('click', function(){
        secao_game.classList.add('visivel')
        secao_game.scrollIntoView({behavior: 'smooth'})
    })

    const link_gdd = document.querySelector('#link-gdd')
    const secao_gdd = document.querySelector('article#gdd')

    const secao_dowload = document.querySelector('#dowload-game')

    link_gdd.addEventListener('click', function(){

        secao_gdd.classList.add('visivel')
        secao_gdd.scrollIntoView({behavior: 'smooth'})

    })


    const lista_cards_gdd = document.querySelectorAll('.card-gdd')
    const aviso_clique = document.querySelector('#aviso-clique')
    const observador_cards_gdd = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('visivel')
            }
        })
    },{threshold: 0.1})

    lista_cards_gdd.forEach(function(card_gdd){
        observador_cards_gdd.observe(card_gdd)

        card_gdd.addEventListener('click', function(){
        card_gdd.classList.add('desembacado');

        if(aviso_clique){
            aviso_clique.style.opacity = '0'
        }

        
        secao_dowload.classList.add('visivel')
    });
    })

    const lista_cards_dowload = document.querySelectorAll('.card-dowload')

    const observador_cards_dowload = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('visivel')
            }
        })
    },{threshold: 0.1})
    
    const footer = document.querySelector('footer') //Identificamos o footer
    const btn_link_caixa_dowload = document.querySelector('#btn-chama-dowload')
    const caixa_dowload = document.querySelector('#caixa-dowload')

    btn_link_caixa_dowload.addEventListener('click', function(){

        caixa_dowload.classList.add('visivel')
        caixa_dowload.scrollIntoView({behavior: "smooth"})

        if(footer){
            footer.style.display = 'flex'
        }
    })

})


