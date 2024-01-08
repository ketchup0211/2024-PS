// Programmers 약수의 개수와 덧셈
function isDivisorsNumEven(number) {
  //  method 1 : 소인수 분해 후, 각 소인수의 지수에 1을 더한 수들을 곱한다.
  //  method 2 : n의 약수의 개수를 root(n) 까지 탐색하여 구한다. -> simple
  let numOfDivisor = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (i * i === number) numOfDivisor++;
    else if (number % i === 0) numOfDivisor += 2;
  }
  return numOfDivisor % 2 === 0;
}

function solution(left, right) {
  let sum = 0,
    sub = 0;
  for (let num = left; num <= right; num++) {
    isDivisorsNumEven(num) ? (sum += num) : (sub -= num);
  }
  return sum + sub;
}
