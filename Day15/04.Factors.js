// 나의 풀이
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}
console.log(solution(24, [1, 2, 3, 4, 6, 8, 12, 24]));

// 라매님 풀이
// 100% 동일
