const boo = document.querySelector('.boo');
const tumulo = document. querySelector('.tumulo');

const jump = () => {
    boo.classList.add('jump');

    setTimeout(() => {

        boo.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    console.log('loop')

    const tumuloPosition = tumulo.offsetLeft;
    const booPosition = +window.getComputedStyle(boo).bottom.replace('px','');

    if(tumuloPosition <= 80 && tumuloPosition > 0 && booPosition <80) {
        tumulo.style.animation ='none';
        tumulo.style.left = `${tumuloPosition}px`;
        boo.style.animation ='none';
        boo.style.left = `${booPosition}px`;

        boo.src = 'imagens/boo-game-over.png'

        clearInterval(loop);
    }

},10);

document.addEventListener('keydown', jump);