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
    
heroSection.addEventListener('mousemove', moverLanterna);

document.addEventListener("DOMContentLoaded", function(){

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
            const proxima_quest =btn_avancar_individual.dataset.proxima

            const destino = document.querySelector(proxima_quest);

            destino.classList.remove('escondida')
            destino.classList.add('visivel')

            destino.scrollIntoView({behavior: 'smooth'})


            if (progresso_total < 100){
                progresso_total +=20

                barra_progresso.style.width = `${progresso_total}%`
            }

        })
    })    
