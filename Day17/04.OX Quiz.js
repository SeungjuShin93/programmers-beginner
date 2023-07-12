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
