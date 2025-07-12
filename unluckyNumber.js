/**
 * 불행한 수(4, 13로 만든 수)가 모여, 오름차순 정렬된 불행한 수열 중 n번째에 해당하는 불행한 수를 반환해야 한다.
 * (불행한 수열 예시: 4, 13, 44, 134, 413, 444, 1313, 1344)
 * (n은 5,000 이하의 자연수)
 */

// 첫 번째 풀이 (일부 테스트 케이스 통과하지 못 함)
function unluckyNumber(n) {
  let i = 1;
  const queue = ["4", "13"];

  while (i < n) {
    const current = queue.shift();

    const candidate1 = current + 4;
    const candidate2 = current + 13;

    if (candidate1 > candidate2) {
      queue.push(candidate1);
    } else {
      queue.push(candidate2);
    }

    i++;
  }

  return queue[0];
}

// 두 번째 풀이
function unluckyNumber(n) {
  let i = 0;
  const queue = [""];
  const result = [];

  while (i < n) {
    const current = queue.shift();

    const num1 = current + 4;
    const num2 = current + 13;

    queue.push(num1, num2);
    result.push(num1, num2);

    i++;
  }

  return result.sort((a, b) => a - b)[n - 1];
}

// 세 번째 풀이 (일부 테스트 케이스 통과하지 못 함)
function unluckyNumber(n) {
  const queue = ["4", "13"];
  const result = [];

  while (result.length < n) {
    const current = queue.shift();
    result.push(current);

    queue.push(current + "4");
    queue.push(current + "13");
  }

  return result[n - 1];
}
