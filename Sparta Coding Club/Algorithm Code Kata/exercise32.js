// Programmers 내적
function solution(a, b) {
  let res = 0;
  const isSameLength = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      throw new Error("Different Length");
    } else return true;
  };
  //  error handling
  try {
    isSameLength(a, b);
    for (const idx in a) {
      res += a[idx] * b[idx];
    }
  } catch (err) {
    console.log(err.message, err.name);
  } finally {
    return res;
  }
}

// try-catch문 연습
