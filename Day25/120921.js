function solution(A, B) {
  let cnt = 0;
  const arr = [...A];
  if (A === B) {
    return 0;
  }
  for (let i = 0; i < A.length; i++) {
    const item = arr.pop();
    arr.unshift(item);
    cnt++;
    if (arr.join('') === B) {
      break;
    }
  }
  return cnt === A.length ? -1 : cnt;
}
console.log(solution('hello', 'ohell'));
console.log(solution('apple', 'elppa'));
console.log(solution('abc', 'abc'));

// 풀이
let solution = (a, b) => (b + b).indexOf(a);

// 다른 풀이
function solution(A, B) {
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1);
    if (A === B) return i + 1;
  }
  return -1;
}
