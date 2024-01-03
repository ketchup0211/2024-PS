/*
[문제 설명]
1. 프로그램이 1~100의 숫자 중 하나를 랜덤으로 정합니다.
2. 사용자는 이 숫자를 맞추어야 합니다! 
: 입력한 숫자보다 정답이 크면 → “UP” 아니면 → “DOWN”, 정답이면 → “CORRECT” 출력
3. 지금까지 숫자를 입력한 횟수를 알려줍니다.
*/

let solution = () => {
  let randNum = 50;
  let correct = false;
  let cnt = 0;

  while (!correct) {
    //let userInput as user input
    cnt++;
    correct =
      userInput === randNum ? true : userInput > randNum ? "UP" : "DOWN";
  }

  console.log("CORRECT");
  console.log(`숫자 입력한 횟수 : ${cnt}`);
};
