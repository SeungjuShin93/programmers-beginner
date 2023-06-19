// 내 코드에서 BigInt만 추가, 안할시 오버플로우 현상
function solution(balls, share) {
  function fac(num) {
    let result = BigInt(1);
    for (let i = BigInt(1); i <= BigInt(num); i++) result *= i;
    return result;
  }
  return fac(balls) / fac(balls - share) / fac(share);
}

// 라매님 코드에서 BigInt만 추가!
function solution(balls, share) {
  const n = balls;
  const r = share;

  let one = BigInt(1);
  for (let i = n; i >= 1; i--) {
    one *= i;
  }
  let two = BigInt(1);
  for (let i = n - r; i >= 1; i--) {
    two *= i;
  }
  let three = BigInt(1);
  for (let i = r; i >= 1; i--) {
    three *= i;
  }
  let answer = one / two / three;
  return answer;
}
