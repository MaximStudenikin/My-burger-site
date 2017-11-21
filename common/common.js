$(document).ready(() => {

    //var

    // let doc = document,
    //     hamburgerMenu = doc.getElementById('hamburger-menu'),
    //     fullMenu = doc.getElementById('full__menu'),
    //     closeFullMenu = doc.getElementById('full__menu-close'),
    //     content = doc.getElementById('maincontent');

// //one page scroll
//
//     //begin and not ready
//     const addOnWheel = (elem, handler) => {
//         if (elem.addEventListener) {
//             if ('onwheel' in doc) {
//                 // IE9+, FF17+
//                 elem.addEventListener("wheel", handler);
//             } else if ('onmousewheel' in doc) {
//                 // устаревший вариант события
//                 elem.addEventListener("mousewheel", handler);
//             } else {
//                 // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
//                 elem.addEventListener("MozMousePixelScroll", handler);
//             }
//         }
//     }

//hamburger menu

    // hamburgerMenu.addEventListener('click', () => {
    //     fullMenu.classList.toggle('visuallyhidden');
    //
    //     addOnWheel(fullMenu, event => {
    //         let delta = event.deltaY || event.detail || event.wheelDelta;
    //
    //         event.preventDefault();
    //     });
    // });
    // closeFullMenu.addEventListener('click', () => {
    //     fullMenu.classList.toggle('visuallyhidden');
    // });

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
        console.log(titles);
        const titleWidth = titles.width();
        const reqWidth = wWidth - (titleWidth * titles.length);
        return (reqWidth > 550) ? 550 : reqWidth;
    };


    const openItem = item => {
        const container = $('.menu-acco');
        const items = $('.menu__item', container);
        const accoText = $('.menu__acco-content', container);
        const activeItem = items.filter('active');
        const activeContent = activeItem.find('.menu__acco-content');
        const content = item.find('.menu__acco-content');
        const reqWidth = calcWidth();

        items.removeClass('active');
        item.addClass('active');

        accoText.hide();
        activeContent.animate({ 'width': '0px' });
        console.log(reqWidth);

        content.animate({
            'width': reqWidth + 'px'
        }, () => { accoText.fadeIn() })
    }




//     const openItem = item => {
//         //     const container = $('.menu-acco');
//         const cont = $('.menu__acco');
//         //     const items = $('.menu__item', container);
//            const elems = $('.menu__item', cont);
//         //     const accoText = $('.menu__acco-content', container);
//            const elemText = $('.menu__acco-content', cont);
//         //     const activeItem = items.filter('active');
//            const activeElem = elems.filter('active');
//            //     const activeContent = activeItem.find('.menu__acco-content');
//            const activeCont = activeElem.find('.menu__acco-content');
//         //     const content = item.find('.menu__acco-content');
//            const elemCont = item.find('.menu__acco-content');
//         //     const reqWidth = calcWidth();
//            const reqWidth = calcWidth();
//
//         //     items.removeClass('active');
//         elems.removeClass('active');
//         //     item.addClass('active');
//         item.addClass('active');
//
//
//         //     accoText.hide();
//         elemText.hide();
//         //     activeContent.animate({ 'width': '0px' });
//         activeCont.animate({ 'width': '0px' });
//
//         //     content.animate({
//         elemCont.animate({
//  //         'width': reqWidth + 'px'
//             'width': reqWidth + 'px'
// //     }, () => { accoText.fadeIn() })
//         }, () => { elemText.fedeIn() })
//     }

    const closeItem = item => {
        item.removeClass('active');

        item.closest('.menu-acco').find('.menu__acco-content')
            .stop(true, true).fadeOut(() => {
            item.find('.menu-acco__content').animate({ 'width': '0px' });
        });
    }

    $('.menu__trigger').on('click', (e) => {
        e.preventDefault();

        const $this = $(e.target)
        const item = $this.closest('.menu__item')

        item.hasClass('active')
            ? closeItem(item)
            : openItem(item)


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

    });

        //onePageScroll

});