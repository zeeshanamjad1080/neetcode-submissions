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
     * @return {ListNode}
     */
    reverseList(head) {
        function recursiveLinkList(head) {
            if (head === null || head.next === null) {
                return head;
            }

            let newHead = recursiveLinkList(head.next);

            head.next.next = head;
            head.next = null;
            return newHead;
        }
        return head;
    }
}
