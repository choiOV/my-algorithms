/**
 * 호출된 문자열이 애너그램이면 true를 반환하고, 그렇지 않으면 false를 반환해야 한다.
 * (공백, 대문자, 구두점은 무시한다.)
 */

// 첫 번째 풀이 (최적의 방법 아님)
function isAnagrams(s, t) {
  if (s.length !== t.length) return false;
  const hash = {};

  for (const char of s) {
    const lower = char.toLowerCase();
    if (lower.charCodeAt() < 97 || lower.charCodeAt() > 122) continue;

    if (!hash[lower]) {
      hash[lower] = 1;
      continue;
    }

    if (hash[lower]) {
      hash[lower] += 1;
    }
  }

  for (const char of t) {
    const lower = char.toLowerCase();

    if (hash[lower] < 0) return false;

    if (hash[lower]) {
      hash[lower] -= 1;
    }
  }

  const hashArray = Object.values(hash);

  return hashArray.every((count) => count <= 0);
}
