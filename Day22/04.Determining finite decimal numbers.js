// just test

function solution(a, b) {
  let max;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }
  let cnt = min;
  while (!(max % cnt === 0 && min % cnt === 0)) {
    cnt--;
  }
  console.log(cnt);
  let check = b / cnt;
  while (check % 2 === 0) {
    check /= 2;
  }
  while (check % 5 === 0) {
    check /= 5;
  }
  if (check === 1) {
    return 1;
  }
  return 2;
}

console.log(solution(8, 20));

// 최대공약수 구하기
// 최대 공약수를 구해서 b를 최대 공약수로 나눔
// 그 수를 가지고 무한반복을 돌려서 2로 나눈 나머지가 0이 아닐 때 까지 반복
// 그 수를 가지고 무한 반복을 5로 돌려서 나머지가 0이 아닐때 까지 반복
// 나머지가 0이 되지 않는다면 2를 return
// 나머지가 0이 될때까지 나눠진다면 1을 return
