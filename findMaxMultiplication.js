/**
 * 10진수 N이 매개변수로 주어질 때, 자릿수 곱이 최대가 되는 k진법과 그때의 자릿수 곱을 반환해야 한다.
 * (만약 자릿수 곱이 최대가 되는 k가 여러 개 있다면 그중 가장 큰 k를 반환해야 한다.)
 */

// 첫 번째 풀이
function findMaxMultiplication(N) {
  const obj = {};

  for (let i = 2; i <= 10; i++) {
    const multiplication = [...N.toString(i)].reduce((acc, val) => {
      if (val === "0") return Number(acc);

      return acc * val;
    }, 1);

    obj[i] = multiplication;
  }

  let result = [0, 0];
  let max = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (value > max) {
      max = value;
      result = [key, value];
    }
  }

  return result;
}

// 두 번째 풀이
function findMaxMultiplication(N) {
  let maxMultiplication = 0;
  let bestNumberSystem = 0;

  for (let i = 2; i <= 10; i++) {
    const multiplication = [...N.toString(i)]
      .map(Number)
      .reduce((acc, val) => (val === 0 ? acc : acc * val), 1);

    if (
      multiplication > maxMultiplication ||
      (multiplication === maxMultiplication && i > bestNumberSystem)
    ) {
      bestNumberSystem = i;
      maxMultiplication = multiplication;
    }
  }

  return [bestNumberSystem, maxMultiplication];
}
