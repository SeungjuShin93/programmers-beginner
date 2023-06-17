function solution(n, k) {
  let yangPrice = n * 12000;
  let discountNum = Math.floor(n / 10);
  let drinkPrice = (k - discountNum) * 2000;
  return yangPrice + drinkPrice;
}
