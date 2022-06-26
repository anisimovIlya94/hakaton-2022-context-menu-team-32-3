import { Module } from '../core/module'

export class ClicksModule extends Module {
   constructor() {
      super('clickModule', 'Подсчет кликов за 5сек');
   }
   trigger() {
      let clicks = 0;

      const titleElelementHTML = document.createElement('p');
      titleElelementHTML.style.margin = '200px 0 0 200px';
      titleElelementHTML.textContent = 'Идет подсчет кликов';
      titleElelementHTML.style.fontSize = '25px';
      titleElelementHTML.style.color = '#343434';
      titleElelementHTML.style.border = '3px solid #343434';
      titleElelementHTML.style.maxWidth = '400px';
      titleElelementHTML.style.userSelect = 'none';
      document.body.prepend(titleElelementHTML);

      const textOfClicks = document.createElement('p');
      titleElelementHTML.append(textOfClicks);

      function clicksOnePlus() {
         clicks += 1;
      }

      setInterval(() => {
         textOfClicks.textContent = `Ваше количество кликов:${clicks}`
      }, 100);
      document.addEventListener('click', clicksOnePlus);
      setTimeout(() => {
         document.removeEventListener('click', clicksOnePlus);
         titleElelementHTML.textContent = `Подсчет кликов закончен. Ваше количество кликов:${clicks}`;
      }, 5000);
      setTimeout(() => {
         titleElelementHTML.remove();
      },7000);
   }
}