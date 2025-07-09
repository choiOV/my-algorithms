/**
 * IP 주소 문자열이 유효한지 검사하고, 그 주소가 등록, 차단, 아무 정보도 없는지 판단해 적절한 응답코드를 반환해야 한다.
 *
 * 응답 코드 의미
 * 0  ->  서버에 등록된 IP (registeredList에 있음)
 * 1	->  IP 주소 형식이 잘못됨
 * 2	->  형식은 맞지만 등록도 안됐고 차단도 안 됨
 * 3	->  차단된 IP (bannedList에 있음)
 */

// 첫 번째 풀이
function getStatusCode(ipAddresses, registeredList, bannedList) {
  const result = [];
  const set = new Set(ipAddresses);

  set.forEach((v) => {
    if (!isValidIp(v)) {
      result.push("1");
      return set.delete(v);
    }

    for (const registered of registeredList) {
      if (v === registered) {
        result.push("0");
        return set.delete(v);
      }
    }

    for (const banned of bannedList) {
      if (v === banned) {
        result.push("3");
        return set.delete(v);
      }
    }

    result.push("2");
    return set.delete(v);
  });

  function isValidIp(ipAddress) {
    const section = ipAddress.split(".");
    if (section.length > 4) return false;

    for (const str of section) {
      const num = Number(str);

      if (str !== String(num) || num > 255 || num < 0) return false;
    }

    return true;
  }

  return result;
}

// 두 번째 풀이
function getStatusCode(ipAddresses, registeredList, bannedList) {
  const result = [...ipAddresses];
  const registeredSet = new Set(registeredList);
  const bannedSet = new Set(bannedList);

  return result.map((v, i, a) => {
    if (!isValidIp(v)) return "1";
    if (registeredSet.has(v)) return "0";
    if (bannedSet.has(v)) return "3";

    return "2";
  });

  function isValidIp(ipAddress) {
    const section = ipAddress.split(".");
    if (section.length !== 4) return false;

    for (const str of section) {
      const num = Number(str);

      if (str !== String(num) || num > 255 || num < 0) return false;
    }

    return true;
  }
}
