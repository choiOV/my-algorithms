// 현재 눈금선에 있는 숫자 P와, 비밀번호 S가 매개변수로 주어질 때, 자물쇠를 풀기 위한 최소 회전 횟수를 반환해야 한다.

// 첫 번째 풀이
function specialLock(p, s) {
  let count = 0;

  for (let i = 0; i < p.length; i++) {
    let candidate1 = 0;
    let candidate2 = 0;

    if (p[i] < s[i]) {
      candidate1 = s[i] - p[i];
      candidate2 = Number(p[i]) + 10 - s[i];
    } else {
      candidate1 = p[i] - s[i];
      candidate2 = Number(s[i]) + 10 - p[i];
    }

    count += Math.min(candidate1, candidate2);
  }

  return count;
}

// 두 번째 풀이 (가독성 개선)
function specialLock(p, s) {
  let count = 0;

  for (let i = 0; i < p.length; i++) {
    const current = p[i];
    const target = s[i];

    const clockwise = (target - current + 10) % 10;
    const counterClockwise = (current - target + 10) % 10;

    count += Math.min(clockwise, counterClockwise);
  }

  return count;
}
