// 나의 풀이
function solution(my_string, num1, num2) {
  let answer = '';
  const arr = [...my_string];
  const first = arr[num1];
  const second = arr[num2];
  arr[num1] = second;
  arr[num2] = first;
  answer = arr.join('');
  return answer;
}

console.log(solution('I love you', 3, 6));

// 라매님 풀이
function solution(my_string, num1, num2) {
  let answer = '';
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += my_string[num2];
    } else if (i === num2) {
      answer += my_string[num1];
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}
