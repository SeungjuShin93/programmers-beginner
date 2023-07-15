// 나의 풀이
function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  }
  return 2;
}

console.log(solution('ab6CDE443fgh22iJKlmn1o', '6CD'));

// 나의 풀이2
function solution(str1, str2) {
  for (let i = 0; i < str1.length - str2.length + 1; i++) {
    let item = '';
    for (let j = i; j < i + str2.length; j++) {
      item += str1[j];
    }
    if (item === str2) {
      return 1;
    }
  }
  return 2;
}

// 라매님 풀이
function solution(str1, str2) {
  for (let str1Idx = 0; str1Idx < str1.length; str1Idx++) {
    let isAllEqual = true;
    for (let str2Idx = 0; str2Idx < str2.length; str2Idx++) {
      if (str1[str1Idx + str2Idx] !== str2[str2Idx]) {
        isAllEqual = false;
        str1Idx = str1Idx + str2Idx;
        break;
      }
    }
    if (isAllEqual) {
      return 1;
    }
  }
  return 2;
}
