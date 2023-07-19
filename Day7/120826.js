function solution(my_string, letter) {
  let newStr = '';
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === letter) {
      continue;
    }
    newStr += my_string[i];
  }
  return newStr;
}
