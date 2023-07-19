// 나의 풀이
function solution(polynomial) {
  let xNum = 0;
  let constNum = 0;
  const myArr = polynomial.split(' ');
  for (let i = 0; i < myArr.length; i += 2) {
    const item = myArr[i];
    if (item.includes('x')) {
      if (Number(item.split('x')[0]) == '') {
        xNum++;
      } else {
        xNum += Number(item.split('x')[0]);
      }
    } else {
      constNum += Number(item);
    }
  }
  return result(xNum, constNum);
}
function result(xNum, constNum) {
  if (xNum == 0) {
    return String(constNum);
  }
  if (constNum == 0) {
    if (xNum == 1) {
      return 'x';
    }
    return String(xNum) + 'x';
  }
  if (xNum == 1) {
    return 'x + ' + String(constNum);
  }
  return String(xNum) + 'x + ' + String(constNum);
}

console.log(solution('3x + 7 + x'));

// 라매님 풀이
function solution(polynomial) {
  const values = polynomial.split(' + ');
  let x = 0;
  let c = 0;
  for (let i = 0; i < values.length; i++) {
    const item = values[i];
    if (item[item.length - 1] !== 'x') {
      c += Number(item);
    } else {
      // x일 때
      const num = item.split('x')[0] || 1; // 앞에 값이 null이면 1을 대입
      x += Number(num);
    }
  }
  let answer = '';
  if (x === 1) {
    answer += 'x';
  }
  if (x > 1) {
    answer += `${x}x`;
  }
  if (x === 0 && c > 0) {
    answer += c;
  }
  if (c > 0) {
    answer += ` + ${c}`;
  }
  return answer;
}
