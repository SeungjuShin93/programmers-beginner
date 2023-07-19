function solution(my_string) {
  let newString = '';
  for (let i = my_string.length - 1; i >= 0; i--) {
    newString += my_string[i];
  }
  return newString;
}
