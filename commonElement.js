/**
 * 오름차순으로 정렬된 정수형 배열(arr1, arr2, arr3)이 존재한다.
 * 3개 배열이 공통으로 포함하고 있는 원소를 반환해야 한다.
 * 여러 개라면 가장 큰 원소를 반환한다.
 * 한 개도 없다면 -1을 반환한다.
 * (배열 안의 원소는 중복이 가능하다.)
 */

// 첫 번째 풀이
function findCommonElements(arr1, arr2, arr3) {
  const hash = {};
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const set3 = new Set(arr3);

  for (const num of set1) {
    hash[num] = hash[num] + 1 || 1;
  }

  for (const num of set2) {
    hash[num] = hash[num] + 1 || 1;
  }

  for (const num of set3) {
    hash[num] = hash[num] + 1 || 1;
  }

  const result = Object.entries(hash).filter(([key, value]) => value === 3);
  const last = result.length - 1;

  return result.length > 0 ? result[last][0] : -1;
}

// 두 번째 풀이
function findCommonElements(arr1, arr2, arr3) {
  const hash = {};

  const countArr = (arr) => {
    const set = new Set(arr);

    for (const num of set) {
      hash[num] = hash[num] + 1 || 1;
    }
  };

  countArr(arr1);
  countArr(arr2);
  countArr(arr3);

  const result = Object.entries(hash).filter(([_, value]) => value === 3);
  const last = result.length - 1;

  return result.length > 0 ? result[last][0] : -1;
}

// 세 번째 풀이
function findCommonElements(arr1, arr2, arr3) {
  const hash = {};

  const countArr = (arr) => {
    const set = new Set(arr);

    for (const num of set) {
      hash[num] = hash[num] + 1 || 1;
    }
  };

  countArr(arr1);
  countArr(arr2);
  countArr(arr3);

  const result = Object.entries(hash)
    .reverse()
    .find(([_, value]) => value === 3);

  return result ? result[0] : -1;
}
