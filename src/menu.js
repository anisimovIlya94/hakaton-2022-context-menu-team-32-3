import { Menu } from './core/menu'
import {Module} from './core/module'

export class ContextMenu extends Menu {
   constructor(selector) {
      super(selector);
   }
   open() {
      document.addEventListener('contextmenu', (event) => {
         event.preventDefault();
         this.el.classList.add('open')
         this.el.style.margin = `${event.clientY}px 0px 0px ${event.clientX}px`;
      })
   }
   close() {
      this.el.classList.remove('open');
   }
   add(module) {
      if (module instanceof Module) {
         this.el.insertAdjacentHTML('beforeend', module.toHTML());
      }
   }
}