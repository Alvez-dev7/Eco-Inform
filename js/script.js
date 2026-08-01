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