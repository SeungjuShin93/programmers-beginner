function solution(i, j, k) {
  let cnt = 0;
  const checkNum = String(k);
  for (let num = i; num <= j; num++) {
    const item = String(num);
    if (item.includes(checkNum)) {
      for (let i = 0; i < item.length; i++) {
        if (item[i] === checkNum) cnt++;
      }
    }
  }
  return cnt;
}
console.log(solution(1, 13, 1)); // 6
// console.log(solution(10, 50, 5)); // 5
// console.log(solution(3, 10, 2)); // 0
