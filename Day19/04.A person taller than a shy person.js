// 나의 풀이
function solution(array, height) {
  return array.filter((item) => item > height).length;
}
console.log(solution([149, 180, 192, 170], 167));

// 라매님 풀이
function solution(array, height) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item > height) {
      cnt++;
    }
  }
  return cnt;
}
