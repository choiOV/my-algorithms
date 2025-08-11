// 주어진 배열 내의 모든 문자열이 가장 긴 문자열의 길이와 동일한 길이를 가져야 한다.
// (짧은 문자열의 앞에 빈 문자를 추가해 동일하게 만든다.)

// 첫 번째 풀이
function syncStringLength(array) {
  const arr = [...array];
  const longestLength = [...array].sort((a, b) => b.length - a.length)[0]
    .length;

  const syncedStringArr = arr.map((str) => {
    if (str.length === longestLength) return str;
    const diffLength = Math.abs(str.length - longestLength);

    return " ".repeat(diffLength) + str;
  });

  return syncedStringArr;
}

// 두 번째 풀이 (효율성 개선)
function syncStringLength(array) {
  const longestLength = array.reduce(
    (max, str) => Math.max(max, str.length),
    0
  );

  return array.map((str) => str.padStart(longestLength, " "));
}
