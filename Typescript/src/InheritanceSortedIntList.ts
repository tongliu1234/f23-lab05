import { IntegerList } from "./IntegerList.js";
import { SortedIntList } from "./hidden/SortedIntListLibrary.js";

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class InheritanceSortedIntList extends SortedIntList {
    // Write your [implementation below with API documentation
    private totalAdded: number = 0;

    add(num: number): boolean {
        if (super.add(num)) {
            this.totalAdded += 1;
            return true;
        }
        return false;
    }

    addAll(list: IntegerList): boolean {
        return super.addAll(list);
    }

    getTotalAdded(): Number {
        return this.totalAdded;
    }
}

export { InheritanceSortedIntList };
