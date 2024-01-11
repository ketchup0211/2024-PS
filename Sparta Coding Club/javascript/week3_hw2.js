// - 02. 어떤 매치가 성사될까?
//     - 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
//     - **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**
var fullname = "Ciryl Gane";

var fighter = {
  fullname: "John Jones",
  opponent: {
    fullname: "Francis Ngannou",
    getFullname: function () {
      return this.fullname;
    },
  },

  getName: function () {
    return this.fullname;
  },

  getFirstName: () => {
    return this.fullname.split(" ")[0];
  },

  getLastName: (function () {
    return this.fullname.split(" ")[1];
  })(),
};

//  실행
console.log("Not", fighter.opponent.getFullname(), "VS", fighter.getName());
console.log(
  "It is",
  fighter.getName(),
  "VS",
  fighter.getFirstName(),
  fighter.getLastName
);

/**
 * 실행 결과
 * : Not Francis  Ngannou VS John Jones
 * : It is John Jones VS Ciryl Gane
 */

/**
 * 이유 ?
 * 1. fighter.opponent.getFullname() === "Francis  Ngannou"
 * -> 함수를 호출했으며, opponent에 의해 호출이 되었으므로 this는 opppnent를 바인딩한다.
 * 2. fighter.getName() === "John Jones"
 * -> 함수를 호출했으며, fighter에 의해 호출이 되었으므로 this는 fighter를 바인딩한다.
 * 3. fighter.getFirstName() === "Ciryl"
 * -> 함수를 호출했으나, 호출한 함수는 화살표 함수로 현재 실행 context 상에서 결정된다. 가까운 전역 객체로 바인딩 된다.
 * 4. fighter.getLastName === "Gane"
 * -> 프로퍼티를 가져왔으나, 호출은 fighter에서 이루어지지 않았다. 함수 스스로 선언 및 호출이 이루어지므로 this는 전역 객체를 바인딩한다.
 */
