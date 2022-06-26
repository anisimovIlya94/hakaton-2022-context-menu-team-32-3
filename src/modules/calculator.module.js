import { Module } from '../core/module';

export class CalculatorModule extends Module { 
   constructor() {
      super('calculator', 'Калькулятор');
   }

   trigger() {
      // создаем оболочку калькулятора
      const calcWrapper = document.createElement('div');
      calcWrapper.className = 'calculator-wrapper';
      document.body.prepend(calcWrapper)
      calcWrapper.innerHTML = `<div class="calculator-wrapper">
      <input class="first-number-input" type="text">
      <input class="math-input" type="text">
      <input class="second-number-input" type="text">
      <button>Посчитать</button>
      <span>6</span>
      <div class="error">поле не должно быть пустым</div>
      <div><button class="close">Закрыть</button></div>
    
    </div>
    `;
      // прослушка закрытия калькулятора
      const closeBtn = document.querySelector('.close');
      closeBtn.addEventListener('click', () => {
         calcWrapper.remove();
      })

      const errorMessage = document.querySelector('.error');
      errorMessage.style.color = 'red';
      // прослушка первого поля ввода
      const firstNumberInput = document.querySelector('.first-number-input');
      firstNumberInput.addEventListener('input', (event) => {
         const { target } = event;
         const isValid = Boolean(+target.value);
         if (target.value==='') {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Поле не должно быть пустым';
         } else if (!isValid) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Неправильный формат данных.Необходимо ввести число';
         }
         else if (isValid && errorMessage){
            errorMessage.style.display = 'none';
         }
      })
      // прослушка второго поля ввода
      const secondNumberInput = document.querySelector('.second-number-input');
      secondNumberInput.addEventListener('input', (event) => {
         const { target } = event;
         const isValid = Boolean(+target.value);
         if (target.value==='') {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Поле не должно быть пустым';
         } else if (!isValid) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Неправильный формат данных.Необходимо ввести число';
         }
         else if (isValid && errorMessage){
            errorMessage.style.display = 'none';
         }
      })
   }

}