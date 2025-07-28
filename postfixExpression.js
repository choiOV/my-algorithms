/**
 * Postfix expression이 매개변수 P로 주어졌을 때, 이를 계산한 결과를 반환해야 한다.
 * (단, 숫자형으로 반환해야 한다.)
 * (주어진 식에서 나눗셈은 항상 나누어떨어지는 경우만 주어진다.)
 */

// 첫 번째 풀이
function postfixExpression(P) {
  const stack = [];
  const operatorArr = ["+", "-", "*", "/"];
  const mappedOperator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
  };

  for (const target of P) {
    if (operatorArr.includes(target)) {
      const last = stack.pop();
      const secondLast = stack.pop();
      const result = mappedOperator[target](secondLast, last);

      stack.push(result);
      continue;
    }

    stack.push(Number(target));
  }

  return stack[0];
}

// 두 번째 풀이
function postfixExpression(P) {
  const stack = [];
  const mappedOperator = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "/": (a, b) => b / a,
    "*": (a, b) => b * a,
  };

  for (const target of P) {
    if (target in mappedOperator) {
      const result = mappedOperator[target](stack.pop(), stack.pop());
      stack.push(result);
    } else {
      stack.push(Number(target));
    }
  }

  return stack[0];
}
