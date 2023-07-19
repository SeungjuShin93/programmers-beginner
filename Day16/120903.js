// 나의 풀이
function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        answer++;
      }
    }
  }
  return answer;
}
console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));

// 나의 풀이 - 굳이 find를 써보고 싶었음
function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      let check = s2.find((item) => item === s1[i]);
      if (check) {
        answer++;
        break;
      }
    }
  }
  return answer;
}
