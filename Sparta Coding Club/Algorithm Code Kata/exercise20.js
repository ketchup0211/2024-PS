// Programmers 정수 내림차순으로 배치하기
function solution(n) {
  let digit = 10;
  let numArr = new Array();
  let number = 0;

  while (n !== 0) {
    numArr.push(n % digit);
    n = parseInt(n / digit);
  }

  numArr.sort((first, second) => {
    return second - first;
  });

  digit = 10 ** (numArr.length - 1);
  numArr.forEach((num) => {
    number += num * digit;
    digit /= 10;
  });

  return number;
}
