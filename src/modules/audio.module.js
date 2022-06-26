import { Module } from '../core/module';
import { sound } from '../constant/sound';
import { random } from '../utils'


export class AudioModule extends Module {
    #sound
    #random

    constructor () {
        super('audio', 'Случайный звук')
        this.#sound = sound;
        this.#random = random;
    }

    trigger() {
        const soundId = this.#random(1, 11);
        let myaudio;
        this.#sound.forEach((audio) => {
            if (audio.id === soundId) {
                myaudio = new Audio(audio.audioUrl);
                document.body.prepend(myaudio);
                const audiod = document.querySelector('audio')
                audiod.setAttribute('controls', '');
                myaudio.play();
                audiod.removeAttribute('controls');
                setTimeout(() => { audiod.remove() }, 3000);
            };
        });
    };   

};