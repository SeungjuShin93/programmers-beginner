// 자바스크립트 정규식 활용

function solution(babbling) {
  let cnt = 0;
  for (let i = 0; i < babbling.length; i++) {
    const item = babbling[i].replace(/aya|ye|woo|ma/gi, '');
    if (item == '') {
      cnt++;
    }
  }
  return cnt;
}
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));

// 정규식 없는 풀이 by 계란찜
function solution(babbling) {
  const one = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < one.length; j++) {
      babbling[i] = babbling[i].replace(one[j], '-');
    }
  }
  for (let k = 0; k < babbling.length; k++) {
    if (babbling[k].split('-').join('') === '') count++;
  }
  return count;
}
