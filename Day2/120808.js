function solution(denom1, numer1, denom2, numer2) {
  const denom = denom1 * numer2 + denom2 * numer1;
  const numer = numer1 * numer2;

  let minNumber;
  if (denom < numer) {
    minNumber = denom;
  } else {
    minNumber = numer;
  }
  while (true) {
    if (denom % minNumber === 0 && numer % minNumber === 0) {
      return [denom / minNumber, numer / minNumber];
    }
    minNumber--;
  }
}
