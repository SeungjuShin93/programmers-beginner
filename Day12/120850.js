// 나의 해결
function solution(my_string) {
  let newArr = [];

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] >= 0 && my_string[i] <= 9) {
      newArr.push(parseInt(my_string[i]));
    }
  }

  return newArr.sort();
}
console.log(solution('hi12392'));

// 라매님 풀이
function solution(my_string) {
  let newArr = [];

  for (let i = 0; i < my_string.length; i++) {
    const item = Number(my_string[i]);
    if (Number.isNaN(item)) {
      continue;
    }
    newArr.push(item);
  }

  return newArr.sort();
}
console.log(solution('p2o4i8gj2'));