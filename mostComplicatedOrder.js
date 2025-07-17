// orders 배열에서 가장 다양한 종류의 음식을 주문한 유저들의 ID를 오름차순 정렬된 배열로 반환해야 한다.

// 첫 번째 풀이
function mostComplicatedOrder(orders) {
  const arrOrders = [];
  const hash = {};

  for (const order of orders) {
    arrOrders.push(order.split(" "));
  }

  for (const [name] of arrOrders) {
    hash[name] = new Map();
  }

  for (const order of arrOrders) {
    const name = order[0];

    for (let i = 1; i < order.length; i++) {
      if (hash[name].has(order[i])) {
        continue;
      }

      hash[name].set(order[i], 1);
    }
  }

  for (const name in hash) {
    hash[name] = hash[name].size;
  }

  let mostOrderedPerson = "";
  Object.entries(hash).reduce((acc, [name, count]) => {
    if (acc < count) {
      mostOrderedPerson = name;

      return (acc = count);
    } else if (acc === count) {
      mostOrderedPerson += ` ${name}`;
    }
  }, 0);

  return mostOrderedPerson.split(" ");
}
