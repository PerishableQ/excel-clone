export class TableSelection {
    static className = 'selected';
    constructor() {
        this.group = [];
        this.current = null;
    }

    // $el is instanceof Dom
    select($el) {
        this.clearCell();
        this.group.push($el);
        this.current = $el;
        $el.addClass(TableSelection.className);
    }

    clearCell() {
        this.group.forEach((cell) =>
            cell.removeClass(TableSelection.className)
        );
        this.group = [];
    }

    selectGroup($group = []) {
        this.clearCell();

        this.group = $group;
        this.group.forEach(($el) => $el.addClass(TableSelection.className));
    }
}