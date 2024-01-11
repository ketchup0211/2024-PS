// - 01. 나이든 유저
//     - 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요
var user = {
  name: "john",
  age: 20,
};

var getAged = function (user, passedTime) {
  let { name, age } = user;
  let agedUser = {
    name: name,
    age: eval(age + passedTime),
  };
  return agedUser;
};

var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
  if (!user2) {
    console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) {
    console.log(
      "Passed! If you become older, you will be different from you in the past!"
    );
  } else {
    console.log("Failed! User same with past one");
  }
};

//  실행
agedUserMustBeDifferentFromUser(user, agedUser);
