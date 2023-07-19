function solution(numbers) {
  let sum = 0;
  let cnt = 0;
  while (cnt < numbers.length) {
    sum = sum + numbers[cnt];
    cnt++;
  }
  return sum / numbers.length;
}
