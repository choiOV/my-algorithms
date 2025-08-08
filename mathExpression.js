/**
 * 덧셈, 뺄셈과 곱셈으로 이루어진 식 expression이 매개변수로 주어질 때,
 * 괄호 한 쌍을 올바르게 삽입하여 계산 한 결과의 최댓값을 반환해야 한다.
 */

// 첫 번째 풀이
/*
1. 의사코드 1
    1. ~~곱셈에 괄호를 줘야 하는데 기준이 추상적임~~
    2. ~~2+1x5-4x3+2 라면 5-4에 괄호를 주는게 더 큰 결과값이 나옴~~
    3. ~~그렇다면 곱셈의 결과가 음수가 되지 않게 하는게 포인트~~
        1. ~~곱셈의 부분 결과값이 음수인 부분을 찾아야 한다.~~
        2. ~~부근에 음수가 있다는건데~~
2. 의사코드 2
    1. 스택을 활용한다.
3. 의사코드 3
    1. 모든 가능한 괄호 위치를 사용해본다.
*/

// 두 번째 풀이 (해답을 참고한 풀이)
function mathExpression(expression) {
  let converted = "";
  for (const char of expression) {
    converted += char === "x" ? "*" : char;
  }

  const numCount = (converted.length + 1) >> 1;
  let maxResult = -Infinity;

  for (let i = 0; i < numCount; i++) {
    for (let j = i; j < numCount; j++) {
      const left = i * 2;
      const right = j * 2;

      const candidate =
        converted.slice(0, left) +
        "(" +
        converted.slice(left, right + 1) +
        ")" +
        converted.slice(right + 1);

      const value = eval(candidate);

      if (value > maxResult) {
        maxResult = value;
      }
    }
  }

  return maxResult;
}
