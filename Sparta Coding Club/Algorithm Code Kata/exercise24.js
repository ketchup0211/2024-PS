// Programmers 서울에서 김서방 찾기
function solution(seoul) {
  let location = seoul.indexOf("Kim");

  return `김서방은 ${location}에 있다`;
}

/*
[Solution B]
function solution(seoul) {
  let location = 0;
  let answer = "";
  seoul.forEach((name) => {
    if (name === "Kim") answer = `김서방은 ${location}에 있다`;
    location++;
  });

  return answer;
}
*/
