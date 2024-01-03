/*
[문제 설명]
1. 입력으로 소문자의 알파벳 순으로 정렬된 문자열이 입력됩니다.
2. 각 알파벳은 중복이 가능합니다.
3. 중간에 없는 알파벳이 있을 수도 있습니다.

입,출력 예시와 같이 입력 문자열에 나타나는 각 알파벳의 종류,갯수를 요약하여 나타내시오.
 */

let solution = (str) => {
  let strArr = str.split("");
  let charCount = new Array(27);
  charCount.fill(0);

  strArr.filter((char) => {
    let ascii = char.charCodeAt(0);
    charCount[ascii - 97] += 1;
  });

  for (let i = 0; i < 27; i++) {
    if (charCount[i] !== 0) {
      console.log(String.fromCharCode(i + 97), charCount[i]);
    }
  }
};
