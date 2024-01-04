// Programmers 두 정수 사이의 합
function solution(a, b) {
  let start = b <= a ? b : a;
  let end = a > b ? a : b;

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

/*
[Solution B]
function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
 */
