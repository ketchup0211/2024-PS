// Programmers 최소직사각형
function solution(sizes) {
  let fix1 = 0,
    fix2 = 0;

  //    find maximum value(fix1)
  sizes.forEach(([w, h]) => {
    fix1 = w > fix1 ? (w > h ? w : h) : h > fix1 ? h : fix1;
    fix2 = w > fix1 ? (w > h ? h : w) : h > fix1 ? w : fix2;
    if (w > fix2 && h > fix2) {
      fix2 = w > h ? h : w;
    }
  });

  return fix1 * fix2;
}

/**
 * IDEA
 * 1. 가로, 세로에서 각각 최대 Width와 Height를 구한다.
 * 2. 최대 Width와 Height가 다를 시, 더 큰 값을 fix한다. -> 가장 긴 길이이다.
 * 3. fix 한 것의 width 또는 height와 다른 카드의 width, height를 비교한다.
 * 4. 비교한 두 값이 모두 fix 한 것의 width 또는 height보다 클 시, 둘 중 작은 것을 fix한다.
 */

// + 트리 구조로 나타내면 쉽게 풀 수 있지 않을까..?

// class Card {
//   constructor(width, height, idx) {
//     this.width = width;
//     this.height = height;
//     this.idx = idx;
//   }
// }

// let maxWidthCard = new Card(0, 0);
// let maxHeightCard = new Card(0, 0);

// const getMaxCards = (sizes) => {
//   sizes.forEach(([width, height], idx) => {
//     if (width > maxWidthCard.width) {
//       Object.assign(maxWidthCard, { width, height, idx });
//     }
//     if (height > maxHeightCard.height) {
//       Object.assign(maxHeightCard, { width, height, idx });
//     }
//   });

//   return [maxWidthCard, maxHeightCard];
// };

// function solution(sizes) {
//   [maxWidthCard, maxHeightCard] = getMaxCards(sizes);

//   let maxWidth = 0;
//   let maxHeight = 0;

//   if (maxHeightCard.height < maxWidthCard.width) {
//     //  fix it
//     maxWidth = maxWidthCard.width;
//     let standard = maxWidthCard.height;

//     maxHeightCard = new Card(standard, maxWidth, maxWidthCard.id);
//     sizes.forEach(([width, height], idx) => {
//       if (width > standard && height > standard) {
//         maxHeightCard.height = Math.min(width, height);
//         maxHeightCard.width = Math.max(width, height);
//         maxHeightCard.idx = idx;
//       }
//     });

//     maxHeight = maxHeightCard.height;
//   } else if (maxWidthCard.width < maxHeightCard.height) {
//     //  fix it
//     maxHeight = maxHeightCard.height;
//     let standard = maxHeightCard.width;

//     maxWidthCard = new Card(standard, maxHeight, maxHeightCard.idx);
//     sizes.forEach(([width, height], idx) => {
//       if (width > standard && height > standard) {
//         maxWidthCard.height = Math.min(width, height);
//         maxWidthCard.width = Math.max(width, height);
//         maxWidthCard.idx = idx;
//       }
//     });

//     maxWidth = maxWidthCard.width;
//   } else {
//     //  fix it
//     maxWidth = maxWidthCard.width;
//     maxHeight = maxHeightCard.height;
//   }

//   return maxWidthCard.width * maxHeightCard.height;
// }
