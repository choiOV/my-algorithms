/**
 * 제거할 수 있는 폭탄 개수의 최댓값을 반환해야 한다.
 * 폭탄 한 개를 제거하는 데 1초가 걸리며, 터지는 시간과 제거하는 시간이 같으면 제거로 취급된다.
 */

// 첫 번째 풀이
function bombs(arr) {
  const stack = [...arr].sort((a, b) => b - a);
  let sec = 1;

  for (let i = stack.length - 1; i >= 0; i--) {
    if (sec <= stack[i]) {
      stack.pop();
      sec++;
    }

    if (sec > stack[i + 1]) break;
  }

  return arr.length - stack.length;
}

// 두 번째 풀이
function bombs(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let sec = 0;
  let count = 0;

  for (const limit of sorted) {
    if (sec < limit) {
      sec++;
      count++;
    } else {
      break;
    }
  }

  return count;
}
