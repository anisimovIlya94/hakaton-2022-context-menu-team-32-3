import { Module } from '../core/module';

export class CalculatorModule extends Module { 
   #firstNumberInputValue
   #secondNumberInputValue
   #mathInputValue
   #math
   constructor() {
      super('calculator', 'Калькулятор');
      this.#firstNumberInputValue = null;
      this.#secondNumberInputValue = null;
      this.#mathInputValue = null;
      this.#math = ['+', '-', '*', '/', '^', '%'];
   }
   #createErrorBlock(textContent) {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error';
      errorMessage.textContent = textContent;
      errorMessage.style.color = 'red';
      errorMessage.style.margin = '10px 0 0 0';
      return errorMessage;
   }

   #deleteErrorBlock() {
      const errorMessage = document.querySelector('.error');
      if (errorMessage) {
         errorMessage.remove();
      }
   }

   #calculate() {
      switch (this.#mathInputValue) {
         case this.#math[0]: return +this.#firstNumberInputValue + +this.#secondNumberInputValue;
         case this.#math[1]: return +this.#firstNumberInputValue - +this.#secondNumberInputValue;
         case this.#math[2]: return +this.#firstNumberInputValue * +this.#secondNumberInputValue;
         case this.#math[3]: return +this.#firstNumberInputValue / +this.#secondNumberInputValue;
         case this.#math[4]: return (+this.#firstNumberInputValue) ** (+this.#secondNumberInputValue);
         case this.#math[5]: return +this.#firstNumberInputValue % +this.#secondNumberInputValue;
         default: return 'Ошибка';
      }
   }

   #validation(value, calcWrapper, isValid) {
      const isError = document.querySelector('.error')
      if (value === '') {
         if (!isError) {
            calcWrapper.append(this.#createErrorBlock('Поля не должны быть пустыми'));
         }
      } else if (!isValid) {
            if (!isError) {
               calcWrapper.append(this.#createErrorBlock('Неправильный формат данных.Необходимо ввести число'));
            }
      } else if (isValid && isError){
            this.#deleteErrorBlock();
      }
   }

   trigger() {
      // создаем оболочку калькулятора
      const calcWrapper = document.createElement('div');
      calcWrapper.className = 'calculator-wrapper';
      calcWrapper.style.margin = '200px 0 0 200px';
      document.body.prepend(calcWrapper)
      calcWrapper.innerHTML = `<div class="calculator-wrapper">
      <input class="first-number-input" type="text" placeholder="Введите число">
      <input class="math-input" type="text" placeholder="Введите знак">
      <input class="second-number-input" type="text" placeholder="Введите число">
      <button class="calculate-btn">Посчитать</button>
      <button type="reset" class="clear-btn">Очистить</button>
      <div class="result-wrapper">Результат:<span class="result"></span></div>
      </div>
      <div><button class="close">Закрыть</button></div>
      `;
      const result = document.querySelector('.result-wrapper');
      result.style.color = 'green';
      result.style.margin = '10px 0 0 0';
      // прослушка закрытия калькулятора
      const closeBtn = document.querySelector('.close');
      closeBtn.style.margin = '10px 0 0 0'
      closeBtn.addEventListener('click', () => {
         calcWrapper.remove();
      })

         // прослушка первого поля ввода
      const firstNumberInput = document.querySelector('.first-number-input');
      firstNumberInput.style.margin = '0 10px 0 0'
      firstNumberInput.addEventListener('input', (event) => {
         const { target } = event;
         const isValid = Boolean(+target.value);
         this.#validation(target.value, calcWrapper, isValid);
         if (isValid) {
            this.#firstNumberInputValue = target.value;
         }
      })
      // прослушка второго поля ввода
      const secondNumberInput = document.querySelector('.second-number-input');
      secondNumberInput.style.margin = '0 10px 0 10px'
      secondNumberInput.addEventListener('input', (event) => {
         const { target } = event;
         const isValid = Boolean(+target.value);
         this.#validation(target.value, calcWrapper, isValid);
         if (isValid) {
            this.#secondNumberInputValue = target.value;
         }
      })

      // прослушка поля ввода знака

      const mathInput = document.querySelector('.math-input');
      mathInput.addEventListener('input', (event) => {
         const { target } = event;
         const isError = document.querySelector('.error');
         if (isError) {
            this.#deleteErrorBlock();
         }
         let isValid = false;
         this.#math.forEach((math) => {
            if (math === target.value) {
               isValid = true;
            }
         })
         this.#validation(target.value, calcWrapper, isValid);
         if (isValid) {
            this.#mathInputValue = target.value;
         }
      })

      // прослушка нажатия на кнопку подсчета
      const culculateBtn = document.querySelector('.calculate-btn');
      culculateBtn.style.margin = '0 7px 0 0';
      culculateBtn.addEventListener('click', () => {
         if (this.#firstNumberInputValue && this.#secondNumberInputValue && this.#mathInputValue) {
            const result = this.#calculate();
            const resultHTML = document.querySelector('.result');
            resultHTML.textContent = result;
         }
      });

      // прослушка нажатия на кнопку очистить

      const clearBtn = document.querySelector('.clear-btn');
      clearBtn.addEventListener('click', () => {
         const firstInput = document.querySelector('.first-number-input');
         const secondInput = document.querySelector('.second-number-input');
         const mathInput = document.querySelector('.math-input');
         const result = document.querySelector('.result');
         result.textContent = '';
         firstInput.value = '';
         secondInput.value = '';
         mathInput.value = '';
      })
   }
}