// 나의 풀이
function solution(cipher, code) {
  var answer = '';
  for (let i = 0; i < cipher.length; i++) {
    const item = cipher[i];
    if ((i + 1) % code == 0) {
      answer += item;
    }
  }
  return answer;
}
console.log(solution('dfjardstddetckdaccccdegk'));

// 라매님 풀이
function solution(cipher, code) {
  var answer = '';
  for (let i = code - 1; i < cipher.length; i += code) {
    const item = cipher[i];
    answer += item;
  }
  return answer;
}
console.log(solution('pfqallllabwaoclk', 2));
