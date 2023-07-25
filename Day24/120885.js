function solution(bin1, bin2) {
  var answer = '';
  let checkNum = 0;
  const arr = [];
  const sum = Number(bin1) + Number(bin2);
  const str = String(sum);
  for (let i = str.length - 1; i >= 0; i--) {
    let item = Number(str[i]);
    item += checkNum;
    if (item >= 2) {
      arr.push(item % 2);
      checkNum = 1;
    } else {
      arr.push(item);
      checkNum = 0;
    }
  }
  if (checkNum) {
    arr.push(checkNum);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    const item = String(arr[i]);
    answer += item;
  }
  return answer;
}
console.log(solution('111', '11')); // 101
// 문자열로 취급해서 계산 - 위에 내가 푼 방법
// 십진수로 변환해서 계산후, 다시 이진수로 변환
// 이진수더하기 기능 찾아보기

// 배울 점 많은 풀이
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);
  // map((v) => +v) 에서 +v는 문자열을 숫자로 강제 '형'변환
  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join('')).toString();
}

// 가장 쉬운 풀이
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
