// Programmers 문자열 다루기 기본
function solution(s) {
  let regex = new RegExp("^[0-9]*$");
  return regex.test(s) && (s.length === 4 || s.length === 6);
}
