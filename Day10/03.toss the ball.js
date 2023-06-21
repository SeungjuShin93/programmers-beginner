// 라매님 해결
function solution(numbers, n) {
  let cnt = 1;
  for (let i = 0; ; i += 2) {
    i %= numbers.length;
    const item = numbers[i];
    if (cnt == n) {
      return item;
    }
    cnt++;
  }
}

// 나의 해결
function solution(numbers, n) {
  let cnt = 0;
  let leng = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    cnt += 2;
    if (cnt >= leng) {
      cnt %= leng;
    }
  }
  return numbers[cnt];
}

console.log(solution([1, 2, 3, 4, 5, 6], 5));
