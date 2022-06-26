import { Module } from '../core/module'
import * as DateUtils from '../core/date-time'

export class TimerBlock extends Module {
    constructor() {
        super('current-time', 'Показать текущее время')
        this.timerContainer = document.createElement('div')
        this.time = document.createElement('div')      
    }

    getTimerContent() {
        return DateUtils.getCurrentTime(new Date())
    }

    enableTimeUpdate() {
        setInterval(() => {
            this.time.textContent = this.getTimerContent()
        }, 1000)
    }

    render() {
        this.timerContainer.id = 'timer'

        
        const todayDateHTML = document.createElement('div')
        todayDateHTML.textContent = DateUtils.getTodayDateFormat(new Date())

        this.time.textContent = this.getTimerContent()

        const closeButton = document.createElement('button')
        closeButton.className = 'btn'
        closeButton.textContent = 'Закрыть окно'
        closeButton.addEventListener('click', (event) => {
            this.timerContainer.remove()
        })

        this.timerContainer.append(todayDateHTML, this.time, closeButton)
        this.enableTimeUpdate()

        return this.timerContainer
    }

    trigger() {
        const timerBlockHTML = this.render()
        document.body.append(timerBlockHTML)
    }
}