$( document ).ready( () => {

    //var

    let doc = document,
        body = doc.body,
        hamburgerMenu = doc.getElementById('hamburger-menu'),
        fullMenu = doc.getElementById('full__menu'),
        closeFullMenu = doc.getElementById('full__menu-close'),
        content = doc.getElementById('maincontent');

//one page scroll

    //begin and not ready
    const addOnWheel = (elem, handler) => {
        if (elem.addEventListener) {
            if ('onwheel' in doc) {
                // IE9+, FF17+
                elem.addEventListener("wheel", handler);
            } else if ('onmousewheel' in doc) {
                // устаревший вариант события
                elem.addEventListener("mousewheel", handler);
            } else {
                // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
                elem.addEventListener("MozMousePixelScroll", handler);
            }
        }
    }

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

    //slider

    //vertical accordion

    // horisontal accordion

    //modal window
});