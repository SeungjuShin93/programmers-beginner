// 라매님 풀이
function solution(letter) {
  const morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  let answer = '';
  let currentMorse = '';
  for (let i = 0; i < letter.length; i++) {
    const item = letter[i];
    if (letter[i] === ' ') {
      answer += morse[currentMorse];
      currentMorse = '';
    } else {
      currentMorse += item;
    }
  }
  answer += morse[currentMorse];
  return answer;
}

// JS 기능 활용
function solution(letter) {
  const morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  let answer = '';
  const splittedLetter = letter.split(' ');
  for (let i = 0; i < splittedLetter.length; i++) {
    answer += morse[splittedLetter[i]];
  }
  return answer;
}

// 나의 풀이
function solution(letter) {
  const morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  let answer = '';
  let findLetter = '';
  let findArr = [];
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === ' ') {
      findArr.push(findLetter);
      findLetter = '';
    } else {
      findLetter += letter[i];
    }
  }
  if (findLetter !== '') {
    findArr.push(findLetter);
  }

  for (let i = 0; i < findArr.length; i++) {
    answer += morse[findArr[i]];
  }
  return answer;
}

console.log(solution('.... . .-.. .-.. ---'));
