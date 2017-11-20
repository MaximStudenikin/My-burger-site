$(document).ready(() => {

    //var

    let doc = document,
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

        addOnWheel(fullMenu, event => {
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
                    'height': 0
                })
            }

        })
    });

    // horisontal accordion

    const calcWidth = () => {
        const wWidth = $(window).width();
        const titles = $('.menu__trigger');
        const titleWidth = titles.width();
        const reqWidth = wWidth - (titleWidth * titles.length);

        return (reqWidth > 550) ? 550 : reqWidth
    }

    const openItem = item => {
        const container = $('.menu__acco'),
            items = $('.menu__item', container),
            accoText = $('.menu__content-text', container),
            activeItem = items.filter('.menu__item--activ'),
            activeContent = activeItem.find('.menu__acco-content'),
            content = item.find('.menu__acco-content'),
            reqWidth = calcWidth();


        items.removeClass('.menu__item--activ');
        item.addClass('.menu__item--activ');

        accoText.hide();
        activeContent.animate({'width': '0px'});

        content.animate({
            'width': reqWidth + 'px'
        }, () => {
            accoText.fadeIn()
        })
    }

    const closeItem = item => {
        item.removeClass('.menu__item--activ');

        item.closest('.menu__acco').find('.menu__content-text')
            .stop(true, true).fadeOut(() => {
            item.find('.menu__acco-content').animate({'width': '0px'});
        });
    }

    $('.menu__trigger').on('click', (e) => {
        e.preventDefault();

        const $this = $(e.currentTarget),
            item = $this.closest('.menu__item--activ');

        item.hasClass('.menu__item--activ')
            ? closeItem(item)
            : openItem(item)


    });

    // клик вне аккордеона
    $(document).on('click', e => {
        const $this = $(e.currentTarget);

        if (!$this.closest('.menu__acco').length) {
            closeItem($('.menu__item'))
        }
    });

    //modal window

    $('.btn-reviews').on('click', e => {
        e.preventDefault();
        const content = $('.reviews__text'),
            item = content.find('.btn');
        content.addClass('.reviews__text-open');
        $.fancybox.open(content, {
            arrows : false,
            infobar: false
        });

        // if (content.open(){
        //     item.removeClass('.btn')
        // } else {
        //     item.show()
        // }

    });

        //onePageScroll

});