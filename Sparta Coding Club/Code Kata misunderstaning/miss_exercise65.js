// Programmers 문자열 나누기
// 오해 : 첫 문자열의 apperance conunt와
// 동일한 apperence count를 가지는 문자가 나왔을 때를 기준으로 분리하는 것으로 오해함.
// 어떡하지? : 기왕 코드 작성한거, 오해한 조건으로 문제 해결해보자.
function _counting(s) {
  let charCnt = new Map();
  let idx = 0;
  for (idx = 0; idx < s.length; idx++) {
    let idxCnt = charCnt.get(s[idx]);
    charCnt.set(s[idx], !idxCnt ? 1 : idxCnt + 1);

    // standard char의 cnt 횟수와 동일한 cnt를 가지는지 확인
    if (s[idx] !== s[0] && charCnt.get(s[0]) === charCnt.get(s[idx])) {
      break;
    }
  }

  return idx;
}
function solution(s) {
  let cnt = 0;

  while (s.length) {
    let idx = _counting(s);
    s = s.slice(idx + 1);
    cnt++;
  }
  return cnt;
}
// 어후 코드 더럽다..
// TODO : 코드 개선하기

// 2024.01.04 17:03 edited
