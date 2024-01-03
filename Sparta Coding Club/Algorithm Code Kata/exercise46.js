// Programmers 2021 카카오 채용연계형 인턴십 숫자 문자열과 영단어
// 프로그래밍 언어2 , 코퍼스 분석 과제
function solution(s) {
  const numObject = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let res = new Array();

  let strLen = s.length;
  for (let i = 0; i < strLen; i++) {
    numArr.forEach((num) => {
      //  number인 case
      if (parseInt(s[i]) === num) res.push(num);
      // string인 case
      else {
      }
    });
  }
  return answer;
}
