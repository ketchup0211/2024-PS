// Programmers 음양 더하기
function solution(absolutes, signs) {
  let sum = 0;

  //  error handling
  if (absolutes.length !== signs.length) {
    console.log("TypeError");
    return;
  }

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (sum += absolutes[i]) : (sum -= absolutes[i]);
  }

  return sum;
}
