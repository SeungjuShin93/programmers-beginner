function solution(angle) {
  switch (true) {
    case angle > 0 && angle < 90:
      return 1;
      break;
    case angle === 90:
      return 2;
      break;
    case angle > 90 && angle < 180:
      return 3;
      break;
    case angle === 180:
      return 4;
      break;
    default:
      console.log('0부터 180 사이 숫자만 넣으세요');
  }
}
