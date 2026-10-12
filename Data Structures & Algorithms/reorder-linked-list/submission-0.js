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
     * @return {void}
     */
    reorderList(head) {
        let first = head;
        let second = head.next;

        while (second && second.next) {
            first = first.next;
            second = second.next.next;
        }

        second = first.next;
        first.next = null;

        let fwd = second.next;
        second.next = null;

        while (fwd) {
            let temp = fwd.next || null;
            fwd.next = second;
            second = fwd;
            fwd = temp;
        }

        first = head;

        while (first) {
            let firstTemp = first.next;
            let secondTemp = second.next;

            first.next = second;
            second.next = firstTemp;

            first = first.next;
            second = secondTemp;
        }

        console.log(head);
        return head;
    }
}
