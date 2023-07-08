// 나의 풀이
function solution(sides) {
  let copy = [...sides].sort((a, b) => a - b);
  // if (copy[0] + copy[1] > copy[2]) {
  //   return 1;
  // } else {
  //   return 2;
  // }
  return copy[0] + copy[1] > copy[2] ? 1 : 2;
}

console.log(solution([199, 72, 222]));

// 라매님 풀이
function solution(sides) {
  let maxV = -1;
  let maxVIdx = -1;
  for (let i = 0; i < sides.length; i++) {
    const item = sides[i];
    if (maxV < item) {
      maxV = item;
      maxVIdx = i;
    }
  }
  let sum = 0;
  for (let i = 0; i < sides.length; i++) {
    if (i !== maxVIdx) {
      sum += sides[i];
    }
  }
  return maxV < sum ? 1 : 2;
}
console.log(solution([199, 72, 222]));
