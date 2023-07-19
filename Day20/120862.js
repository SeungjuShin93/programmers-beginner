// 나의 풀이
function solution(numbers) {
  const newArr = numbers.sort((a, b) => a - b);
  const newArrLength = newArr.length;
  const valueA = Number(newArr[0]) * Number(newArr[1]);
  const valueB =
    Number(newArr[newArrLength - 1]) * Number(newArr[newArrLength - 2]);
  return valueA > valueB ? valueA : valueB;
}

console.log(solution([0, -31, 24, 10, 1, 9]));

// 라매님 풀이
function solution(numbers) {
  let maxValue = -10000 * 10000 - 1;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const item1 = numbers[i];
      const item2 = numbers[j];
      maxValue = Math.max(maxValue, item1 * item2);
    }
  }
  return maxValue;
}

console.log(solution([0, -31, 24, 10, 1, 9]));
