/* eslint-disable no-debugger */
import {$} from '@/core/dom.js';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    // method that selects #app
    getRoot() {
        const $root = $.create('div', 'excel');

        // looping over each class in index.js components array
        this.components = this.components.map((Component) => {
            const $el = $.create('div', Component.className);

            // adding created node el to our Header, Formula... etc.
            // respectively on the array
            const component = new Component($el);

            $el.html(component.toHTML());/* no innerHTML on debugger..
            idk why that is so*/
            $root.append($el);
            return component;
        });

        return $root;
    }

    // render element on the page
    render() {
        this.$el.append(this.getRoot());
        this.components.forEach((component) => component.init());
    }
}