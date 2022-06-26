import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from '../src/modules/background.module';
import { AudioModule } from '../src/modules/audio.module';
import { ClicksModule } from '../src/modules/clicks.module';
import { CalculatorModule } from '../src/modules/calculator.module';
import { CreateFigure } from '../src/modules/figure.module';
import { TimerModule } from '../src/modules/timer.module'
import { BigTimerModule } from '../src/modules/bigtimer.module';
import { TimerBlock } from '../src/modules/current.time';
import { getCustomMessege } from '../src/modules/custom-message.module';
import { testHappiness } from '../src/modules/happy.module';

const menu = new ContextMenu('.menu');
const background = new BackgroundModule();
const audio = new AudioModule();
const clickAnalitics = new ClicksModule();
const calculator = new CalculatorModule();
const figure = new CreateFigure();
const timer = new TimerModule();
const bigtimer = new BigTimerModule();
const time = new TimerBlock();
const customMessage = new getCustomMessege();
const happiness = new testHappiness();
const allModules = [background,audio,clickAnalitics,figure,calculator,time,bigtimer,customMessage,timer,happiness];
allModules.forEach((module) => {
   menu.add(module);
})
menu.open();
const menuContainer = document.querySelector('.menu');
menuContainer.addEventListener('click', (event) => {
   const { target } = event;
   const dataType = target.getAttribute('data-type');
   allModules.forEach((item) => {
      if (item.type === dataType) {
         item.trigger();
      }
   })
   menu.close();
})