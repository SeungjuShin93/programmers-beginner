// 나의 해결 - 해결 못했음
function solution(my_string) {
  let newString = '';
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  outerLoop: for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (my_string[i] === vowel[j]) {
        continue outerLoop;
      }
    }
    newString += my_string[i];
  }

  return newString;
}
console.log(solution('bus'));
// 라매님 해결
function solution(my_string) {
  let answer = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < my_string.length; i++) {
    const item = my_string[i];
    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (item === vowels[j]) {
        isVowel = true;
        break;
      }
    }
    if (isVowel) continue;
    answer += item;
  }
  return answer;
}
console.log(solution('nice to meet you'));
