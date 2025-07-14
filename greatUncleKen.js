/**
 * 화폐 단위와 보유 수량이 담긴 2차원 배열 money가 매개변수로 주어진다.
 * money를 최대한 공평하게 두 개로 나눌 때 생기는 차이의 절대값을 반환해야 한다.
 */

// 첫 번째 풀이 (일부 테스트 케이스 통과하지 못 함)
function greatUncleKen(money) {
  const sorted = [...money].sort(([a], [b]) => b - a);
  let pocket1 = 0;
  let pocket2 = 0;

  for (let i = 0; i < sorted.length; ) {
    if (sorted[i][1] === 0) {
      i++;
      continue;
    }

    if (pocket1 < pocket2) {
      pocket1 += sorted[i][0];
      sorted[i][1]--;
    } else {
      pocket2 += sorted[i][0];
      sorted[i][1]--;
    }
  }

  return Math.abs(pocket1 - pocket2);
}

// 두 번째 풀이 (가독성 개선)
function greatUncleKen(money) {
  const sorted = [...money].sort(([a], [b]) => b - a);
  let pocket1 = 0;
  let pocket2 = 0;

  for (let i = 0; i < sorted.length; ) {
    const [currency, count] = sorted[i];

    if (count === 0) {
      i++;
      continue;
    }

    if (pocket1 < pocket2) {
      pocket1 += currency;
    } else {
      pocket2 += currency;
    }

    sorted[i][1]--;
  }

  return Math.abs(pocket1 - pocket2);
}

// 세 번째 풀이 (가독성 개선)
function greatUncleKen(money) {
  const sorted = [...money].sort(([a], [b]) => b - a);
  let pocket1 = 0,
    pocket2 = 0;

  for (const [currency, count] of sorted) {
    let remaining = count;

    while (remaining--) {
      if (pocket1 < pocket2) {
        pocket1 += currency;
      } else {
        pocket2 += currency;
      }
    }
  }

  return Math.abs(pocket1 - pocket2);
}
