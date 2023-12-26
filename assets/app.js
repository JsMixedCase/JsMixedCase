// Чередовать буквы
function capitalizeAlternateLetters(text) {
  let result = "";
  let isUpperCase = true; // флаг для отслеживания, должна быть ли следующая буква заглавной

  for (let i = 0; i < text.length; i++) {
    let letter = text.charAt(i);

    if (isUpperCase) {
      result += letter.toUpperCase();
    } else {
      result += letter.toLowerCase();
    }

    isUpperCase = !isUpperCase; // переключаем флаг на каждой итерации
  }

  return result;
}

function mutateText1(text) {
  document.getElementById('result_1').innerText = capitalizeAlternateLetters(text)
}

// каждое слово с большой буквы
function capitalizeWords(str) {
  let words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}

function mutateText2(text) {
  document.getElementById('result_1').innerText = capitalizeWords(text)
}

function mutateText3(text) {
  let words = text.split(' ');
  let resultArr = [];

  words.forEach(word => {
    resultArr.push(capitalizeAlternateLetters(word))
  })

  document.getElementById('result_1').innerText = resultArr.join(' ')
}

function mutateText(e) {
  window[document.querySelector('input[name="group1"]:checked')?.value](e.value);
}
