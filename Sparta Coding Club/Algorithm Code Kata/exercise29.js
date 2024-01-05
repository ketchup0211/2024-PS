// Programmers 제일 작은 수 제거하기
function solution(arr) {
  if (arr.length !== 1) {
    let minIdx = 0;
    let curIdx = 0;
    arr.forEach((num) => {
      minIdx = num < arr[minIdx] ? curIdx : minIdx;
      curIdx++;
    });
    arr.splice(minIdx, 1);
    return arr;
  }
  //  axiom : length 1의 array인 경우, [-1] return.
  return [-1];
}
