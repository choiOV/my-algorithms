/**
 * 고객이 총 받을 수 있는 쿠폰은 k장이다.(하루에 최대 한 장만 지급된다.)
 * 물품을 구매한 고객들의 ID가 담긴 문자열 배열(idList)을 참고해 발급된 총 쿠폰 개수를 반환해야 한다.
 */

// 첫 번째 풀이
function couponCalculator(idList, k) {
  const hash = {};

  for (const list of idList) {
    const idArr = list.split(" ");
    const idSet = new Set(idArr);

    for (const id of idSet) {
      if (hash[id] === k) continue;

      hash[id] = hash[id] + 1 || 1;
    }
  }

  return Object.values(hash).reduce((acc, value) => acc + value);
}
