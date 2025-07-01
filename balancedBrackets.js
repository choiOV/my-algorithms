// 주어진 괄호가 균형되어 있다면 true, 그렇지 않다면 false를 반환해야 한다.

// 첫 번째 풀이
function balancedBrackets(brackets) {
  const stack = [];

  for (const bracket of brackets) {
    switch (bracket) {
      case "(":
      case "{":
      case "[":
        stack.push(bracket);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
    }
  }

  return stack.length === 0 ? true : false;
}
