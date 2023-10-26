const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const jump = () => {

    mario.classList.add("jump")

    //executa o comando apos o tempo escolhido (500ms)
    setTimeout(() => {
        mario.classList.remove("jump")

    }, 500)

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioComputed = window.getComputedStyle(mario).bottom
    const marioPosition = marioComputed.replace('px', '')

    // console.log('pulo:  ' + marioPosition);
    // console.log('turbo:  ' + marioPosition);

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = pipePosition + 'px'

        mario.style.animation = 'none'
        mario.style.bottom = marioPosition + 'px'

        mario.src = 'img/game-over.png'
        mario.style.width = '80px'
        mario.style.marginleft = '50px'
    }

}, 10)


document.addEventListener("keydown", jump)