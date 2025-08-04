/**
 * 흑백 이미지가 매개변수 v(흰1, 검0)로 주어질 때, 흰색 영역의 개수와 흰색 영역 중에서 가장 큰 넓이를 반환해야 한다.
 * 즉, [흰색 영역의 개수, 가장 큰 넓이]를 순서에 맞춰 반환한다.
 * (대각선 연결은 같은 영역으로 포함하지 않는다.)
 */

// 첫 번째 풀이
function imageArea(v) {
  const width = v[0].length;
  const height = v.length;

  const visited = Array.from(Array(height), () => Array(width).fill(false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const WHITE = 1;

  let areaCount = 0;
  let maxAreaSize = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (v[i][j] === 1 && visited[i][j] === false) {
        let areaSize = 1;
        const queue = [[i, j]];

        visited[i][j] = true;

        while (queue.length > 0) {
          const [x, y] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < height &&
              ny < width &&
              visited[nx][ny] === false &&
              v[nx][ny] === WHITE
            ) {
              visited[nx][ny] = true;
              areaSize++;

              queue.push([nx, ny]);
            }
          }
        }

        areaCount++;
        maxAreaSize = Math.max(maxAreaSize, areaSize);
      }
    }
  }

  return [areaCount, maxAreaSize];
}
