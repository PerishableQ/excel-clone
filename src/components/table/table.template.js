const CODES = { // A-Z alphabet characters
    A: 65,
    Z: 90
};

function createRow(data, info) {
    return `
        <div class="row">
            <div class="row-info">${info ?? ''}</div>
            <div class="row-data">${data}</div>
        </div>
    `;
}

function toColumn(column) {
    return `<div class="column">${column}</div>`;
}

function toCell() {
    return `<div class="cell" contenteditable=""></div>`;
}

function toCharacter(_, ind) {
    return String.fromCharCode(CODES.A + ind);
}

export function createTable(rowsCount = 20) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];

    const cols = new Array(colsCount)
        .fill('')
        .map(toCharacter)
        .map(toColumn)
        .join('');

    rows.push(createRow(cols));

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('');
        rows.push(createRow(cells, i + 1));
    }

    return rows.join('');
}