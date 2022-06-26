import { Module } from '../core/module';


export class BigTimerModule extends Module {
    #container;
    #inputMinute;
    #inputSeconds;
    #startBtn;
    #stopBtn;
    

    constructor() {
        super('bigTimer', 'Большой Таймер')
        this.#container = document.createElement('div');
    }


    trigger() {
        this.#container.className = 'main-container';

        const minutePar = document.createElement('p');
        minutePar.className = 'label';
        minutePar.id = 'minute-label';
        minutePar.innerText = 'Minute';

        const secondsPar = document.createElement('p');
        secondsPar.className = 'label';
        secondsPar.id = 'second-label';
        secondsPar.innerText = 'Seconds';

        this.#inputMinute = document.createElement('input');
        this.#inputMinute.className = 'time';
        this.#inputMinute.id = 'minute';
        this.#inputMinute.type = 'number';
        this.#inputMinute.max = '60';
        this.#inputMinute.min = '00';
        this.#inputMinute.value = '0';

        this.#inputSeconds = document.createElement('input');
        this.#inputSeconds.className = 'time';
        this.#inputSeconds.id = 'minute';
        this.#inputSeconds.type = 'number';
        this.#inputSeconds.max = '60';
        this.#inputSeconds.min = '00';
        this.#inputSeconds.value = '0';

        this.#startBtn = document.createElement('button');
        this.#startBtn.className = 'button';
        this.#startBtn.id = 'start';
        this.#startBtn.innerText = 'Start';
        this.#startBtn.addEventListener('click',() => {
            const startTimer = setInterval(() => {
                if (this.#inputMinute.value == 0 && this.#inputSeconds.value == 0){
                    this.#inputMinute.value = 0;
                    this.#inputSeconds.value = 0;
                    clearInterval(startTimer)
                } else if (this.#inputSeconds.value != 0) {
                    this.#inputSeconds.value -= 1;
                } else if (this.#inputMinute.value != 0 && this.#inputSeconds.value == 0) {
                    this.#inputSeconds.value = 59;
                    this.#inputMinute.value -= 1;
                }
            }, 1000)
        });

        this.#stopBtn = document.createElement('button');
        this.#stopBtn.className = 'button'
        this.#stopBtn.id = 'stop';
        this.#stopBtn.innerText = 'Remove';
        this.#stopBtn.addEventListener('click', () => {
            this.#container.remove();
        });

        this.#container.append(
            minutePar, secondsPar
            ,this.#inputMinute,this.#inputSeconds
            ,this.#startBtn, this.#stopBtn);
        document.body.append(this.#container);
    };

}