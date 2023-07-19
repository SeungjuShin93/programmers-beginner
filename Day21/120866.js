// 나의 가장 무식한 풀이
function solution(board) {
  if (board.length === 1) {
    if (board[0][0] === 0) {
      return 1;
    }
    return 0;
  }
  if (board.length === 2) {
    for (let row of board) {
      for (let column of row) {
        if (column == 1) {
          return 0;
        }
      }
    }
    return 4;
  }
  if (board.length >= 3) {
    const newArr = [...board];
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr.length; j++) {
        const item = newArr[i][j];
        switch (item) {
          case 0:
            break;
          case 1:
            switch (i) {
              case 0:
                // 첫번째 row & 첫번째 column
                if (j === 0) {
                  if (newArr[i][j + 1] === 0) {
                    newArr[i][j + 1] = 'x';
                  }
                  if (newArr[i + 1][j] === 0) {
                    newArr[i + 1][j] = 'x';
                  }
                  if (newArr[i + 1][j + 1] === 0) {
                    newArr[i + 1][j + 1] = 'x';
                  }
                }
                // 첫번째 row & last column
                if (j === newArr.length - 1) {
                  if (newArr[i][j - 1] === 0) {
                    newArr[i][j - 1] = 'x';
                  }
                  if (newArr[i + 1][j - 1] === 0) {
                    newArr[i + 1][j - 1] = 'x';
                  }
                  if (newArr[i + 1][j] === 0) {
                    newArr[i + 1][j] = 'x';
                  }
                }
                // 첫번째 row & 중간 column
                if (newArr[i][j + 1] === 0) {
                  newArr[i][j + 1] = 'x';
                }
                if (newArr[i][j - 1] === 0) {
                  newArr[i][j - 1] = 'x';
                }
                if (newArr[i + 1][j] === 0) {
                  newArr[i + 1][j] = 'x';
                }
                if (newArr[i + 1][j + 1] === 0) {
                  newArr[i + 1][j + 1] = 'x';
                }

                if (newArr[i + 1][j - 1] === 0) {
                  newArr[i + 1][j - 1] = 'x';
                }
                break;
              case newArr.length - 1:
                // 마지막 row & 첫번째 column
                if (j === 0) {
                  if (newArr[i - 1][j] === 0) {
                    newArr[i - 1][j] = 'x';
                  }
                  if (newArr[i - 1][j + 1] === 0) {
                    newArr[i - 1][j + 1] = 'x';
                  }
                  if (newArr[i][j + 1] === 0) {
                    newArr[i][j + 1] = 'x';
                  }
                }
                // 마지막 row  & last column
                if (j === newArr.length - 1) {
                  if (newArr[i][j - 1] === 0) {
                    newArr[i][j - 1] = 'x';
                  }
                  if (newArr[i - 1][j] === 0) {
                    newArr[i - 1][j] = 'x';
                  }
                  if (newArr[i - 1][j - 1] === 0) {
                    newArr[i - 1][j - 1] = 'x';
                  }
                }
                // 마지막 row  & 중간 column
                if (newArr[i - 1][j - 1] === 0) {
                  newArr[i - 1][j - 1] = 'x';
                }
                if (newArr[i - 1][j] === 0) {
                  newArr[i - 1][j] = 'x';
                }
                if (newArr[i - 1][j + 1] === 0) {
                  newArr[i - 1][j + 1] = 'x';
                }
                if (newArr[i][j - 1] === 0) {
                  newArr[i][j - 1] = 'x';
                }
                if (newArr[i][j + 1] === 0) {
                  newArr[i][j + 1] = 'x';
                }
                break;
              default:
                // 중간 row & 첫번째 column
                if (j === 0) {
                  if (newArr[i - 1][j] === 0) {
                    newArr[i - 1][j] = 'x';
                  }
                  if (newArr[i - 1][j + 1] === 0) {
                    newArr[i - 1][j + 1] = 'x';
                  }
                  if (newArr[i][j + 1] === 0) {
                    newArr[i][j + 1] = 'x';
                  }
                  if (newArr[i + 1][j] === 0) {
                    newArr[i + 1][j] = 'x';
                  }
                  if (newArr[i + 1][j + 1] === 0) {
                    newArr[i + 1][j + 1] = 'x';
                  }
                }
                // 중간 row  & 마지막 column
                if (j === newArr.length - 1) {
                  if (newArr[i - 1][j - 1] === 0) {
                    newArr[i - 1][j - 1] = 'x';
                  }
                  if (newArr[i - 1][j] === 0) {
                    newArr[i - 1][j] = 'x';
                  }
                  if (newArr[i][j - 1] === 0) {
                    newArr[i][j - 1] = 'x';
                  }
                  if (newArr[i + 1][j - 1] === 0) {
                    newArr[i + 1][j - 1] = 'x';
                  }
                  if (newArr[i + 1][j] === 0) {
                    newArr[i + 1][j] = 'x';
                  }
                }
                // 중간 row  & 중간 column
                if (newArr[i - 1][j - 1] === 0) {
                  newArr[i - 1][j - 1] = 'x';
                }
                if (newArr[i - 1][j] === 0) {
                  newArr[i - 1][j] = 'x';
                }
                if (newArr[i - 1][j + 1] === 0) {
                  newArr[i - 1][j + 1] = 'x';
                }
                if (newArr[i][j - 1] === 0) {
                  newArr[i][j - 1] = 'x';
                }
                if (newArr[i][j + 1] === 0) {
                  newArr[i][j + 1] = 'x';
                }
                if (newArr[i + 1][j - 1] === 0) {
                  newArr[i + 1][j - 1] = 'x';
                }
                if (newArr[i + 1][j] === 0) {
                  newArr[i + 1][j] = 'x';
                }
                if (newArr[i + 1][j + 1] === 0) {
                  newArr[i + 1][j + 1] = 'x';
                }
            }
            break;
        }
      }
    }
    let cnt = 0;
    for (let row of newArr) {
      for (let column of row) {
        if (column == 0) {
          cnt++;
        }
      }
    }
    console.log(newArr);
    return cnt;
  }
}

// Chatgpt의 풀이 -- 효율이 훨씬 좋음
function solution(board) {
  const n = board.length;
  let safeCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        let isSafe = true;

        // Check upper, lower, left, right cells
        if (
          (i > 0 && board[i - 1][j] === 1) ||
          (i < n - 1 && board[i + 1][j] === 1) ||
          (j > 0 && board[i][j - 1] === 1) ||
          (j < n - 1 && board[i][j + 1] === 1)
        ) {
          isSafe = false;
        }

        // Check upper-left, upper-right, lower-left, lower-right diagonal cells
        if (
          (i > 0 && j > 0 && board[i - 1][j - 1] === 1) ||
          (i > 0 && j < n - 1 && board[i - 1][j + 1] === 1) ||
          (i < n - 1 && j > 0 && board[i + 1][j - 1] === 1) ||
          (i < n - 1 && j < n - 1 && board[i + 1][j + 1] === 1)
        ) {
          isSafe = false;
        }

        if (isSafe) {
          safeCount++;
        }
      }
    }
  }

  return safeCount;
}

console.log(
  solution([
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
);
