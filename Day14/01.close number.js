// 나의 풀이
function solution(array, n) {
  let compare = 100;
  let idx = 0;
  for (let i = 0; i < array.length; i++) {
    const item = Math.abs(array[i] - n);
    if (compare > item) {
      compare = item;
      idx = i;
    } else if (compare == item) {
      if (array[idx] > array[i]) {
        idx = i;
      }
    }
  }
  return array[idx];
}

console.log(solution([6, 2, 3, 10, 19, 21, 20, 40, -20, 4], 5));

// 라매님 풀이 -> 정렬 사용
function solution(array, n) {
  let answer = 0;
  let minAbs = 999;
  const sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    const item = sortedArray[i];
    if (minAbs > Math.abs(n - item)) {
      minAbs = Math.abs(n - item);
      answer = item;
    }
  }
  return answer;
}
