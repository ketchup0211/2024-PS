// Programmers x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  let List = new Array();

  for (let i = 0; i < n; i++) {
    List.push(x * (i + 1));
  }
  return List;
}

/*
[Idea] 등차수열
 */
