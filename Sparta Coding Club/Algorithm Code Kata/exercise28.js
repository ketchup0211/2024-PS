// Programmers 없는 숫자 더하기
function solution(numbers) {
  let numCnt = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  let sum = 0; //없는 숫자 누적하여 더할 변수

  // nums에 존재하는 각 element에 대해 , numCnt를 1로 설정
  numbers.forEach((nums) => {
    numCnt[nums] = 1;
  });

  // numCnt가 0인 요소들을 filter하여 더함.
  numCnt.filter((key) => (sum += numCnt[key] === 0 ? key : 0));
  return sum;
}
