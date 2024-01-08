// Programmers 가운데 글자 가져오기
function solution(s) {
  let strLen = s.length;
  let startIdx = (strLen - 1) / 2;

  let midStr = strLen % 2 === 0 ? s.slice(startIdx, startIdx + 2) : s[startIdx];
  return midStr;
}

/*
[Method 2]
function solution(s) {
    let midIdx = parseInt(s.length/2);
    return s.length%2===0 ? s.slice(midIdx-1, midIdx+1) : s[midIdx];
}
*/
