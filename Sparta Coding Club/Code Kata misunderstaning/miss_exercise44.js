// Programmers 최소직사각형
class Card {
  constructor(width, height, idx) {
    this.width = width;
    this.height = height;
    this.idx = idx;
  }
}

let maxWidthCard = new Card(0, 0);
let maxHeightCard = new Card(0, 0);

const getMaxCards = (sizes) => {
  sizes.forEach(([width, height], idx) => {
    if (width > maxWidthCard.width) {
      Object.assign(maxWidthCard, { width, height, idx });
      console.log("getMaxCards maxWidthCard", maxWidthCard);
    }
    if (height > maxHeightCard.height) {
      Object.assign(maxHeightCard, { width, height, idx });
      console.log("getMaxCards maxHeightCard", maxHeightCard);
    }
  });

  return [maxWidthCard, maxHeightCard];
};
function solution(sizes) {
  [maxWidthCard, maxHeightCard] = getMaxCards(sizes);

  if (maxHeightCard.height < maxWidthCard.width) {
    sizes.splice(maxHeightCard.idx, 1);
    maxHeightCard = new Card(0, 0);
    [_, maxHeightCard] = getMaxCards(sizes);
  } else if (maxWidthCard.width < maxHeightCard.height) {
    sizes.splice(maxWidthCard.idx, 1);
    maxWidthCard = new Card(0, 0);
    [maxWidthCard, _] = getMaxCards(sizes);
  }

  return maxWidthCard.width * maxHeightCard.height;
}

/**
 * IDEA
 * 1. 가로, 세로에서 각각 최대 Width와 Height를 구한다.
 * 2. if 최대 Height가 Width보다 작다면, 최대 Height 다음으로 최대인 Height를 구한다.
 * 3. else if 최대 Width가 최대 Height보다 작다면, 최대 Width 다음으로 최대인 Width를 구한다.
 * 4. else 최대 Width * 최대 Heigth를 retuen한다.
 */

//  TIL : Object.assign method, JS call by value & reference
// Problem : [_, maxHeightCard] = getMaxCards(sizes);
//          이 부분에서 왜 할당이 안되는거지?  앝은 복사, 깊은 복사와 관련 있나?
