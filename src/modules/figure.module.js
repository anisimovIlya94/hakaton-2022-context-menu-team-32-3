import {Module} from '../core/module'

const getRandomColor = () => {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export class CreateFigure extends Module {
    constructor () {
        super(figure, "Случайная фигура")
    }   
    toHTML() {
        this.body = document.querySelector('body')
        body.insertAdjacentHTML(
        'afterbegin', `<div class = "create-figure"></div>`
        )
    }

    create() {
        this.figure = document.querySelector('.create-figure')
        // .addEventListener('click', () => {
            this.figure.style.backgroundColor = getRandomColor()
            this.figure.style.height = getRandomInRange(1, window.screen.height-200) + 'px'
            this.figure.style.width = getRandomInRange(1, window.screen.height-200) + 'px'
            this.figure.style.inset = getRandomInRange(1, 200) + 'px', getRandomInRange(1, 200) + 'px'
            this.figure.style.borderRadius = getRandomInRange(0.5, 5)
        })
    }
}