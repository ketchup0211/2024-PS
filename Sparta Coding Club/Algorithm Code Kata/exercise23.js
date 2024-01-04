// Programmers 콜라츠 추측
const _isEven = (num) => {
  return num % 2 === 0;
};

function solution(num) {
  const maxCount = 500;
  let count = 0;
  while (num !== 1 && count <= maxCount) {
    if (_isEven(num)) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    count++;
  }

  return count > maxCount ? -1 : count;
}
