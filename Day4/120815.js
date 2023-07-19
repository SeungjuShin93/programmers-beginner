function solution(n) {
  var answer = 0;
  let pizzaCount = 1;
  while (true) {
    if ((pizzaCount * 6) % n === 0) {
      answer = pizzaCount;
      break;
    }
    pizzaCount++;
  }
  return answer;
}
