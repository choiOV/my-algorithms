/**
 * 게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는
 * 칸의 개수의 최솟값을 반환해야 한다. (단, 상대 팀 진영에 도착할 수 없을 때는 -1을 반환해야 한다.)
 */

// 첫 번째 풀이
function shortestGamePath(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from(Array(n), () => Array(m).fill(false));
  visited[0][0] = true;
  const queue = [[0, 0, 1]];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    if (x === n - 1 && y === m - 1) return dist;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;

        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}
