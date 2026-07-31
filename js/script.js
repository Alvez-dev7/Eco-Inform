const caixa_escura = document.querySelector('#efeito-escuro')
const hero = document.querySelector('#hero')

    function moverLanterna(c){
        if (window.innerWidth > 768){
            const x = c.clientX;
            const y = c.clientY;

            caixa_escura.style.setProperty('--x', x + 'px');
            caixa_escura.style.setProperty('--y', y + 'px');
        }
    }

    hero.addEventListener('mousemove', moverLanterna); 

