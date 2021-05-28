export function capitalize(str = '') {
    if (typeof str !== 'string') {
        return '';
    }

    return 'on' + str.charAt(0).toUpperCase() + str.slice(1);
}

export function range(start, end) {
    if (start > end) {
        [end, start] = [start, end];
    }

    return new Array(end - start + 1)
        .fill('')
        .map((_, ind) => start + ind);
}

export function matrix(target, current) {
    const cols = range(current.col, target.col);
    const rows = range(current.row, target.row);

    return cols.reduce((acc, col) => {
        rows.forEach((row) => acc.push(`${row}:${col}`));
        return acc;
    }, []);
}