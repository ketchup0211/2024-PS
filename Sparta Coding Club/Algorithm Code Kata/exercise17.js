// Programmers 자연수 뒤집어 배열로 만들기
function solution(n) {
  const digit = 10;
  let palindromeArr = new Array();
  while (n !== 0) {
    palindromeArr.push(n % digit);
    n = parseInt(n / digit);
  }

  return palindromeArr;
}
/*
[Idea]
n을 digit으로 나눈 나머지를 배열에 저장한다.
나머지를 저장한 후, n은 digit으로 나눈 값으로 update한다. (이때, 나눈 몫만 취한다.)
위 과정을 n != 0 까지 반복한다.
*/
