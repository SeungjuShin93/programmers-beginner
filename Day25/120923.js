function solution(num, total) {
  var answer = [];
  let firstNum;
  if (num % 2 === 1) {
    firstNum = parseInt(total / num) - parseInt(num / 2);
    for (let i = 0; i < num; i++) {
      answer.push(firstNum + i);
    }
  } else {
    firstNum = parseInt(total / num) - parseInt(num / 2) + 1;
    for (let i = 0; i < num; i++) {
      answer.push(firstNum + i);
    }
  }
  return answer;
}
console.log(solution(3, 12)); // [3,4,5]
console.log(solution(5, 15)); // [1,2,3,4,5]
console.log(solution(4, 14)); // [2,3,4,5]
