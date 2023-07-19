// 라매님 풀이
const win = {
  2: '0',
  0: '5',
  5: '2',
};
function solution(rsp) {
  let answer = '';
  for (let i = 0; i < rsp.length; i++) {
    answer += win[rsp[i]];
  }
  return answer;
}

// if 문
function solution(rsp) {
  var answer = '';
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === '2') answer += '0';
    else if (rsp[i] === '0') answer += '5';
    else {
      answer += '2';
    }
  }
  return answer;
}

console.log(solution('522'));

console.log('----------');
// switch 문
function solution(rsp) {
  var answer = '';
  for (let i = 0; i < rsp.length; i++) {
    switch (rsp[i]) {
      case '0':
        answer += 5;
        break;
      case '2':
        answer += 0;
        break;
      default:
        answer += 2;
        break;
    }
  }
  return answer;
}

console.log(solution('502'));
