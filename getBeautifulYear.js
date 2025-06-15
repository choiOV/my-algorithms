// 특정 연도 year 다음으로 숫자 간에 중복이 없는 연도 중 가장 작은 연도를 반환해야 한다.

// 첫 번째 풀이
function getBeautifulYear(year) {
  const myMap = new Map();
  let myYear = year + 1;
  let isBeautifulYear = false;

  while (!isBeautifulYear) {
    const arrYear = [...String(myYear)];

    for (const num of arrYear) {
      if (myMap.has(num)) {
        myMap.clear();
        myYear++;
        break;
      }

      myMap.set(num, true);
    }

    if (myMap.size === 0) {
      continue;
    }

    isBeautifulYear = true;
  }

  let resultYear = "";
  myMap.forEach((_, k) => {
    resultYear += k;
  });

  return Number(resultYear);
}

// 두 번째 풀이
function getBeautifulYear(year) {
  let myYear = year + 1;

  while (true) {
    const strYear = String(myYear);
    const mySet = new Set(strYear);

    if (strYear.length === mySet.size) {
      return myYear;
    }

    myYear++;
  }
}
