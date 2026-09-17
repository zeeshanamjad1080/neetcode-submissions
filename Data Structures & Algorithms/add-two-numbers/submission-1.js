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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let hl1 = l1;
        let hl2 = l2;
        let carry = 0;
        let sum = "";

        while (hl1 || hl2) {
            let val1 = hl1 ? hl1.val : 0;
            let val2 = hl2 ? hl2.val : 0;
            let add = val1 + val2 + carry;
            sum += String(add % 10);
            carry = Math.floor(add / 10);
            if (hl1) hl1 = hl1.next;
            if (hl2) hl2 = hl2.next;
        }

        if (carry) sum += carry;

        let prev = null;
        let head = null;
        for (let item of sum) {
            let newNode = new ListNode(Number(item));
            if (prev) {
                prev.next = newNode;
                prev = newNode;
            } else {
                prev = newNode;
                head = newNode;
            }
        }

        return head;
    }
}
