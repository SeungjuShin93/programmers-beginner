// 나의 풀이
function solution(my_string) {
  var answer = '';
  for (let i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
}

console.log(solution('We are the world'));

// 라매님 풀이, includes 안쓰고 구현
function solution(my_string) {
  let result = '';
  for (let i = 0; i < my_string.length; i++) {
    const item = my_string[i];
    let existed = false;
    for (let j = 0; j < result.length; j++) {
      if (item === result[j]) {
        existed = true;
        break;
      }
    }
    if (!existed) {
      result += item;
    }
  }
  return result;
}

console.log(solution('We are the world'));
