// 나의 풀이
function solution(array, n) {
  return array.filter((item) => item === n).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));

// 라매님 풀이
function solution(array, n) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item === n) {
      cnt++;
    }
  }
  return cnt;
}
