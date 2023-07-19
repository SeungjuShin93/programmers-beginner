// 나의 해결
function solution(dot) {
  let answer;
  // const [x, y] = [0, 1] 요렇게 가능, 구조분해할당
  if (dot[0] > 0 && dot[1] > 0) {
    answer = 1;
  } else if (dot[0] > 0 && dot[1] < 0) {
    answer = 4;
  } else if (dot[0] < 0 && dot[1] > 0) {
    answer = 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    answer = 3;
  }
  return answer;
}

console.log(solution([2, 4]));
