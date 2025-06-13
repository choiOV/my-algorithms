/**
 * JSON.parse 혹은 JSON.stringify를 사용하지 않고 깊은 복사를 진행해야 한다.
 */

const deepEquals = (original) => {
  if (typeof original !== "object" || original === null) return original;

  const object = Array.isArray(original) ? [] : {};

  for (const key in original) {
    if (Object.hasOwn(original, key)) {
      object[key] = deepEquals(original[key]);
    }
  }

  return object;
};
