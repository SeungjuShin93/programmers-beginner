// 나의 풀이
function solution(my_string) {
  var answer = 0;
  const splittedArray = my_string.split(' ');
  answer = Number(splittedArray[0]);
  for (let i = 1; i < splittedArray.length; i += 2) {
    if (splittedArray[i] == '+') {
      answer += Number(splittedArray[i + 1]);
    } else if (splittedArray[i] == '-') {
      answer -= Number(splittedArray[i + 1]);
    }
    // switch (splittedArray[i]) {
    //   case '+':
    //     answer += Number(splittedArray[i + 1]);
    //     break;
    //   case '-':
    //     answer -= Number(splittedArray[i + 1]);
    //     break;
    // }
  }
  return answer;
}
console.log(solution('3 + 4'));

// 라매님 풀이
// 100% 동일
