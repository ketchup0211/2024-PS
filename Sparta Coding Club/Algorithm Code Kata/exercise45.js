// Programmers 시저 암호
function solution(s, n) {
  let res = "";
  for (const idx in s) {
    if (s[idx] !== " ") {
      // 65 ~ 90, 97~122
      if ("A" <= s[idx] && "Z" >= s[idx]) {
        let ascii = s.charCodeAt(idx) + n;
        if (ascii > 90) {
          ascii = ascii - 90 + 65 - 1;
        }
        res = res.concat(String.fromCharCode(ascii));
      } else if ("a" <= s[idx] && "z" >= s[idx]) {
        let ascii = s.charCodeAt(idx) + n;
        if (ascii > 122) {
          ascii = ascii - 122 + 97 - 1;
        }
        res = res.concat(String.fromCharCode(ascii));
      } else {
        console.log("알파벳 또는 공백만 입력해주십시오.");
      }
    } else {
      res = res.concat(" ");
    }
  }
  return res;
}
