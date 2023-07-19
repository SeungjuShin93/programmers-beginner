function solution(num_list) {
  // num_list.reverse();
  let reversedArr = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    reversedArr.push(num_list[i]);
  }
  return reversedArr;
}
