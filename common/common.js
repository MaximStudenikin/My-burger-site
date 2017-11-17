$( document ).ready( () => {
    let doc = document,
        body = doc.body,
        hamburgerMenu = doc.getElementById('hamburger-menu'),
        fullMenu = doc.getElementById('full__menu'),
        closeFullMenu = doc.getElementById('full__menu-close'),
        content = doc.getElementById('maincontent');

//one page scroll
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
//
// let section = doc.getElementsByTagName('section');
//
// content.style.transform = 'translateY(0)';
//
//
//
// addOnWheel (section, event => {
//
//
//
//
//     let translateY = 0,
//         delta = event.deltaY || event.detail || event.wheelDelta;
//
//     if(delta > 0){
//         translateY -= 100;
//     } else {
//         translateY += 100;
//     }
//     // content.style.transform = content.style.WebkitTransform = content.style.MsTransform = 'translateY(' + translateY + '%' + ')';
//     content.style.transform = 'translateY(' + translateY + '%' + ')';
//
// });

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
});