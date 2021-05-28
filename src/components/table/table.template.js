const CODES = { // A-Z alphabet characters
    A: 65,
    Z: 90
};

function createRow(data, info) {
    const resize = info ?
        `<div class="row-resize" data-resize="row"></div>` :
        '';
    return `
        <div class="row" data-type="resizable">
            <div class="row-info">
                ${info ?? ''}
                ${resize}
            </div>
            <div class="row-data">
                ${data}
            </div>
        </div>
    `;
}

function toColumn(column, index) {
    return `<div class="column" data-type="resizable" data-col="${index}">
                ${column}
                <div class="col-resize" data-resize="col"></div>
            </div>`;
}

function toCell(row, column) {
    return `<div class="cell" contenteditable="" 
    data-col="${column}" 
    data-type="cell"
    data-id="${row}:${column}"></div>`;
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

    for (let row = 0; row < rowsCount; row++) {
        const cells = new Array(colsCount)
            .fill('')
            .map((_, col) => toCell(row, col))
            .join('');
        rows.push(createRow(cells, row + 1));
    }

    return rows.join('');
}