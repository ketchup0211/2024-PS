// Programmers 삼총사
function solution(number) {
  const result = new Set();

  for (let i = 0; i < number.length; i++) {
    dfs(0, [i]);
  }

  return result.size;

  function dfs(level, visited) {
    if (level === 2) {
      const sum = visited.reduce((acc, val) => acc + number[val], 0);
      if (sum === 0) result.add(visited.sort((a, b) => a - b).join(""));
      return;
    }
    for (let i = 0; i < number.length; i++) {
      if (!visited.includes(i)) {
        dfs(level + 1, [...visited, i]);
      }
    }
  }
}
// function solution(number) {
//   let left = 0;
//   let right = number.length - 1;
//   let middle = (left, right) => Math.ceil((left + right) / 2);

//   let numArr = [...number];
//   let sum = 0;
//   while (numArr.length >= 3) {
//     let mid = middle(left, right);
//     //  처음-중간-끝을 합한 값이 0이면 if문 실행
//     if (!numArr[left] + numArr[right] + numArr[mid]) {
//     }
//   }
// }

/**
 * 배열의 처음-끝-중간을 더하여 합한 값이 0일 시 하나의 조합으로 만든다.
 * 만든 이후/일치하지 않을 시, 처음 인덱스는 고정, 끝 인덱스를 하나 줄인다.
 * 배열의 길이가 3 미만이면 배열을 복원한 후, 처음 인덱스를 하나 더하여 같은 과정을 반복한다.
 * => O(n^2)의 시간 복잡도 예상. 다른 방법은 없을까?
 */
