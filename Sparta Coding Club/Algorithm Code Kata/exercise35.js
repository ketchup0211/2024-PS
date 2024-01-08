// Programmers 부족한 금액 계산하기
function solution(price, money, count) {
  let total_price = 0;
  //  놀이기구를 N 번 째 이용한다면 원래 이용료의 N배 지불
  for (let n = 1; n <= count; n++) {
    total_price += price * n;
  }

  return money - total_price < 0 ? total_price - money : 0;
}
