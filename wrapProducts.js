// 상품과 상자의 크기가 매개변수로 주어질 때, 상자에 넣을 수 있는 상품 개수의 최댓값을 반환해야 한다.

// 첫 번째 풀이
function wrapProducts(goods, boxes) {
  const descGoods = [...goods].sort((a, b) => b - a);
  const descBoxes = [...boxes].sort((a, b) => b - a);

  for (
    let i = descGoods.length - 1, j = descBoxes.length - 1;
    i >= 0;
    i--, j--
  ) {
    if (descGoods[i] <= descBoxes[j]) {
      descGoods.pop();
    } else {
      while (j >= 0) {
        j--;

        if (descGoods[i] <= descBoxes[j]) {
          descGoods.pop();
          break;
        }
      }
    }
  }

  return goods.length - descGoods.length;
}

// 두 번째 풀이
function wrapProducts(goods, boxes) {
  const ascGoods = [...goods].sort((a, b) => a - b);
  const ascBoxes = [...boxes].sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < ascGoods.length && j < ascBoxes.length) {
    if (ascGoods[i] <= ascBoxes[j]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }

  return count;
}
