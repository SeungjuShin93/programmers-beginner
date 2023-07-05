// 나의 해결
function solution(n) {
  var answer = [];
  for (let i = 2; i <= n; i++) {
    let cnt = 0;
    if (n % i === 0) {
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
          cnt++;
        }
      }
      if (cnt === 2) {
        answer.push(i);
      } else {
        cnt = 0;
      }
    }
  }
  return answer;
}
console.log(solution(420));
