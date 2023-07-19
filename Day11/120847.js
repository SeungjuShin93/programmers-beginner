// 나의 해결
function solution(numbers) {
  let copy = [...numbers];
  copy.sort((a, b) => a - b);
  let num = copy.length;
  const answer = copy[num - 1] * copy[num - 2];
  return answer;
}

console.log(solution([0, 31, 24, 10, 1, 9]));

// 라매님 해결
function solution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => b - a);
  return sortedNumbers[0] * sortedNumbers[1];
}

// 라매님 해결 중 무식한 방법
function solution(numbers) {
  let maxValue = -1;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      maxValue = Math.max(maxValue, numbers[i] * numbers[j]);
    }
  }
  return maxValue;
}
