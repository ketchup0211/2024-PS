// Programmers 수박수박수박수박수박수?
function solution(n) {
  let watermelon = "";
  for (let i = 1; i <= n; i++) {
    watermelon = watermelon.concat(i % 2 !== 0 ? "수" : "박");
  }
  return watermelon;
}
