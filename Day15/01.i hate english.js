// 나의 풀이
function solution(numbers) {
  var answer = '';
  let obj = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0',
  };
  let findStr = '';
  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    findStr += item;
    if (obj[findStr]) {
      answer += obj[findStr];
      findStr = '';
    }
  }
  return Number(answer);
}

console.log(solution('onefourzerosixseven'));

// 라매님 풀이
const numberStrings = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
function solution(numbers) {
  let answer = '';
  for (let i = 0; i < numbers.length; ) {
    const compareString = numbers[i] + numbers[i + 1];
    for (let j = 0; j < numberStrings.length; j++) {
      const numberString = numberStrings[j];
      const compareNumberString = numberString[0] + numberString[1];
      if (compareString === compareNumberString) {
        answer += String(j);
        i += numberString.length;
        break;
      }
    }
  }
  return Number(answer);
}
