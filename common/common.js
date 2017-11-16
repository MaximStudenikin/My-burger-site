( () => {

    const doc = document,
        body = doc.body,
        hamburgerMenu = doc.getElementById('hamburger-menu'),
        fullMenu = doc.getElementById('full__menu'),
        closeFullMenu = doc.getElementById('full__menu-close');
    //one page scroll

    const addOnWheel = (elem, handler) => {
        if (elem.addEventListener) {
            if ('onwheel' in document) {
                // IE9+, FF17+
                elem.addEventListener("wheel", handler);
            } else if ('onmousewheel' in document) {
                // устаревший вариант события
                elem.addEventListener("mousewheel", handler);
            } else {
                // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
                elem.addEventListener("MozMousePixelScroll", handler);
            }
        }
    }

    addOnWheel (body, (event) => {

        let translate3d = 0,
            delta = event.deltaY || event.detail || event.wheelDelta,
            content = doc.getElementById('maincontent');

        if (delta > 0) {
            translate3d += 100;
        } else translate3d -= 100;

        // content.style.transform = content.style.WebkitTransform = content.style.MsTransform = 'translateY(' + translateY + ')';
        content.style.transform = 'translate3d(' + translate3d + '%' + ')';

    });

    //hamburger menu

    hamburgerMenu.addEventListener('click', () => {
        fullMenu.classList.toggle('visuallyhidden');

        addOnWheel (fullMenu, event => {
            let delta = event.deltaY || event.detail || event.wheelDelta;

            event.preventDefault();
        });
    });

    closeFullMenu.addEventListener('click', () => {
        fullMenu.classList.toggle('visuallyhidden');
    });

})();