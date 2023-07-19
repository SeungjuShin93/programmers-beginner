// 나의 풀이
function solution(n) {
  var answer = 0;
  let i = 10;
  while (true) {
    answer += n % i;
    n = parseInt(n / i);
    if (n === 0) {
      break;
    }
  }
  return answer;
}
console.log(solution(930211));

// 라매님 풀이
function solution(n) {
  let sum = 0;
  const strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    const item = strN[i];
    sum += Number(item);
  }
  return sum;
}
