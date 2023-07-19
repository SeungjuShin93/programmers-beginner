// 나의 풀이
function solution(num, k) {
  let myNum = String(num);
  let myK = String(k);
  let check = [...myNum].findIndex((item) => item == myK);
  if (check !== -1) {
    return check + 1;
  } else {
    return check;
  }
}
console.log(solution(232443, 4));

// 라매님 풀이1
function solution(num, k) {
  const strNum = String(num);
  for (let i = 0; i < strNum.length; i++) {
    const item = strNum[i];
    if (item === String(k)) {
      return i + 1;
    }
  }
  return -1; // 한번도 위에서 같은 걸 찾지 못했을 때
}
