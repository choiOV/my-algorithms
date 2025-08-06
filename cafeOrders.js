/**
 * 음료 주문이 들어온 시각이 들어있는 배열 orderTimes와 자연수 k가 매개변수로 주어질 때,
 * k 분 동안 주문이 최대 몇 건 들어왔는지 반환해야 한다.
 */

// 첫 번째 풀이
function cafeOrders(orderTimes, k) {
  const minuteArr = orderTimes.map((timeStr) => {
    const [time, minute] = timeStr.split(":").map(Number);

    return time * 60 + minute;
  });

  let maxOrder = 0;
  for (let i = 0; i < minuteArr.length; i++) {
    let order = 1;

    for (let j = i + 1; j < minuteArr.length; j++) {
      if (minuteArr[i] + k < minuteArr[j]) break;

      order++;
    }

    maxOrder = Math.max(maxOrder, order);
  }

  return maxOrder;
}
