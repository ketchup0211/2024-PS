// Programmers 배열의 평균값
function solution(numbers) {
  let numLen = numbers.length;
  if (numLen % 2 === 0) {
    let idx1 = numLen / 2 - 1;
    let idx2 = numLen / 2;

    return (numbers[idx1] + numbers[idx2]) / 2;
  } else {
    let idx = parseInt(numLen / 2);
    return parseFloat(numbers[idx]);
  }
}
