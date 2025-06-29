// 단일 연결 리스트를 제자리에서 역순으로 바꿔야 한다.

// 첫 번째 풀이
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
