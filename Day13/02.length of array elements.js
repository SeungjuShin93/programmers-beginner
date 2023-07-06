// 나의 풀이
function solution(strlist) {
  var answer = [];
  let cnt = 0;
  for (let i = 0; i < strlist.length; i++) {
    cnt = strlist[i].length;
    answer.push(cnt);
    cnt = 0;
  }
  return answer;
}

console.log(solution(['We', 'are', 'the', 'world!']));

// 라매님 풀이
function solution(strlist) {
  const answer = [];
  for (let i = 0; i < strlist.length; i++) {
    const item = strlist[i];
    answer.push(item.length);
  }
  return answer;
}
