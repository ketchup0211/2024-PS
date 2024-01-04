// Programmers 두 수의 차
function solution(n) {
  let divisors = new Array();
  let divSum = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (i * i === n) {
      divisors.push(i);
    } else if (n % i === 0) {
      divisors.push(i, n / i);
    }
  }
  divisors.sort((first, second) => first - second);
  divisors.forEach((num) => {
    divSum += num;
  });

  console.log(
    `${n}의 약수는 ${divisors}입니다. 이를 모두 더하면 ${divSum}입니다.`
  );
  return divSum;
}
