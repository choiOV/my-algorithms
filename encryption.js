/**
 * 원문 s, 암호문 cipher가 주어진다.
 * 원문을 이루는 알파벳이 서로 다른 알파벳으로 일대일 대치되어 암호문을 만들수 있으면 true, 그렇지 않으면 false를 반환해야 한다.
 */

// 첫 번째 풀이
function encryption(s, cipher) {
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] && hash[s[i]] !== cipher[i]) {
      return false;
    }

    hash[s[i]] = cipher[i];
  }

  const encryptArr = Object.values(hash);

  for (let j = 0; j < encryptArr.length; j++) {
    if (encryptArr.includes(encryptArr[j], j + 1)) return false;
  }

  return true;
}

// 두 번째 풀이 (가독성 개선)
function encryption(s, cipher) {
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const sourceChar = s[i];
    const cipherChar = cipher[i];
    const mappedChar = hash[sourceChar];

    if (mappedChar && mappedChar !== cipherChar) {
      return false;
    }

    hash[sourceChar] = cipherChar;
  }

  const encryptArr = Object.values(hash);
  for (let j = 0; j < encryptArr.length; j++) {
    if (encryptArr.includes(encryptArr[j], j + 1)) return false;
  }

  return true;
}

//세 번째 풀이 (성능 개선)
function encryption(s, cipher) {
  const hash = {};
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    const sourceChar = s[i];
    const cipherChar = cipher[i];

    if (hash[sourceChar]) {
      if (hash[sourceChar] !== cipherChar) return false;
    } else {
      if (set.has(cipherChar)) return false;

      hash[sourceChar] = cipherChar;
      set.add(cipherChar);
    }
  }

  return true;
}
