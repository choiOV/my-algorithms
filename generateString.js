/*

두 개의 정수 N과 K가 주어졌을 때,

- 문자 “a”를 정확히 N개,
- 문자 “b”를 정확히 K개 사용하여 하나의 문자열을 만들어야 한다.

단, 같은 문자가 3번 연속해서 나와선 안 된다.
(즉, "aaa"나 "bbb"와 같은 부분 문자열은 포함되면 안 된다.)

 */

// 첫 번째 풀이 (일부 테스트 케이스 통과하지 못함)
function generateString(N, K) {
  let string = "";
  const nCounter = { a: N, checker: 3 };
  const kCounter = { b: K, checker: 3 };

  while (nCounter.a > 0 || kCounter.b > 0) {
    if (nCounter.a > 0 && nCounter.checker > 0) {
      if (string[string.length - 1] === "b") {
        nCounter.checker = 3;
      }

      string += "a";
      nCounter.a--;
      nCounter.checker--;
    }

    if (kCounter.b > 0 && kCounter.checker > 0) {
      if (string[string.length - 1] === "a") {
        kCounter.checker = 3;
      }
      string += "b";
      kCounter.b--;
      kCounter.checker--;
    }
  }

  return string;
}

// 두 번째 풀이
function generateString(N, K) {
  let string = "";
  let aCounter = N;
  let bCounter = K;

  while (aCounter > 0 || bCounter > 0) {
    const length = string.length;

    if (length >= 2 && string[length - 1] === string[length - 2]) {
      const lastChar = string[length - 1];

      if (lastChar === "a" && bCounter > 0) {
        string += "b";
        bCounter--;
      } else if (lastChar === "b" && aCounter > 0) {
        string += "a";
        aCounter--;
      }
    } else {
      if (aCounter >= bCounter && aCounter > 0) {
        string += "a";
        aCounter--;
      } else if (bCounter > 0) {
        string += "b";
        bCounter--;
      }
    }
  }

  return string;
}
