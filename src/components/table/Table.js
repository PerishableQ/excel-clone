import {ExcelComponent} from '@/core/ExcelComponent';
import {$} from '@/core/dom';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from './table.resize';
import {TableSelection} from './TableSelection';
import {isCell} from './table.functions';
import {matrix} from '@/core/utils';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    prepare() {
        this.selection = new TableSelection();
    }

    onMousedown(event) {
        resizeHandler(this.$root, event);

        if (isCell(event)) {
            const $target = $(event.target);

            if (event.shiftKey) {
                const target = $target.id(true);
                const current = this.selection.current.id(true);

                const $cells = matrix(target, current)
                    .map((id) => this.$root.find(`[data-id="${id}"]`));
                this.selection.selectGroup($cells);
            } else {
                this.selection.select($target);
            }
        }
    }

    toHTML() {
        return createTable(30);
    }

    init() {
        super.init();

        const $cell = this.$root.find('[data-id="0:0"');
        this.selection.select($cell);
    }
}

// stopped at video 55 - done