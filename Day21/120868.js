// 나의 풀이
function solution(sides) {
  let cnt = 0;
  const arr = sides.sort((a, b) => a - b);
  // arr[1]이 max 인 경우
  for (let i = arr[1] - arr[0] + 1; i <= arr[1]; i++) {
    cnt++;
  }
  // 나머지 한변이 max인 경우
  for (let i = arr[1] + arr[0] - 1; i > arr[1]; i--) {
    cnt++;
  }
  return cnt;
}

console.log(solution([11, 7]));
