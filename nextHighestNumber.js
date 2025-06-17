/**
 * 어떤 숫자가 주어졌을 때, 그 숫자를 재배열해 그 다음 큰 수를 찾아야 한다.
 * 예시) f(1234)  // 1243
 */

// 첫 번째 풀이 (일부 테스트 케이스 통과하지 못함)
function nextHighestNumber(number) {
  const str = [...String(number)];
  let target = str[str.length - 1];
  let i = str.length - 2;
  let temp = "";

  while (i < str.length) {
    if (target > str[str.length - i]) {
      temp = str[str.length - 1];
      str[str.length - 1] = str[str.length - i];
      str[str.length - i] = temp;
      break;
    } else {
      i++;
    }
  }

  if (i === str.length) {
    return number;
  }

  const sortedStr = str.slice(i - 1).sort((a, b) => a - b);
  str.splice(i - 1);

  const result = Number(str.concat(sortedStr).join(""));
  return result;
}

// 두 번째 풀이 (일부 테스트 케이스 통과하지 못함)
function nextHighestNumber(number) {
  const arrNum = number.toString().split("").map(Number);
  const lastNum = arrNum.length - 1;

  let i = arrNum.length - 2;
  for (; i >= 0; i--) {
    if (arrNum[lastNum] > arrNum[i]) {
      [arrNum[i], arrNum[lastNum]] = [arrNum[lastNum], arrNum[i]];
      break;
    }
  }

  if (i < 0) return number;

  const ascNum = arrNum.slice(i + 1).sort((a, b) => a - b);
  arrNum.splice(i + 1);

  return Number(arrNum.concat(ascNum).join(""));
}
