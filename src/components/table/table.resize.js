import {$} from '@/core/dom';

export function resizeHandler($root, event) {
    if (event.target.dataset.resize) {
        const $resizer = $(event.target);
        const $parent = $resizer.closest('[data-type="resizable"]');
        const coordinates = $parent.getCoordinates();
        const type = $resizer.data.resize;
        const sideProp = type === 'col' ? 'bottom' : 'right';
        let value;

        $resizer.css({opacity: 1, [sideProp]: '-5000px'});

        document.onmousemove = (e) => {
            if (type === 'col') {
                const delta = e.pageX - coordinates.right;
                value = delta + coordinates.width + 'px';
                $resizer.css({right: -delta + 'px'});
            } else {
                const delta = e.pageY - coordinates.bottom;
                value = coordinates.height + delta + 'px';
                $resizer.css({bottom: -delta + 'px'});
            }
        };

        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
            if (type === 'col') {
                $parent.css({width: value + 'px'});
                $root.findAll(
                    `[data-col="${$parent.data.col}"]`
                ).forEach((el) => el.style.width = value);
            } else {
                $parent.css({height: value});
            }

            $resizer.css({opacity: 0, bottom: 0, right: 0});
        };
    }
}