import { Module } from '../core/module';
import { sound } from '../constant/sound';
import { random } from '../utils'


export class AudioModule extends Module {
    #sound
    #random

    constructor (sound = [], random) {
        super('audio', 'Случайный звук')
        this.#sound = sound;
        this.#random = random;
    }

    createSound() {
        const soundId = this.#random(1, 11);
        const myaudio = new Audio;
        this.#sound.forEach((audio) => {
            if (audio.id === soundId) {
                myaudio.src = audio.audioUrl;
                myaudio.play();
            };
        });
    };   

};

const audioModule = new AudioModule(sound, random);