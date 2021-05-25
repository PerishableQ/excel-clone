/* eslint-disable no-debugger */
import {$} from '@/core/dom.js';

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];
    }

    // method that selects #app
    getRoot() {
        const $root = $.create('div', 'excel');

        // looping over each class in index.js components array
        this.components.forEach((Component) => {
            // creating node el with each excel.html div element
            const $el = $.create('div', Component.className);

            // adding created node el to our Header, Formula... etc.
            // respectively on the array
            const component = new Component($el);

            debugger;
            $el.innerHTML = component.toHTML();
            $root.append($el);
        });
        return $root;
    }

    // render element on the page
    render() {
        this.$el.append(this.getRoot());
    }
}