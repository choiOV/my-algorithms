/**
 * 아파트의 개수를 나타내는 정수 a, 회사의 개수를 나타내는 정수 b, 주민들이 살 아파트와 통근할 회사의 번호가 담긴 2차원 정수 배열 infos가 매개변수로 주어진다.
 * 아파트와 회사를 조건에 맞게 배치할 때 주민들의 통근 거리의 합의 최솟값을 반환해야 한다.
 */

// 첫 번째 풀이 (풀이 실패)
function allocateBuildings(a, b, infos) {
  const companyObj = {};
  const aptObj = {};

  for (const [apt, company] of infos) {
    aptObj[apt] = aptObj[apt] + 1 || 1;
    companyObj[company] = companyObj[company] + 1 || 1;
  }

  const sorted = infos.slice().sort((a, b) => {
    const companyFreq = companyObj[b[1]] - companyObj[a[1]];
    if (companyFreq !== 0) return companyFreq;

    const aptFreq = aptObj[a[0]] - aptObj[b[0]];
    if (aptFreq !== 0) return aptFreq;

    return 0;
  });
}

// 두 번째 풀이 (O(n2)의 시간복잡도가 발생함))
function allocateBuildings(a, b, infos) {
  const aptHash = {};
  const companyHash = {};

  for (const [apt, company] of infos) {
    aptHash[apt] = (aptHash[apt] || 0) + 1;
    companyHash[company] = (companyHash[company] || 0) + 1;
  }

  const aptFreq = Object.entries(aptHash)
    .sort(([, freq1], [, freq2]) => freq1 - freq2)
    .map(([aptNum]) => aptNum);
  const companyFreq = Object.entries(companyHash)
    .sort(([, freq1], [, freq2]) => freq2 - freq1)
    .map(([companyNum]) => Number(companyNum));

  const buildingLayout = [...aptFreq, ...companyFreq];

  let distance = 0;
  for (const [aptNum, companyNum] of infos) {
    distance += Math.abs(
      buildingLayout.indexOf(String(aptNum)) -
        buildingLayout.indexOf(companyNum)
    );
  }

  return distance;
}

// 세 번째 풀이 (최적화 풀이)
function allocateBuildings(a, b, infos) {
  const aptFreq = Array(a + 1).fill(0);
  const compFreq = Array(b + 1).fill(0);

  for (const [apt, comp] of infos) {
    aptFreq[apt]++;
    compFreq[comp]++;
  }

  const aptOrdered = [...Array(a).keys()]
    .map((i) => i + 1)
    .sort((x, y) => aptFreq[x] - aptFreq[y]);

  const compOrdered = [...Array(b).keys()]
    .map((i) => i + 1)
    .sort((x, y) => compFreq[y] - compFreq[x]);

  const position = new Map();
  aptOrdered.forEach((no, i) => {
    position.set(`A${no}`, i);
  });

  compOrdered.forEach((no, i) => {
    position.set(`C${no}`, a + i);
  });

  let sum = 0;
  for (const [apt, comp] of infos) {
    sum += Math.abs(position.get(`A${apt}`) - position.get(`C${comp}`));
  }

  return sum;
}
