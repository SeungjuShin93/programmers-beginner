// 나의 풀이
function solution(n) {
  for (let i = 2; i <= n / 2; i++) {
    if (n / (i * i) === 1) {
      return 1;
    }
  }
  return 2;
}

console.log(solution(144));

// 라매님 풀이
function solution(n) {
  for (let i = 1; ; i++) {
    if (i * i === n) {
      return 1;
    }
    if (i * i > n) {
      return 2;
    }
  }
}
