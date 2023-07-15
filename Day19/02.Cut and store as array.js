// 나의 풀이
function solution(my_str, n) {
  var answer = [];
  let str = '';
  for (let i = 0; i < my_str.length; i += n) {
    for (let j = i; j < i + n; j++) {
      if (my_str[j] == null) {
        break;
      }
      str += my_str[j];
    }
    answer.push(str);
    str = '';
  }
  return answer;
}

console.log(solution('abc1Addfggg4556b', 6));

// 라매님 풀이
function solution(my_str, n) {
  var answer = [];
  let tempStr = '';
  for (let i = 0; i < my_str.length; i++) {
    const item = my_str[i];
    tempStr += item;
    if (i % n === n - 1) {
      answer.push(tempStr);
      tempStr = '';
    }
  }
  if (tempStr.length > 0) {
    answer.push(tempStr);
  }
  return answer;
}
