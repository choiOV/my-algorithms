// 문자열 s, t가 주어진다. 두 문자열이 무한히 같은 문자열이면 true, 그렇지 않으면 false를 반환해야 한다.

// 첫 번째 풀이
function infiniteString(s, t) {
  let stack = [];
  let shortStr = "";

  if (s.length >= t.length) {
    stack = [...s];
    shortStr = t;
  } else {
    stack = [...t];
    shortStr = s;
  }

  let i = shortStr.length - 1;

  while (stack.length) {
    const last = stack.pop();

    if (last !== shortStr[i]) return false;
    i--;

    if (i < 0) i = shortStr.length - 1;
  }

  return true;
}

// 두 번째 풀이
function infiniteString(s, t) {
  return s + t === t + s;
}
