/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let previousTail = dummy;

        let start = head;

        while (start) {
            let end = start;
            let num = k;

            while (num > 0 && end) {
                end = end.next;
                num--;
            }

            if (num > 0) break;

            let reversedHead = this.reverseChunk(start, end);

            previousTail.next = reversedHead;
            start.next=end;

            previousTail = start;
            start = end
        }

        return dummy.next;
    }

    reverseChunk(start, end) {
        let prev = null;
        let curr = start;

        while (curr !== end) {
            let next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
