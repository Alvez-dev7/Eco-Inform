const caixa_escura = document.querySelector('#efeito-escuro')

window.addEventListener('mousemove', (c) => {

    const x = c.clientX;
    const y = c.clientY;

    caixa_escura.style.setProperty('--x', x + 'px')
    caixa_escura.style.setProperty('--y', y + 'px')
})