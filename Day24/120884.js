function solution(chicken) {
  let serviceChi = 0;
  let coupons = chicken;
  while (coupons >= 10) {
    serviceChi += parseInt(coupons / 10);
    coupons = parseInt(coupons % 10) + parseInt(coupons / 10);
  }
  return serviceChi;
}
console.log(solution(1081));

// 쿠폰 숫자를 10으로 나누고, 그 몫만큼 서비스치킨에 추가하고 쿠폰도 그만큼 추가, 나머지는 저장;
// 서비스치킨만큼의 숫자를 쿠폰에 더하고 그 몫만큼을 서비스치킨에 추가, 나머지는 기존의 나머지에 추가;
// 서비스 치킨만큼의 숫자를 쿠폰에 더하고, 나머지와 합쳐서 10개가 넘으면 또 서비스 치킨 추가;



// 박재현님의 풀이
function solution(chicken) {
    var answer = parseInt((chicken-1) / 9);
    return answer;
}

// 신영성님의 풀이
function solution(chicken) {
    return ~~(chicken*0.111111)
}