( () => {

    const doc = document,
        hamburgerMenu = doc.getElementById('hamburger-menu'),
        fullMenu = doc.getElementById('full__menu'),
        closeFullMenu = doc.getElementById('full__menu-close'),
        content = doc.getElementsByClassName('section__heading');

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

    // let scale = 1;
    //
    // addOnWheel (gggf, function(e) {
    //
    //     var delta = e.deltaY || e.detail || e.wheelDelta;
    //
    //     // отмасштабируем при помощи CSS
    //     if (delta > 0) scale += 0.05;
    //     else scale -= 0.05;
    //
    //     gggf.style.transform = gggf.style.WebkitTransform = gggf.style.MsTransform = 'scale(' + scale + ')';
    //
    //     // отменим прокрутку
    //     e.preventDefault();
    // });

    //hamburger menu

    hamburgerMenu.addEventListener('click', () => {
        fullMenu.classList.toggle('visuallyhidden');
    });

    closeFullMenu.addEventListener('click', () => {
        fullMenu.classList.toggle('visuallyhidden');
    });

})();