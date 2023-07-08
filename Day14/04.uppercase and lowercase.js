// 나의 풀이
function solution(my_string) {
  var answer = '';
  for (let i = 0; i < my_string.length; i++) {
    const item = my_string[i];
    if (item >= 'a' && item <= 'z') {
      answer += item.toUpperCase();
    }
    if (item >= 'A' && item <= 'Z') {
      answer += item.toLowerCase();
    }
  }
  return answer;
}

// 라매님 풀이
// 아스키 코드 이용 'a' = 97, 'A' = 65
function solution(my_string) {
  var answer = '';
  for (let i = 0; i < my_string.length; i++) {
    const ch = my_string[i];
    const isCapital = ch < 'a';
    if (isCapital) {
      answer += ch.toLowerCase();
    } else {
      answer += ch.toUpperCase();
    }
  }
  return answer;
}
