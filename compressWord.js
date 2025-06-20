// K개의 연속된 같은 문자가 있으면, 그 문자들을 제거한다. (더 이상 제거할 수 없을 때까지 반복한다.)

// 첫 번째 풀이
function compressWord(word, K) {
  if (K === 0) return word;

  const arrWord = [...word];
  let pivot = 0;
  let pointer = 1;

  while (pivot < arrWord.length) {
    if (arrWord.length < K) break;
    if (pointer - pivot >= K) {
      arrWord.splice(pivot, K);
      pivot = 0;
      pointer = 1;
    }

    if (arrWord[pivot] === arrWord[pointer]) {
      pointer += 1;
    } else {
      pivot = pointer;
      pointer += 1;
    }
  }

  return arrWord.join("");
}

// 두 번째 풀이
function compressWord(word, K) {
  const stack = [];

  for (const str of word) {
    stack.push(str);

    if (stack.length >= K) {
      const checkSameCharArr = stack.slice(-K);

      if (checkSameCharArr.every((e, i, a) => a[0] === e)) {
        stack.splice(-K);
      }
    }
  }

  return stack.join("");
}
