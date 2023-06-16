function solution(money) {
  let coffeeCnt = Math.floor(money / 5500);
  let rest = money % 5500;
  return [coffeeCnt, rest];
}
