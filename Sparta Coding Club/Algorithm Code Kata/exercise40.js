// Programmers 3진법 뒤집기
function solution(n) {
  const arr = [];

  //    앞뒤 반전된 3진법 구하기
  while (n >= 3) {
    arr.push(n % 3);
    n = parseInt(n / 3);
  }
  arr.push(n);

  //    10진법으로 변환하기
  arr.reverse();
  let res = 0;
  arr.forEach((num, idx) => {
    let digit = 3 ** idx;
    res += num * digit;
  });

  return res;
}
