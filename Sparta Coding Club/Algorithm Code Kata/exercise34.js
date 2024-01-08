// Programmers 문자열 내림차순으로 배치하기
function solution(s) {
  let strArr = s.split("");
  strArr.sort((char1, char2) => char2.charCodeAt() - char1.charCodeAt());
  return strArr.join("");
}
