// https://present.kim/posts/programmers/120875
// 참고 사이트
// 스스로 해결 못 했음

// 풀이 1
function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;
  return 0;
}

function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}

// 풀이 2
function solution(dots) {
  //두 점의 인덱스가 주어지면 두점을 이은 직선의 각도를 반환하는 함수
  const angle = (a, b) => (dots[a][0] - dots[b][0]) / (dots[a][1] - dots[b][1]);

  //직선을 만들 수 있는 모든 방법을 인덱스로 표현하고, 모두 확인
  for (const [a1, b1, a2, b2] of [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ]) {
    //만약 두 직선의 각도가 같다면 1을 반환
    if (angle(a1, b1) === angle(a2, b2)) {
      return 1;
    }
  }

  //두 직선의 각도가 같은 조합이 없는 경우 0을 반환
  return 0;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
// 풀이 2의 개선된 코드
//두 점을 이은 직선의 각도를 반환하는 함수
const angle = (a, b) => (a[0] - b[0]) / (a[1] - b[1]);

function solution([a, b, c, d]) {
  //직선을 만들 수 있는 모든 방법을 확인
  for (const [a1, b1, a2, b2] of [
    [a, b, c, d],
    [a, c, b, d],
    [a, d, b, c],
  ]) {
    //만약 두 직선의 각도가 같다면 1을 반환
    if (angle(a1, b1) === angle(a2, b2)) {
      return 1;
    }
  }

  //두 직선의 각도가 같은 조합이 없는 경우 0을 반환
  return 0;
}
