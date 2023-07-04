// 나의 해결
function solution(n) {
  let cnt = 0;
  for (let i = n; i >= 4; i--) {
    for (let j = i - 1; j >= 2; j--) {
      if (i % j == 0) {
        cnt++;
        break;
      }
    }
  }
  return cnt;
}

console.log(solution(10));

// 라매님 해결
function solution(n) {
  let answer = 0;
  for (let i = n; i >= 1; i--) {
    // i가 합성수인지 비교해야 하는 숫자.
    let isCount = false;
    for (let num = 2; num < i - 1; num++) {
      if (i % num === 0) {
        // 합성수
        isCount = true;
      }
    }
    // isCount => 합성수 여부를 확인할 수 있음
    if (isCount) {
      answer += 1;
    }
  }
  return answer;
}

// 라매님 해결에서 개선 버전
const getIsCount = (i) => {
  let isCount = false;
  for (let num = 2; num < i - 1; num++) {
    if (i % num === 0) {
      // 합성수
      isCount = true;
    }
  }
  return isCount;
};
function solution(n) {
  let answer = 0;
  for (let i = n; i >= 1; i--) {
    // i가 합성수인지 비교해야 하는 숫자.
    const isCount = getIsCount(i);
    // isCount => 합성수 여부를 확인할 수 있음
    if (isCount) {
      answer += 1;
    }
  }
  return answer;
}
