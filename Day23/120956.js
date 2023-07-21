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
