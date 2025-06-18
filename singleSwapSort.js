// 주어진 배열을 단 한 번의 스왑으로 오름차순 배열로 정렬할 수 있다면 true, 그렇지 않다면 false를 반환해야 한다.

// 첫 번째 풀이 (일부 테스트 케이스 통과하지 못함)
function singleSwapSort(array) {
  const sortArr = [...array]
    .filter((num) => Number.isInteger(num))
    .sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortArr[i]) {
      count++;
    }

    if (count > 2) return false;
  }

  return true;
}
