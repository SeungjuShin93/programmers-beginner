function solution(n) {
  let result = 0;
  let item = '';
  for (let i = 1; i <= n; i++) {
    result += 1;
    item = String(result);
    while (result % 3 === 0 || item.includes('3')) {
      result += 1;
      item = String(result);
    }
  }
  return result;
}
console.log(solution(9));
