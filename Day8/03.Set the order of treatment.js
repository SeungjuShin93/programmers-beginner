function solution(emergency) {
  let newEmergencyArray = [];
  for (let i = 0; i < emergency.length; i++) {
    newEmergencyArray.push({ value: emergency[i], index: i });
  }
  newEmergencyArray.sort((a, b) => b.value - a.value);
  let answer = new Array(emergency.length);
  for (let i = 0; i < newEmergencyArray.length; i++) {
    let item = newEmergencyArray[i];
    console.log(newEmergencyArray);
    answer[item.index] = i + 1;
  }
  return answer;
}

console.log(solution([30, 10, 23, 6, 100]));

// // 내가 풀었던 방법
// function solution(emergency) {
//   let arr = [];
//   for (let i = 0; i < emergency.length; i++) {
//     arr.push(emergency[i] + 10);
//   }
//   let order = 1;
//   let position = 0;

//   for (let j = 0; j < arr.length; j++) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (max < arr[i]) {
//         max = arr[i];
//         position = i;
//       }
//     }
//     arr[position] = order++;
//   }
//   return arr;
// }
// console.log(solution([30, 10, 23, 6, 100]));
