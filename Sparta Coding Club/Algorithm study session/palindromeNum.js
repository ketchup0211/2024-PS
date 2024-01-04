/*  Solution#1*/
function solution(str) {
  let strArr = str.split("");
  let reverseArr = new Array();
  strArr.forEach((char) => {
    reverseArr.unshift(char);
  });

  return reverseArr.join("");
}

/*  Solution#2
function solution(str) {
  let reverseStr = "";
  if (typeof str === "string") {
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
  } else {
    console.log("TypeError");
  }
  return reverseStr;
}
*/
