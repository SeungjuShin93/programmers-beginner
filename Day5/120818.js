function solution(price) {
  switch (true) {
    case price >= 500000:
      price *= 0.8;
      break;
    case price >= 300000:
      price *= 0.9;
      break;
    case price >= 100000:
      price *= 0.95;
      break;
    default:
      price;
  }
  return Math.floor(price);
}
