// 나의 풀이
function solution(n, t) {
  let result = n;
  for (let i = 0; i < t; i++) {
    result *= 2;
  }
  return result;
}

console.log(solution(7, 15));

// 라매님 풀이
function solution(n, t) {
  return 2 ** t * n;
}
