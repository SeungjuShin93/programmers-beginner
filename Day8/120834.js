function solution(age) {
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  let arr2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let Str = age.String();
  let newStr = '';
  for (let i = 0; i < Str.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === Str[i]) {
        newStr += arr[arr2[j]];
      }
    }
  }
  return newStr;
}

// // 아래는 아스키 코드 활용
// function solution(age) {
//   let newStr = String(age);
//   let answer = '';
//   for (let i = 0; i < newStr.length; i++) {
//     answer += String.fromCharCode(newStr[i].charCodeAt(0) + 49);
//   }
//   return answer;
// }
