// Programmers 핸드폰 번호 가리기
function solution(phone_number) {
  let len = phone_number.length;
  for (let i = 0; i < len - 4; i++) {
    phone_number = phone_number.replace(phone_number[i], "*");
  }
  return phone_number;
}
