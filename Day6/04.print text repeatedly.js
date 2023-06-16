function solution(my_string, n) {
  let repeatedStr = '';
  for (let i = 0; i < my_string.length; i++) {
    let repeatedChar = my_string[i];
    for (let j = 0; j < n; j++) {
      repeatedStr += repeatedChar;
    }
  }
  return repeatedStr;
}
