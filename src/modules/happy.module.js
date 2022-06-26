import { Module } from '../core/module'

export class testHappiness extends Module {
    constructor() {
       super('happiness', 'Тест "Уровень счастья"');
       this.happiness = 0;
       this.questions = [
         `Вопрос 1. Когда задумываетесь над прожитой жизнью, приходите к выводу, что "все было скорее плохо, чем хорошо" (ответ Нет), "все было скорее хорошо, чем плохо" (ответ Да).`,
         `Вопрос 2. В конце дня обыкновенно недовольны собой (ответ Нет), довольны собой (ответ Да)`,
         `Вопрос 3. Когда смотрите в зеркало, думаете "О, боже, время беспощадно!" (ответ Нет), "Как же я прекрасен! (ответ Да)"`,
         `Вопрос 4. Если узнаете о крупном выигрыше кого-то из знакомых, думаете "Ну мне-то никогда не повезет!" (ответ Нет), "Однажды так повезет и мне! Куплю-ка лотерейку!" (ответ Да) `,
         `Вопрос 5. Если услышите из новостей о каком- либо происшествии, говорите себе: "Вот так однажды будет и со мной!" (ответ Нет), "Эти репортеры умышленно нагнетают страсти!" (ответ Да)`,
         `Вопрос 6. Когда пробуждаетесь утром, чаще всего "ни о чем не хочется думать" (ответ Нет), "радуетесь, что начался новый день" (ответ Да). `,
         `Вопрос 7. Думаете о Ваших приятелях: "они не столь интересны и отзывчивы, как хотелось бы" (ответ Нет), "замечательные люди!" (ответ Да)`,
         `Вопрос 8. Сравнивая себя с другими, находите, что "Меня недооценивают" (ответ Нет), "Гожусь в лидеры, и это, пожалуй, признают все!" (ответ Да) `,
         `Вопрос 9. Если Ваш вес увеличился на четыре-пять килограммов, то впадаете в панику (ответ Нет), прилагаете усилия, чтобы вернуться в форму (ответ Да). `,
         `Вопрос 10. Если Вы угнетены, то жалуетесь на судьбу (ответ Нет), находите способ восстановить жизненные силы (ответ Да).`
       ];
     }
 
    trigger() {
        alert (`Сейчас у Вас есть уникальная возможность измерить уровень Вашего счастья. Отвечайте на вопросы честно для наиболее точного результата. Желаем удачи! :)`);
           
        for (let i = 0; i < this.questions.length; i++) {
            this.question = confirm(`${this.questions[i]}`);
           if (this.question) {
              this.happiness += 1;
           }
        }
        if (this.happiness <= 3) {
            this.body = document.querySelector('body');
            this.body.insertAdjacentHTML('afterbegin', `<div class = "happiness-level"></div>`);
            this.happinessLevel = document.querySelector('.happiness-level');
            this.happinessLevel.insertAdjacentText('afterbegin', `Ваш результат ${this.happiness} баллов из 10. Вы привыкли на все смотреть сквозь черные очки, считаете, что судьба уготовила Вам участь человека невезучего, и даже иногда бравируете этим. А стоит ли? Ваше счастье в Ваших руках. Дерзайте!`);
            this.happinessLevel.style.backgroundColor = '#00bfff';
        } else if (this.happiness > 3 && this.happiness <= 7) {
            this.body = document.querySelector('body');
            this.body.insertAdjacentHTML('afterbegin', `<div class = "happiness-level"></div>`);
            this.happinessLevel = document.querySelector('.happiness-level');
            this.happinessLevel.insertAdjacentText('afterbegin', `Ваш результат ${this.happiness} баллов из 10. Вы "оптимально" счастливый человек, и радости в Вашей жизни явно больше, чем печали. Вы храбры, хладнокровны, у вас трезвый склад ума и легкий характер. Вы верите в себя и оптимистично смотрите на свою жизнь.`);
            this.happinessLevel.style.backgroundColor = '#006400';
        } else {
            this.body = document.querySelector('body');
            this.body.insertAdjacentHTML('afterbegin', `<div class = "happiness-level"></div>`);
            this.happinessLevel = document.querySelector('.happiness-level');
            this.happinessLevel.insertAdjacentText('afterbegin', `Ваш результат ${this.happiness} баллов из 10. Вы до того счастливый человек, что даже не верится, что такое возможно! Радуетесь жизни при любых обстоятельствах. Возможно иногда Вам следует быть более рациональным.`);
       }
       setTimeout(() => {
          this.happiness = 0;
          this.happinessLevel.remove();
        }, 5000);
    }
}