import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor() {
        this.body = document.body
    }

    getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    trigger() {
        document.body.style.background = getRandomColor()
    }
}