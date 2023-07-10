// 나의 풀이
function solution(s) {
  var answer = '';
  let arr = [...s].sort();
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  }
  const key = Object.keys(obj).filter((key) => obj[key] === 1);
  for (let i = 0; i < key.length; i++) {
    answer += key[i];
  }
  return answer;
}

console.log(solution('abcabcadc'));

// 라매님 풀이
const obj = {};
function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  const objArray = Object.entries(obj);
  for (let i = 0; i < objArray.length; i++) {
    const item = objArray[i];
    if (item[1] === 1) {
      answer.push(item[0]);
    }
  }
  const sortedArray = answer.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  // 옵션1
  let result = '';
  for (let i = 0; i < sortedArray.length; i++) {
    result += sortedArray[i];
  }
  return result;

  // 옵션 2
  // return sortedArray.join('');
}

console.log(solution('hello'));
