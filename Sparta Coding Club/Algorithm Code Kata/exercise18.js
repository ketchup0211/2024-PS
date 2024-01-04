// Programmers 문자열을 정수로 바꾸기
function solution(s) {
  const numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let digit = 1;
  let number = 0;

  for (let i = s.length - 1; i > 0; i--) {
    let numKey = s[i];
    number += numbers[numKey] * digit;
    digit *= 10;
  }

  //  문자열의 시작이 부호인지, 숫자인지에 따라 최종 처리를 한다.
  switch (s[0]) {
    case "-":
      number -= 2 * number;
      return number;
    case "+":
      return number;
    default:
      let numKey = s[0];
      number += numbers[numKey] * digit;
      return number;
  }
}
