class Dom {
    constructor(selector) {
        // #app
        /* this.$el = typeof selector === 'string' ?
            document.querySelector(selector) :
            selector; */
    }

    /* html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }

    clear() {
        this.html('');
        return this;
    } */

    append(node) {
        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }
    }
}

export function $() {
    return new Dom();
}

$.create = (tagname, classes = '') => {
    const el = document.createElement(tagname);
    if (classes) {
        el.classList.add(classes);
    }

    return el;
};