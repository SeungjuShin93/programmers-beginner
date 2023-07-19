// 라매님 풀이
function solution(hp) {
  let cnt = 0;
  let arr = [5, 3, 1];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (hp >= item) {
      cnt += Math.floor(hp / item);
      hp -= Math.floor(hp / item) * item;
    }
  }
  return cnt;
}

// 나의 풀이
function solution(hp) {
  let kingAnt = 0;
  let QueenAnt = 0;
  let justAnt = 0;

  kingAnt = Math.floor(hp / 5);
  console.log('kingAnt의 수 ' + kingAnt);
  QueenAnt = Math.floor((hp - kingAnt * 5) / 3);
  console.log('QueenAnt의 수 ' + QueenAnt);
  justAnt = Math.floor((hp - kingAnt * 5) % 3);
  console.log('justAnt의 수 ' + justAnt);
  return kingAnt + QueenAnt + justAnt;
}

console.log(solution(32));
