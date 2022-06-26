import {Module} from '../core/module'
import { getRandomColor } from '../utils';
import { getRandomInRange } from '../utils';



export class CreateFigure extends Module {
    constructor () {
        super('figure', "Случайная фигура");
        this.figure = null;
    }   

    trigger() {
        this.body = document.querySelector('body')
        this.body.insertAdjacentHTML(
        'afterbegin', `<div class = "create-figure"></div>`
        )
        this.figure = document.querySelector('.create-figure');
        this.figure.style.backgroundColor = getRandomColor();
        this.figure.style.height = getRandomInRange(1, window.screen.height - 200) + 'px';
        this.figure.style.width = getRandomInRange(1, window.screen.height - 200) + 'px';
        this.figure.style.inset = getRandomInRange(1, 200) + 'px', getRandomInRange(1, 200) + 'px';
        this.figure.style.borderRadius = `${getRandomInRange(0.5, 70)}%`;
        setTimeout(() => {
            this.figure.remove()
         }, 800);
    }
}