// 정수 배열(양수 및 음수)이 주어졌을 때 가장 큰 연속 합을 구해야 한다.

// 첫 번째 풀이 (일부 테스트 케이스 통과하지 못 함)
function findLargestContinuousSum(array) {
  let maxSum = array[0];
  let currentSum = 0;

  for (const num of array) {
    if (currentSum + num < 0) {
      currentSum = 0;
      continue;
    }

    currentSum += num;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

// 두 번째 풀이
function findLargestContinuousSum(array) {
  let maxSum = array[0];
  let currentSum = 0;

  for (const num of array) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}
