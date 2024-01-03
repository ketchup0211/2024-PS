// Programmers 평균 구하기
function solution(arr) {
  let arrLen = arr.length;
  let sum = 0;
  for (let i = 0; i < arrLen; i++) {
    sum += arr[i];
  }
  return sum / arrLen;
}
