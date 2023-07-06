// 나의 풀이
function solution(s) {
  var answer = 0;
  let keepStr = '';
  let lastStr = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 'Z') {
      if (s[i] === ' ') {
        lastStr = Number(keepStr);
        answer += Number(keepStr);
        keepStr = '';
      }
      keepStr += s[i];
    } else {
      answer -= lastStr;
    }
  }
  if (keepStr !== null) {
    answer += Number(keepStr);
  }
  return answer;
}

console.log(solution('10 Z 30 Z'));

// 라매님 풀이
function solution(s) {
  let numbers = [];
  let collectNumber = '';
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === 'Z') {
      numbers.pop();
    } else if (item === ' ') {
      numbers.push(Number(collectNumber));
      collectNumber = '';
    } else {
      // 숫자
      collectNumber += item;
    }
  }
  if (collectNumber !== '') {
    numbers.push(Number(collectNumber));
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(solution('10 Z 30 Z 29 30 Z 31'));

// 라매님 풀이2번째 - split 메소드 활용
function solution(s) {
  let sum = 0;
  const splittedArray = s.split(' ');
  for (let i = 0; i < splittedArray.length; i++) {
    const item = splittedArray[i];
    if (item !== 'Z') {
      sum += Number(item);
    } else {
      sum -= Number(splittedArray[i - 1]);
    }
  }
  return sum;
}

console.log(solution('10 Z 30 Z 29 30 Z 31'));
