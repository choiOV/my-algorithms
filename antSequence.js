/**
 * n번째 개미수열을 문자열 형태로 반환해야 한다.
 * (개미수열은 앞의 수의 연속된 같은 숫자를 묶어서 숫자와 그 개수를 읽는 방식으로 만들어진다.)
 * (n은 40이하의 자연수이다.)
 */

// 첫 번째 풀이 (풀긴 했으나 최적의 풀이가 아님)
function antSequence(n) {
  const groupHelper = (nums) => {
    const result = [];
    let count = 1;

    for (let i = 1; i <= nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        result.push([nums[i - 1], count]);
        count = 1;
      } else {
        count++;
      }
    }

    return result;
  };

  const createNextAnt = (group) => group.flat().join("");

  let result = "1";
  for (let i = 1; i < n; i++) {
    const grouped = groupHelper(result);
    result = createNextAnt(grouped);
  }

  return result;
}
