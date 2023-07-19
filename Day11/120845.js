// 나의 해결
function solution(box, n) {
  let width = Math.floor(box[0] / n);
  let length = Math.floor(box[1] / n);
  let height = Math.floor(box[2] / n);
  const answer = width * length * height;
  return answer;
}

console.log(solution([10, 8, 6], 3));

// 라매님 해결
function solution(box, n) {
  let answer = 1;
  for (let i = 0; i < 3; i++) {
    answer *= Math.floor(box[i] / n);
  }
  return answer;
}
