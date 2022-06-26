import { Module } from '../core/module'
import { getRandomColor } from '../utils';

export class BackgroundModule extends Module {
   constructor() {
      super('background', 'Поменять цвет фона');
    }

    trigger() {
       document.body.style.background = getRandomColor();
    }
}