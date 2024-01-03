/*
[문제 설명]
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 
각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
    
[제한 조건]
- strings는 길이 1 이상, 50이하인 배열입니다.
- strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
- strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 strings의 원소의 길이는 n보다 큽니다.
- 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다
*/
function solution(str, int) {
  //    비교할 idx의 character를 순서대로 모은 Array를 생성
  let charArr = new Array();
  str.forEach((string) => {
    charArr.push(string[int]);
  });

  //    str Array의 각 문자열 앞에 비교할 idx의 character를 concat
  let i = 0;
  str.forEach((string) => {
    str[i] = charArr[i] + string;
    i++;
  });

  //    정렬
  str.sort();

  //    문자열 앞에 붙였던 문자 제거
  i = 0;
  str.forEach((string) => {
    str[i] = string.replace(string[0], "");
    i++;
  });

  return str;
}
// 1차 코드 (힌트 보고 작성) -> 으악 진짜 너무 더러워ㅠ 빨리 다른 솔루션 작성하고 싶다. 코드 진짜 별로다.(2024.01.03)

/*
[Idea 1]
인덱스 정렬 순서를 뽑아낸 후, 뽑아낸 순서대로 string 배열을 정렬하여 반환한다.

예를 들어, 2번째 요소가 맨 앞으로 정렬되어야 하고 1번째 요소가 맨 뒤로 정렬되어야 하면 
idxArr = [2,1]과 같이 저장된 후, result에는 idxArr.forEach((idx)=>{result.push=str[idx]});

1. 인덱스 정렬 순서를 어떻게 뽑아낼 것인가? (문자가 겹친다면 어떻게 할 것인가?)
2. 어떤 자료 구조를 활용할 것인가?

[Idea 2]
O(n log n) min heap 구현?
[Can we get better?]

*/
