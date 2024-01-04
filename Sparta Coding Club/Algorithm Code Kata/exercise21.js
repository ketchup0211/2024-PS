// Programmers 하샤드 수
const _digitSum = (x) => {
  let sum = 0;
  while (x !== 0) {
    sum += x % 10;
    x = parseInt(x / 10);
  }
  return sum;
};

function solution(x) {
  return x % _digitSum(x) === 0;
}
