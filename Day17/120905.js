// 나의 풀이
function solution(n, numlist) {
  var answer = [];
  for (let i = 0; i < numlist.length; i++) {
    const item = numlist[i];
    if (item % n === 0) {
      answer.push(item);
    }
  }
  return answer;
}
console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));

// 라매님 풀이
// 100% 동일

// 라매님 풀이2
function solution(n, numlist) {
  return numlist.filter((item) => item % 3 === 0);
}
