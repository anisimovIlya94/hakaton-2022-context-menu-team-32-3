import { Module } from '../core/module';





export class TimerModule extends Module {
    #container;
  
    constructor(time = 10) {
        super('timer', 'Простой таймер')
      this.time = time;
      this.#container = document.createElement('div');
    }
  
    
    trigger() {
      let second = this.time;
        this.#container.className = 'main-container';
        const timeBox = document.createElement('div');
        timeBox.className = 'taime-box';
        const timerH1= document.createElement('h1');
        timerH1.className = 'taimer-content';
        timerH1.textContent = `${this.time}`
        timerH1.style.color = "red"
  
        timeBox.append(timerH1);
        this.#container.append(timeBox);
        document.body.append(this.#container);
  
        const startInterval = setInterval(() => {
          if (second === 0) {
            timerH1.textContent = `The Time is Over`;
            clearInterval(startInterval);
            setTimeout(() => {
              this.#container.remove()
            }, 2000)
          } else if (second > 0) {
              second -=1;
              timerH1.textContent = `${second}`
          }
        }, 1000)  
    }  
}
  