// 나의 해결
function solution(n) {
  for (let i = 1; ; i++) {
    if (n < fac(i)) {
      return i - 1;
    }
  }
  function fac(f) {
    let result = 1;
    for (; f > 1; f--) {
      result *= f;
    }
    return result;
  }
}

console.log(solution(720));

// 라매님 해결
const getFactorial = (i) => {
  let result = 1;
  for (let v = 1; v <= i; v++) {
    result *= v;
  }
  return result;
};

function solution(n) {
  for (let i = 1; ; i++) {
    const result = getFactorial(i);
    if (n < result) {
      return i - 1;
    }
  }
}
