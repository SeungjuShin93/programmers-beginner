// 라매님 방법에 쉘로 카피 추가
function solution(numbers, direction) {
  const copy = [...numbers];
  if (direction === 'right') {
    const lastItem = copy.pop();
    copy.unshift(lastItem);
  } else {
    const firstItem = copy.shift();
    copy.push(firstItem);
  }
  return copy;
}

// 나의 해결
function solution(numbers, direction) {
  let answer = [];
  if (direction === 'right') {
    answer.push(numbers[numbers.length - 1]);
    for (let i = 0; i < numbers.length - 1; i++) {
      answer.push(numbers[i]);
    }
    return answer;
  }
  if (direction === 'left') {
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[i]);
    }
    answer.push(numbers[0]);
  }
  return answer;
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));
