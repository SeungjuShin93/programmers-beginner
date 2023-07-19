// 나의 풀이
function solution(my_string) {
  let sum = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] >= 0 && my_string[i] <= 9) {
      sum += parseInt(my_string[i]);
    }
  }
  return sum;
}

// 라매님 풀이 인데 숫자가 두자리면 두자리인 채로 계산
function solution(my_string) {
  let sum = 0;
  let keepNumberString = '';
  for (let i = 0; i < my_string.length; i++) {
    const item = Number(my_string[i]);
    if (Number.isNaN(item)) {
      sum += Number(keepNumberString);
      keepNumberString = '';
      continue;
    }
    keepNumberString += item;
  }
  if (keepNumberString.length > 0) {
    sum += Number(keepNumberString);
  }
  return sum;
}
console.log(solution('aAb1B2cC34oOp'));
