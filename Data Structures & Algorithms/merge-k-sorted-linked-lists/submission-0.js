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
        let firstList = null;
        let firstListCrs = null;

        for (let items of lists) {
            if (!items) continue;
            if (!firstList) {
                firstList = items;
                firstListCrs = items;
            } else {
                let dummy = new ListNode(0);
                dummy.next = firstList;

                let prev = dummy;
                while (items && firstListCrs) {
                    if (firstListCrs.val > items.val) {
                        let temp = items.next;
                        items.next = firstListCrs;
                        prev.next = items;
                        prev = items;
                        items = temp;
                    } else {
                        prev = firstListCrs;
                        firstListCrs = firstListCrs.next;
                    }
                }
                if (items) prev.next = items;
            }
            firstListCrs = firstList;
        }

        return firstListCrs;
    }
}
