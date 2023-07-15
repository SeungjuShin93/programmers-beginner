// 나의 풀이
function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const item = quiz[i];
    const arr = item.split(' ');
    if (arr[1] === '+') {
      if (parseInt(arr[0]) + parseInt(arr[2]) === parseInt(arr[4])) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    } else {
      if (parseInt(arr[0]) - parseInt(arr[2]) === parseInt(arr[4])) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    }
  }
  return answer;
}
console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));

// 라매님 풀이 (변수 선언만 다르고 내용은 동일)
function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const item = quiz[i];
    const itemArr = item.split(' ');
    const firstNum = Number(itemArr[0]);
    const op = itemArr[1];
    const secondNum = Number(itemArr[2]);
    const result = Number(itemArr[4]);
    if (op === '+') {
      if (firstNum + secondNum === result) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    } else {
      if (firstNum - secondNum === result) {
        answer.push('O');
      } else {
        answer.push('X');
      }
    }
  }
  return answer;
}

// 라매님 풀이2 - 위에 복잡한 코드를 개선
function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const item = quiz[i];
    // const itemArr = item.split(' ');
    // const firstNum = Number(itemArr[0]);
    // const op = itemArr[1];
    // const secondNum = Number(itemArr[2]);
    // const result = Number(itemArr[4]);
    const [firstNum, op, secondNum, _, result] = item
      .split(' ')
      .map((v, index) => {
        if (index % 2 === 0) {
          return Number(v);
        }
        return v;
      });
    // 구조분해할당 후 홀수번째만 숫자로 바꿔줌
    const calResult = op === '+' ? firstNum + secondNum : firstNum - secondNum;
    if (calResult === result) {
      answer.push('O');
    } else {
      answer.push('X');
    }
  }
  return answer;
}
