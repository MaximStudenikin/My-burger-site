$(document).ready(() => {

    //let

    let doc = document,
        hamburgerMenu = doc.getElementById('hamburger-menu'),
        fullMenu = doc.getElementById('full__menu'),
        closeFullMenu = doc.getElementById('full__menu-close');


// hamburger menu
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

    //composition

    $('.composition__icon-btn').hover(event => {

        const $this = $(event.target),
            container = $this.closest('.composition'),
            item = container.find('.composition__list ');

        if (item.hasClass('visuallyhidden')) {
            item.removeClass('visuallyhidden');
        } else {
            item.addClass('visuallyhidden');
        }

    });


    const moveSlide = (cont, slideNum) => {

        const items = cont.find('.slaider__item'),
            activeSlide = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = cont.find('.slaider__list'),
            dur = 500;

        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, dur, () => {
                activeSlide.removeClass('active');
                reqItem.addClass('active');
            });
        }

    };

    $('.slider__controls_btn').on('click', event => {
        event.preventDefault();

        const $this = $(event.currentTarget),
            cont = $this.closest('.slaider__teg'),
            items = $('.slaider__item', cont),
            activeItem = items.filter('.active');
        let existedItem,
            edgeItem,
            reqItem;

        if ($this.hasClass('slider__controls_next')) {
            existedItem = activeItem.next();
            edgeItem = items.first();
        }

        if ($this.hasClass('slider__controls_prev')) {
            existedItem = activeItem.prev();
            edgeItem = items.last();
        }

        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSlide(cont, reqItem);

    });


//vertical accordion

    $('.accordeon__trigger').on('click', event => {
        event.preventDefault();

        const $this = $(event.currentTarget);
        const container = $this.closest('.vertical__accordeon');
        const item = $this.closest('.accordeon__item');
        const items = $('.accordeon__item', container);
        const content = $('.accordeon__content', item);
        const otherContent = $('.accordeon__content', container);
        const block = $('.accordeon__content_inner', item);
        const reqHeight = block.outerHeight();

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

// horisontal accordion

    const calcWidth = () => {
        const wWidth = $(window).width();
        const titles = $('.menu__trigger');
        const titleWidth = titles.width();
        const reqWidth = wWidth - (titleWidth * titles.length);

        return (reqWidth > 550) ? 550 : reqWidth
    };

    const openItem = (item) => {
        const container = $('.menu__acco');
        const items = $('.menu__item', container);
        const activeItem = items.filter('.active');
        const activeContent = activeItem.find('.menu__acco-content');
        const content = item.find('.menu__acco-content');
        const accoText = $('.menu__content-text', container);
        const reqWidthItem = calcWidth();

        items.removeClass('active')
        item.addClass('active')

        accoText.hide()
        activeContent.animate({'width': '0px'})

        content.animate({
            'width': reqWidthItem + 'px'
        }, () => { accoText.fadeIn() })

    };

    const closeItem = (item) => {
        item.removeClass('active');

        item.closest('.menu__acco').find('.menu__content-text')
            .stop(true, true).fadeOut(() => {
            item.find('.menu__acco-content').animate({'width': '0px'});
        });
    };

    $('.menu__trigger').on('click', (event) => {
        event.preventDefault();

        let $this = $(event.target);
        let item = $this.closest('.menu__item');

        item.hasClass('active')
            ? closeItem(item)
            : openItem(item)
    })

// клик вне аккордеона
    $(document).on('click', (event) => {
        const $this = $(event.currentTarget);

        if (!$this.closest('.menu__acco').length) {
            closeItem($('.menu__item'))
        }
    });

//modal window

    $('.btn-reviews').on('click', event => {
        event.preventDefault();

        const $this = $(event.currentTarget);
        const container = $this.closest('.reviews__list');
        const item = $this.closest('.reviews__item');
        const items = $('.reviews__item', container);
        const content = $('.reviews__modal', item);


        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');
        } else {
            item.removeClass('active');
        }

        $.fancybox.open(content, {
            arrows: false,
            infobar: false,
        });

    });

    //onePageScroll

    onePageScroll("#maincontent", () => {
        sectionContainer: "section"
        keyboard: true
    });


    // mail

    let submitForm = function (ev) {
        ev.preventDefault();

        let form = $(ev.target);

        let request = ajaxForm(form);

        request.done(function(msg) {
            let mes = msg.mes,
                status = msg.status;
            if (status === 'OK') {
                $.fancybox.open({
                    src: '<div class="success">' + mes + '</div>',
                    type : 'html'
                });
            } else{
                $.fancybox.open({
                    src: '<div class="error">' + mes + '</div>',
                    type : 'html'
                });
            }
        });

        request.fail(function(jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
            $.fancybox.open({
                src: '<div class="error">О_О все пошло не так</div>',
                type : 'html'
            });
        });

        request.always(()=>{
            doc.getElementById("order_form").reset();
        });
    }

    let ajaxForm = function (form) {

        let url = form.attr('action'),
            data = form.serialize();

        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'JSON'
        });

    }

    $('#order_form').on('submit', submitForm);

});