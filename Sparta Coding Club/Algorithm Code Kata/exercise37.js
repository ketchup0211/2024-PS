// Programmers 문자열 다루기 기본
function solution(arr1, arr2) {
  return arr1.map((el, i) => {
    return typeof el == "object" ? solution(el, arr2[i]) : el + arr2[i];
  });
}

// 다시 풀어보기
