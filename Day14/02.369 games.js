// 나의 풀이
function solution(order) {
  let cnt = 0;
  let item = order.toString();
  let arr = [3, 6, 9];
  for (let i = 0; i < item.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (item[i].includes(arr[j])) {
        cnt++;
      }
    }
  }
  return cnt;
}
console.log(solution(29423));

// 라매님 풀이
function solution(order) {
  let answer = 0;
  const stringOrder = String(order);
  for (let i = 0; i < stringOrder.length; i++) {
    const item = stringOrder[i];
    if (item === '3' || item === '6' || item === '9') {
      answer++;
    }
  }
  return answer;
}
