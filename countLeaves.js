/**
 * countLeaves 메서드를 구현해야 한다.
 * 현재 트리 구조 전체를 순회해서 잎(leaf) 노드의 개수를 숫자로 반환해야 한다.
 * (잎 노드: 자식노드가 없는 노드)
 */

// 첫 번째 풀이
var Tree = function () {
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  // Your code here.. (Only here!)
  if (this.children.length === 0) return 1;

  let leafCount = 0;
  for (const child of this.children) {
    leafCount += child.countLeaves();
  }

  return leafCount;
};

/* 다른 메서드 생략 */
