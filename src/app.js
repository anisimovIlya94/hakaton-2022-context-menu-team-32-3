import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from '../src/modules/background.module';
import { AudioModule } from '../src/modules/audio.module';

const menu = new ContextMenu('.menu');
const background = new BackgroundModule();
const audio = new AudioModule();
const allModules = [background,audio];
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