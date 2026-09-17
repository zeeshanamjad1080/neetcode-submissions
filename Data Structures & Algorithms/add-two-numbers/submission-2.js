class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry !== 0) {
            const x = l1 !== null ? l1.val : 0;
            const y = l2 !== null ? l2.val : 0;

            const sum = x + y + carry;
            carry = Math.floor(sum / 10);

            current.next = new ListNode(sum % 10);
            current = current.next;

            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }

        return dummy.next;
    }
}