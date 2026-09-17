// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        const map = new Map();

        let curr = head;

        // Pass 1: create every copied node
        while (curr) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;

        // Pass 2: connect next and random
        while (curr) {
            const copy = map.get(curr);

            copy.next = curr.next
                ? map.get(curr.next)
                : null;

            copy.random = curr.random
                ? map.get(curr.random)
                : null;

            curr = curr.next;
        }

        return map.get(head);
    }
}
