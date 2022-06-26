import { Module } from "../core/module";

export class getCustomMessege extends Module {
   constructor() {
      super("customMessage", "Генератор пацанских цитат");
  }

  random(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  trigger() {
    const arrayOfString1 = [
      "Живи",
      "Не верь тому, кому не веришь",
      "Иногда жизнь — это жизнь, а ты в ней иногда",
      "Сначала потом, затем, снова опять",
      "Сначала потом",
      "Если в дверь не постучаться",
      "Лучше иметь друга",
      "Настоящий мужик",
      "Будь сильным",
      "Бегать за овцами",
      "Если тебе тяжело идти",
    ];
    const arrayOfString2 = [
      "лучше быть последним — первым",
      "работа не волк",
      "братуха",
      "ведь вера в не веру рождает еще большее недоверие",
      "затем",
      "ее никогда не откроют",
      "чем друг друга",
      "всегда стирает носки",
      "удел баранов",
      "всегда есть шанс",
    ];
    const arrayOfString3 = [
      "помни, где ты был и кем ты стал",
      "работа это ворк",
      "а волк — это ходить",
      "бесплатный сыр бывает только бесплатным",
      "снова опять",
      "чем нож в жопу",
      "сообщения!",
      "но не сильно будь",
      "я бегаю только за пивом",
      "значит ты жирный",
    ];
    const randomNumber1 = this.random(0, arrayOfString1.length);
    const randomNumber2 = this.random(0, arrayOfString2.length);
    const randomNumber3 = this.random(0, arrayOfString3.length);

    const customMessageContainer = document.createElement("div");
    customMessageContainer.className = "modul-message-container";
    document.body.prepend(customMessageContainer);

    const customMessage = document.createElement("p");

    customMessage.className = "modul-message";

    customMessageContainer.append(customMessage);
    customMessage.textContent = `${arrayOfString1[randomNumber1]},  ${arrayOfString2[randomNumber2]},  ${arrayOfString3[randomNumber3]}`;

    customMessage.style.cssText = `
         font-weight: 600;
         background-image: linear-gradient(to right, #553c9a 45%, #ee4b2b);
         color: transparent;
         background-clip: text;
         -webkit-background-clip: text;
    `;
    customMessageContainer.style.cssText = `
        border:5px solid #00A4BD;
        margin-right: auto;
        width: 300px;
        border-radius: 10px;
        box-shadow: 4px 4px #00A4BD, 8px 8px #FF7A59, 12px 12px #334758;
        margin-left: 10px;
      `;
     setTimeout(() => {
        customMessageContainer.remove();
     }, 5000);
  }
}