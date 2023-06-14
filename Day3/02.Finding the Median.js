function solution(array) {
  let newArray = [];
  let arrayCnt = 0;
  while (arrayCnt < array.length) {
    let minNumber = 1000;
    let cnt = 0;
    while (cnt < array.length) {
      if (minNumber > array[cnt]) {
        minNumber = array[cnt];
      }
      cnt++;
    }
    newArray.push(minNumber);
    delete array[cnt - 1];
    console.log(array);
    arrayCnt++;
  }
  console.log(newArray);

  return newArray[Math.floor(array.length / 2)];
}

// 정렬
// 최솟값 구하기
// 최솟값을 뺀 배열을 만들기
// 어레이 길이만큼 반복하기
// 중앙값 구하기
