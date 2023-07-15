// 나의 풀이
function solution(dots) {
  var answer = 0;
  let width, height;
  let x = dots[0][0];
  let y = dots[0][1];
  for (let i = 1; i < dots.length; i++) {
    if (dots[i][0] === x) {
      width = Math.abs(dots[i][1] - y);
    }
  }
  for (let i = 1; i < dots.length; i++) {
    if (dots[i][1] === y) {
      height = Math.abs(dots[i][0] - x);
    }
  }
  answer = width * height;
  return answer;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
