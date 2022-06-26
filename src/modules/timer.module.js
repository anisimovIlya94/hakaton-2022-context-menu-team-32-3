import { Module } from '../core/module';
import { img } from '../constant/img'

export class TimerModule extends Module {
    #container;
    constructor(time = 10) {
        super('timer', 'Простой таймер')
      this.time = time;
      this.#container = null;
    }
  
  trigger() {
    this.#container = document.createElement('div');
    this.#container.style.cssText = `
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        overflow: auto;`
      let second = this.time;
        this.#container.className = 'main-container';
        const timeBox = document.createElement('div');
        timeBox.className = 'taime-box';
        timeBox.style.width = '600px';
        timeBox.style.height = '600px';
  
        this.#container.append(timeBox);
        document.body.append(this.#container);
  
        const startInterval = setInterval(() => {
          if (second === 0) {
            clearInterval(startInterval);
            setTimeout(() => {
              this.#container.remove()
            }, 2000)
          } else if (second > 0) {
              second -=1;
              img.forEach((img) => {
                if (second == img.id) {
                   timeBox.style.backgroundImage = `url(${img.imgUrl})`;
                   timeBox.style.backgroundSize = `100% 100%`
                }
              });
          }
        }, 1000)  
    }  
}
  