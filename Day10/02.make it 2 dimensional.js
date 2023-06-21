// 라매님 해결
function solution(num_list, n) {
  const result = [];
  let tempArray = [];
  for (let i = 0; i < num_list.length; i++) {
    const item = num_list[i];
    tempArray.push(item);
    if (tempArray.length === n) {
      result.push(tempArray);
      tempArray = [];
    }
  }
  return result;
}

// 나의 해결
function solution(num_list, n) {
  let answer = [];
  let addArr = [];
  let count = 0;
  let cnt = num_list.length / n;
  for (let i = 0; i < cnt; i++) {
    for (let j = 0; j < n; j++) {
      if (addArr.length === n) {
        addArr = [];
      }
      addArr.push(num_list[count]);
      count++;
    }
    answer.push(addArr);
  }
  return answer;
}

console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
