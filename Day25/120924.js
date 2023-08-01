function solution(common) {
  let numA = common[1] - common[0];
  let numB = common[2] - common[1];
  if (numA === numB) {
    return common[common.length - 1] + numA;
  }
  numA = common[1] / common[0];
  numB = common[2] / common[1];
  if (numA === numB) {
    return common[common.length - 1] * numA;
  }
}
