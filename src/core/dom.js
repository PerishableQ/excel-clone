// create new Dom element
class Dom {
    constructor(selector) {
        // #app
        this.$el = typeof selector === 'string' ?
            document.querySelector(selector) :
            selector;
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }

    on(eventName, callback) {
        this.$el.addEventListener(eventName, callback);
    }

    off(eventName, callback) {
        this.$el.removeEventListener(eventName, callback);
    }

    clear() {
        this.html('');
        return this;
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }

        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }

    closest(selector) {
        return $(this.$el.closest(selector));
    }

    getCoordinates() {
        return this.$el.getBoundingClientRect();
    }

    get data() {
        return this.$el.dataset;
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector);
    }

    css(styles = {}) {
        Object
            .keys(styles)
            .forEach((el) => {
                this.$el.style[el] = styles[el];
            });
    }
}

export function $(selector) {
    return new Dom(selector);
}

$.create = (tagname, classes = '') => {
    const el = document.createElement(tagname);
    if (classes) {
        el.classList.add(classes);
    }

    return $(el);
};