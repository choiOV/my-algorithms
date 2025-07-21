/**
 * 규칙에 따라 상자를 쌓고 각 층의 수를 구하여 더했을 때 나올 수 있는 최댓값을 반환해야 한다.
 * 즉, 최댓값을 만드는 조합을 만들어야 한다.
 * (참고: 배열 순서대로 상자를 쌓지 않아도 된다.)
 */

// 첫 번째 풀이
function calculateNumberBox(arr) {
  const numberBox = [...arr.map(String).sort((a, b) => b - a)];
  const first = [];
  const second = [];

  while (numberBox.length) {
    first.push(numberBox.shift());

    if (!numberBox.length) break;
    second.push(numberBox.pop());
  }

  let result = 0;
  for (let i = 0; i < first.length; i++) {
    if (!second[i]) {
      second[i] = first[i];
      first[i] = "0";
    }

    result += Number(first[i] + second[i]);
  }

  return result;
}

// 두 번째 풀이 (가독성 개선 풀이)
function calculateNumberBox(arr) {
  const numberBox = [...arr.sort((a, b) => b - a).map(String)];
  const first = [];
  const second = [];

  while (numberBox.length) {
    first.push(numberBox.shift());
    if (numberBox.length) second.push(numberBox.pop());
  }

  let result = 0;
  for (let i = 0; i < first.length; i++) {
    if (!second[i]) {
      result += Number(first[i]);
      continue;
    }

    result += Number(first[i] + second[i]);
  }

  return result;
}
