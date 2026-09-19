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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        while (lists.length > 1) {
            let mergedListArray = [];
            for (let i = 0; i < lists.length; i = i + 2) {
                mergedListArray.push(this.merge2Lists(lists[i], lists[i + 1]));
            }
            lists = mergedListArray;
        }

        return lists[0];
    }

    merge2Lists(l1, l2) {
        if (!l1 || !l2) return l2 || l1;

        let dummy = new ListNode(0);
        let tail = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
                tail = tail.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
                tail = tail.next;
            }
        }

        if (l1 || l2) tail.next = l1 || l2;

        return dummy.next;
    }
}
