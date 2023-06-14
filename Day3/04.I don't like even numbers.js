function solution(n) {
  var answer = [];
  let cnt = 1;
  while (cnt <= n) {
    if (cnt % 2 === 1) {
      answer.push(cnt);
    }
    cnt++;
  }
  return answer;
}

// n이 홀 수 인지 판별 후 배열에 push
