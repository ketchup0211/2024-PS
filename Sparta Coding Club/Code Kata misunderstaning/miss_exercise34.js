// Programmers 문자열 내림차순으로 배치하기
// 오해 : 문자열을 사전 내림차순으로 정렬해야하는데, 문자열을 뒤집는 문제로 오해함
function solution(s) {
  let res = "";
  let strArr = s.split("");
  for (let i = 0; i < s.length; i++) {
    res = res.concat(strArr.pop());
  }
  return res;
}
