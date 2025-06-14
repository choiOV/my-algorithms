/**
 * 주어진 6가지 규칙 중 **임의로 적용 가능한 것**을 계속 적용해 더 이상 변환할 수 없을 때의 문자열은 반환해야 한다.

| **번호** | **변환 규칙** | **설명** |
| --- | --- | --- |
| 1 | "AB" → "AA" | AB는 AA로 바뀜 |
| 2 | "BA" → "AA" | BA도 AA로 바뀜 |
| 3 | "CB" → "CC" | CB는 CC로 바뀜 |
| 4 | "BC" → "CC" | BC도 CC로 바뀜 |
| 5 | "AA" → "A" | AA는 A로 줄일 수 있음 |
| 6 | "CC" → "C" | CC는 C로 줄일 수 있음 |
 */

// 첫 번째 풀이
function transformString(str) {
  const myString = [...str];

  let p1 = 0;
  let p2 = 1;

  while (p2 < myString.length) {
    const target = myString[p1] + myString[p2];
    switch (target) {
      case "AB":
      case "BA":
        myString[p1] = "A";
        myString[p2] = "A";
        p1 = 0;
        p2 = 1;
        break;
      case "CB":
      case "BC":
        myString[p1] = "C";
        myString[p2] = "C";
        p1 = 0;
        p2 = 1;
        break;
      case "AA":
        myString.splice(p2, 1);
        myString[p1] = "A";
        p1 = 0;
        p2 = 1;
        break;
      case "CC":
        myString.splice(p2, 1);
        myString[p1] = "C";
        p1 = 0;
        p2 = 1;
        break;
      default:
        p1++;
        p2++;
    }
  }

  return myString.join("");
}

// 두 번째 풀이
function transformString(str) {
  const stack = [];

  for (const char of str) {
    stack.push(char);

    while (stack.length >= 2) {
      const last = stack[stack.length - 1];
      const secondLast = stack[stack.length - 2];
      const target = last + secondLast;
      let changed = "";

      switch (target) {
        case "AB":
        case "BA":
          changed = "A";
          break;
        case "CB":
        case "BC":
          changed = "C";
          break;
        case "AA":
          changed = "A";
          break;
        case "CC":
          changed = "C";
          break;
      }

      if (changed) {
        stack.pop();
        stack.pop();
        stack.push(changed);
      } else {
        break;
      }
    }
  }

  return stack.join("");
}
