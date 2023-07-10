// 나의 풀이
function solution(array) {
  var answer = [];
  const arr = [...array];
  const sortedArr = array.sort((a, b) => b - a);
  const max = sortedArr[0];
  const idx = arr.findIndex((a) => a === max);
  answer.push(max, idx);
  return answer;
}
console.log(solution([1, 8, 3]));

// 라매님 풀이
function solution(array) {
  let maxValue = -1;
  let maxIndex = -1;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (maxValue < item) {
      maxValue = item;
      maxIndex = i;
    }
  }
  return [maxValue, maxIndex];
}
