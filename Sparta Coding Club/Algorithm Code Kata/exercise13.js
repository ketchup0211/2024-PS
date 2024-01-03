// Programmers 자릿수 더하기
function solution(n) {
  let answer = 0;
  let digit = 10;
  while (n) {
    answer += n % digit;
    n = (n - (n % digit)) / digit;
  }
  return answer;
}
