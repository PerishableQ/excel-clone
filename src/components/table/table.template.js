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

function toCell(_, column) {
    return `<div class="cell" contenteditable="" data-col="${column}"></div>`;
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