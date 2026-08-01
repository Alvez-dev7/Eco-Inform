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

heroSection.addEventListener('mousemove', moverLanterna);