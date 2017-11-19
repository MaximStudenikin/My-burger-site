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

    $(function () {
        $('.accordeon__trigger').on('click', event => {
            event.preventDefault();

            const $this = $(event.currentTarget);
            const container = $this.closest('.vertical__accordeon');
            const item = $this.closest('.accordeon__item');
            const items = $('.accordeon__item', container);
            const content = $('.accordeon__inner', item);
            const otherContent = $('.accordeon__inner', container);
            const textBlock = $('.team__description p', item);
            const reqHeight = textBlock.outerHeight();

            if (!item.hasClass('accordeon__item--activ')) {
                items.removeClass('accordeon__item--activ')
                item.addClass('accordeon__item--activ')

                otherContent.css({
                    'height': 0
                })

                content.css({
                    'height': reqHeight
                })

            } else {

                item.removeClass('accordeon__item--activ');
                content.css({
                    'height' : 0
                })
            }

        })
    });

    // horisontal accordion

    const calcWidth = () => {
        const wWidth = $(window).width();
        const titles = $('.accordeon__trigger-title');
        const titleWidth = titles.width();
        const reqWidth = wWidth - (titleWidth * titles.length);
        console.log(titles.length);

        return (reqWidth > 550) ? 550 : reqWidth
    }

    const openItem = item => {
        const container = $('.horizontal__accordeon')
        const items = $('.accordeon__item', container)
        const accoText = $('.accordeon__inner-item p', container)
        const activeItem = items.filter('.accordeon__item--activ')
        const activeContent = activeItem.find('.accordeon__inner-item')
        const content = item.find('.accordeon__inner-item')
        const reqWidth = calculateWidth()

        items.removeClass('.accordeon__item--activ');
        item.addClass('.accordeon__item--activ');

        accoText.hide();
        activeContent.animate({ 'width': '0px' });
        console.log(reqWidth);

        content.animate({
            'width': reqWidth + 'px'
        }, () => { accoText.fadeIn() })
    }

    //modal window
});