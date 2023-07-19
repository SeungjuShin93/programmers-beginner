// 나의 풀이
function solution(my_string) {
  var answer = 0;
  let tempStr = '';
  for (let i = 0; i < my_string.length; i++) {
    const item = my_string[i];
    if (isNaN(item)) {
      answer += Number(tempStr);
      tempStr = '';
    } else {
      tempStr += item;
    }
  }
  if (tempStr !== null) {
    answer += Number(tempStr);
  }
  return answer;
}
console.log(solution('aAb1B2cC34oOp'));

// 반복문을 돌면서 알파벳이면 패스
// 숫자가 나오면 임시 스트링에 저장
// 다음것이 알파벳이라면, answer에 추가해주고 리셋
