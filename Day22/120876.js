function solution(lines) {
  const arr = [];
  for (let i = 0; i < lines.length; i++) {
    const item = lines[i];
    for (let j = item[0]; j < item[1]; j++) {
      arr.push(j);
    }
  }
  console.log(arr);
  const uniqueItems = new Set();
  const duplicates = new Set();
  arr.forEach((item) => {
    if (uniqueItems.has(item)) {
      duplicates.add(item);
    } else {
      uniqueItems.add(item);
    }
  });
  console.log(duplicates);
  console.log(uniqueItems);
  const result = Array.from(duplicates).length;
  return result === 0 ? 0 : result;
}
console.log(
  solution([
    [0, 5],
    [3, 10],
    [1, 10],
  ])
);

//[ 0 , 1]을 [0,1]
// 0부터 1까지
// [2, 5] 를 [2,3,4,5]로
// 2부터 5까지, 2,3,4,5 총 4번반복
// [3,9]를 [3,4,5,6,7,8,9]로
// 3부터 9까지 7번 반복
// 3개의 배열을 하나에 합친후 set을 이용하고 길이를 계산
