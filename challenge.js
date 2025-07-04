/**
 * 전체 문제 수 N,  A가 푼 문제 배열 A, B가 푼 문제 배열 B가 매개변수로 주어진다.
 * [ A만 푼 문제 수, B만 푼 문제 수, A와 B 둘 다 푼 문제 수 ]를 순서대로 담은 배열을 반환해야 한다
 */

// 첫 번째 풀이
function challenge(N, A, B) {
  const hash = {};

  for (const solved of A) {
    hash[solved] = 1;
  }

  for (const solved of B) {
    hash[solved] = hash[solved] + 1 || -1;
  }

  let aCount = 0,
    bCount = 0,
    bothCount = 0;

  for (const [key, value] of Object.entries(hash)) {
    switch (value) {
      case 1:
        aCount++;
        break;
      case -1:
        bCount++;
        break;
      case 2:
        bothCount++;
        break;
    }
  }

  return [aCount, bCount, bothCount];
}

// 두 번째 풀이
function challenge(N, A, B) {
  const hash = {};

  for (const solved of A) {
    hash[solved] = 1;
  }

  for (const solved of B) {
    hash[solved] = hash[solved] + 1 || -1;
  }

  const values = Object.values(hash);

  return [
    values.filter((val) => val === 1).length,
    values.filter((val) => val === -1).length,
    values.filter((val) => val === 2).length,
  ];
}
