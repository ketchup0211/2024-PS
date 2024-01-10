// Programmers 최대공약수와 최소공배수
function solution(n, m) {
  const numbers = [n, m];
  numbers.sort((a, b) => a - b);
  const [min, max] = numbers;

  let arr = [];
  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      arr.push(i);
    }
  }

  const GCD = Math.max(...arr);
  const LCM = (min * max) / GCD;

  return [GCD, LCM];
}
// function solution(n, m) {
//   let large = n > m ? n : m;
//   for (let i = 2; i <= Math.sqrt(large); i++) {

//   }
// }
