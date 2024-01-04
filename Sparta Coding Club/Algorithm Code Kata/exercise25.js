// Programmers 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  arr.sort((a, b) => a - b);

  let dividable = arr.filter((num) => num % divisor === 0);
  return dividable.length ? dividable : [-1];
}
