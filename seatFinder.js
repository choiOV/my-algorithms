/**
 * 행 수 N(1~50)과 예약 좌석 목록이 문자열 S로 주어졌을 때, 최대 4인 좌석 수를 반환해야 한다.
 * (각 열에는 10개의 좌석이 있다.)
 * (좌석 번호는 A~K이고 I는 건너뛴다. 만약 통로가 분리 될 경우 두 사람씩만 앉아야 한다.)
 */

// 첫 번째 풀이 (주어진 테스트 케이스는 통과하나, 정확한 풀이가 아님)
function seatFinder(N, S) {
  const seat = Array.from({ length: N }, () => Array(10).fill(false));

  if (S) {
    S.split(" ").forEach((seatNum) => {
      const reservedIndex = [];
      const number = seatNum[0];
      const alphabet = seatNum[1];

      reservedIndex[0] = number - 1;
      if (alphabet === "J" || alphabet === "K") {
        reservedIndex[1] = alphabet.charCodeAt() - 66;
      } else {
        reservedIndex[1] = alphabet.charCodeAt() - 65;
      }

      seat[reservedIndex[0]][reservedIndex[1]] = true;
    });
  }

  let result = 0;
  for (const line of seat) {
    let stack = [];

    for (const isReserved of line) {
      if (isReserved) {
        stack = [];
        continue;
      }

      if (stack.length === 4) {
        result++;
        stack = [];
      }
      stack.push(isReserved);
    }
  }

  return result;
}
