const text = [
  'Проснись, Нео!!!!!\n',
  'Следуй за белым кроликом\n',
  'Матрица следит за тобой\n',
  'Тринити\n'
];

function typeText() {
  let line = 0; // линия Проснись нео
  let count = 0; // счетчик букв в линии
  let out = '';
  let htmlOut = document.querySelector('.out');

  function typeLine() {
    // рисуем строку
    let interval = setTimeout(() => {
      out += text[line][count];
      htmlOut.innerHTML = out + '|';
      count++;
      /**
       *  Проверки!
       * не закончилась ли строка
       */
      if (count >= text[line].length) {
        count = 0;
        line++;
        if (line == text.length) {
          clearTimeout(interval); // очистить таймаут
          htmlOut.innerHTML = out; // убрать вертикальную черту
          return true;
        }
      }
      typeLine();
    }, getRandomInt(getRandomInt(350 * 3.0)));
  }
  typeLine();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

typeText();