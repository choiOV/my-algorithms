/**
 * 다이얼의 오른쪽에 있는 다이얼들이 함께 돌아가는 잠금장치가 있다.
 * 다이얼들의 초기 상태를 순서대로 담아낸 1차원 정수 배열 dials와 금고의 비밀번호를 다이얼 순서대로 담아낸 1차원 정수 배열 password가 매개변수로 주어진다.
 * 이때, 비밀번호를 맞추기 위해 다이얼을 돌려야 하는 최소 칸 수를 반환해야 한다.
 */

// 첫 번째 풀이 (일부 테스트 케이스 미통과)
function openingSafe(dials, password) {
  let myDials = [...dials];
  let count = 0;

  for (let i = 0; i < myDials.length; i++) {
    if (myDials[i] === password[i]) continue;

    const dialCount = password[i] - myDials[i];
    count += Math.abs(dialCount % 10);

    myDials = myDials.map((dial, index) => {
      if (index < i) return dial;
      return (dial + dialCount) % 10;
    });
  }

  return count;
}

// 두 번째 풀이
function openingSafe(dials, password) {
  let myDials = [...dials];
  let count = 0;

  for (let i = 0; i < myDials.length; i++) {
    if (myDials[i] === password[i]) continue;

    const up = (password[i] - myDials[i] + 10) % 10;
    const down = (myDials[i] - password[i] + 10) % 10;

    if (up <= down) {
      count += up;
      for (let j = i; j < myDials.length; j++) {
        myDials[j] = (myDials[j] + up) % 10;
      }
    } else {
      count += down;
      for (let k = i; k < myDials.length; k++) {
        myDials[k] = (myDials[k] - down + 10) % 10;
      }
    }
  }

  return count;
}
