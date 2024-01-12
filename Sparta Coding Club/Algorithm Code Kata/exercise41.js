// Programmers 이상한 문자 만들기
function solution(s) {
  let strArr = Array.from(s);
  let setUpperCase = true;

  strArr.forEach((char, idx) => {
    if (char !== " ") {
      strArr[idx] = setUpperCase ? char.toUpperCase() : char.toLowerCase();
      setUpperCase = !setUpperCase;
    } else setUpperCase = true;
  });

  return strArr.join("");
}
