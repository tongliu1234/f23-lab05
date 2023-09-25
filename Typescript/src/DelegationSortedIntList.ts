/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

import { IntegerList } from "./IntegerList";
import { SortedIntList } from "./hidden/SortedIntListLibrary.js";

class DelegationSortedIntList implements IntegerList {
    private sortedlist: IntegerList = new SortedIntList();
    private totalAdded = 0;

    add = (num: number) => {
        if (this.sortedlist.add(num)) {
            this.totalAdded += 1;
            return true;
        }
        return false;
    };

    addAll = (list: IntegerList) => {
        const oldSize = this.size();

        if (this.sortedlist.addAll(list)) {
            this.totalAdded += this.size() - oldSize;
            return true;
        }
        return false;
    };

    getTotalAdded = () => this.totalAdded;

    get = (index: number) => this.sortedlist.get(index);
    remove = (num: number) => this.sortedlist.remove(num);
    removeAll = (list: IntegerList) => this.sortedlist.removeAll(list);
    size = () => this.sortedlist.size();
}

export { DelegationSortedIntList };
