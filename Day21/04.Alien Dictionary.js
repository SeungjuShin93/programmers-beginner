// 나의 풀이
function solution(spell, dic) {
  for (let i = 0; i < dic.length; i++) {
    const item = dic[i];
    let cnt = 0;
    for (let j = 0; j < spell.length; j++) {
      const check = spell[j];
      if (!item.includes(check)) {
        continue;
      }
      console.log('현재의 check는 ' + check);
      cnt++;
      if (cnt === spell.length) {
        return 1;
      }
    }
  }
  return 2;
}
console.log(
  solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])
);
