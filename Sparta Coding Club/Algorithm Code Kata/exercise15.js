// Programmers 나머지가 1이 되는 수 찾기
function solution(n) {
  let divisors = new Array();
  let divSum = 0;

  for (let i = 1; i <= Math.sqrt(n - 1); i++) {
    if (i * i === n - 1) {
      divisors.push(i);
    } else if ((n - 1) % i === 0) {
      divisors.push(i, (n - 1) / i);
    }
  }
  divisors.sort((first, second) => first - second);

  return divisors[1];
}

/*
[Idea]
n을 x로 나누었을 때 나머지가 1이 되는 가장 작은 x를 구하는 문제이다.
즉 (x * Q) + 1 = n 이므로, 이 식을 정리하면 x * Q = n - 1이 되고
결국 n-1의 약수 중 1이 아닌 가장 작은 약수를 반환하면 된다.
(n은 3 이상임을 가정한다.)

1. n-1의 약수 찾기
2. 처음 찾은 약수 반환
*/
