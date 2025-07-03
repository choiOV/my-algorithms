// K번째로 작은 Ken 넘버(인접한 자리의 숫자들의 차이가 모두 1인 자연수)를 찾아야 한다.
/**
// Ken 넘버 예시
  12345 -> true
  43434 -> true
  67898 -> true
  12344 -> false
  12432 -> false
  36739 -> false

// 입출력 예시
  K: 1 -> 1
  K: 2 -> 2
  K: 3 -> 3
  K: 10 -> 10
  K: 11 -> 12
  K: 12 -> 21
  K: 13 -> 23
  K: 14 -> 32
  K: 15 -> 34
  K: 16 -> 43
  K: 100 -> 6765

 */

// 첫 번째 풀이
function kenNumber(K) {
  const tree = {};
  let kCount = 1;

  while (kCount <= K) {
    const strK = String(kCount);
    const last = strK.length - 1;

    if (!tree[strK[last]]) {
      tree[strK[last]] = kCount;
    } else {
      tree[strK[last]] = { [strK[last] - 1]: {} };
    }
    if (kCount === K) {
    }

    kCount++;
  }
}

// 두 번째 풀이
function kenNumber(K) {
  const tree = {};
  let kCount = 1;

  while (kCount <= K) {
    const strK = String(kCount);
    const last = strK.length - 1;

    if (kCount > 9) {
      // console.log(strK[last]);
      tree[kCount] = { [strK[last]]: strK[last] - 1 };
      tree[kCount + 1] = { [strK[last]]: strK[last] + 1 };
      // tree[kCount] = { [strK[0]]: strK[last]+1 };
      // tree[kCount++] = { [strK[last]]: Number(strK[last]) + 1 };
      kCount++;
    } else {
      tree[kCount] = kCount;
      kCount++;
    }
    //   if (!tree[strK[last]]) {
    //     tree[strK[last]] = kCount;
    //   } else {
    //     tree[strK[last]] = { [strK[last] - 1]: {} };
    //   }
    //   if (kCount === K) {
    //     console.log(tree[strK[last]]);
    //   }
    //   console.log(strK[last]);
  }
}

// 세 번째 풀이 (해답을 참고한 풀이)
function kenNumber(K) {
  const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let count = 0;

  while (queue.length) {
    const num = queue.shift();
    count++;

    if (count === K) return num;

    const lastDigit = num % 10;

    for (const digit of [lastDigit - 1, lastDigit + 1]) {
      if (digit >= 0 && digit <= 9) {
        queue.push(num * 10 + digit);
      }
    }
  }
}
