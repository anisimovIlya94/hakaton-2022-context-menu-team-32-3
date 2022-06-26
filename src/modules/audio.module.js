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
                const audioHTML = document.querySelector('audio')
                audioHTML.setAttribute('controls', '');
                myaudio.play();
                audioHTML.removeAttribute('controls');
                setTimeout(() => { audioHTML.remove() }, 3000);
            };
        });
    };   

};