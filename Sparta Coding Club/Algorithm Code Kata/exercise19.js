// Programmers 정수 제곱근 판별
function solution(n) {
  return n === parseInt(Math.sqrt(n)) ** 2 ? (Math.sqrt(n) + 1) ** 2 : -1;
}
