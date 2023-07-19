// 나의 풀이
function solution(array) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    const item = String(array[i]);
    const itemArr = item.split('');
    const filteredArr = itemArr.filter((item) => item == 7);
    answer += filteredArr.length;
  }
  return answer;
}

console.log(solution([7, 77, 17]));

// 라매님 풀이
function solution(array) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    const item = String(array[i]);
    for (let j = 0; j < item.length; j++) {
      const v = item[j];
      if (v === '7') {
        cnt++;
      }
    }
  }
  return cnt;
}
