// 나의 풀이
function solution(keyinput, board) {
  var answer = [0, 0];
  for (let i = 0; i < keyinput.length; i++) {
    const arrow = keyinput[i];
    switch (arrow) {
      case 'up':
        answer[1] < parseInt(board[1] / 2) ? answer[1]++ : null;
        break;
      case 'down':
        answer[1] > parseInt(-board[1] / 2) ? answer[1]-- : null;
        break;
      case 'left':
        answer[0] > parseInt(-board[0] / 2) ? answer[0]-- : null;
        break;
      case 'right':
        answer[0] < parseInt(board[0] / 2) ? answer[0]++ : null;
        break;
    }
  }
  return answer;
}

console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
