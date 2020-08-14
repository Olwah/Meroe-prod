/*
import { elements, elementStrings } from './views/base';
import { SpotlightItem, spotlightItems } from './models/Spotlight';
import * as headerView from './views/headerView';
import * as spotlightView from './views/spotlightView';
import { slideshowItems } from './models/Slideshow';
*/

// TESTING

/**** DOMSTRING VARIABLES ****/
const elements = {
    container: document.querySelector('.container'),
    navMenu: document.querySelector('.nav-menu'),
    navMenuInital: document.querySelector('.nav-menu__initial'),
    navMenuOpenArrow: document.querySelector('.nav-menu__open-arrow'),
    navMenuArrowList: document.querySelector('.nav-menu__arrow-list'),
    navClose: document.querySelector('.nav-menu__close'),
    navContent: document.querySelector('.nav-menu__content'),
    header: document.querySelector('.header'),
    headerWrapper: document.querySelector('.header__wrapper'),
    headerTitle: document.querySelector('.header__title'),
    headerSlidesContainer: document.querySelector('.header__slideshow-container'),
    headerSlides: document.querySelector('.header__slideshow-slides'),
    headerSlideshowDots: document.querySelector('.header__slideshow-dots'),
    spotlightPieces: document.querySelector('.spotlight__pieces'),
    spotlightPiece: document.querySelector('.spotlight__piece'),
};

const elementStrings = {
    navMenuListItem: 'nav-menu__list-item',
    headerSlides: 'header__slideshow-slides',
    headerDot: 'header__slideshow-dot',
    spotlightPiece: 'spotlight__piece',
    spotlightZoom: 'spotlight__zoom',
    spotlightImg: 'spotlight__img',
    spotlightTitle: 'spotlight__title',
    spotlightDesc: 'spotlight__description',
    galleryItem: 'gallery__item',
    galleryZoom: 'gallery__zoom',
};

/**** CONTENT OBJECTS ****/
const spotlightItems = {
    0: {
        id: 'spotlight-1',
        img: 'img/Frontpage1.jpg',
        title: 'Spotlight Piece 1',
        description: 'Spotlight Piece 1',
    },
    1: {
        id: 'spotlight-2',
        img: 'img/Frontpage2.jpg',
        title: 'Spotlight Piece 2',
        description: 'Spotlight Piece 2',
    },
    2: {
        id: 'spotlight-3',
        img: 'img/Frontpage3.jpg',
        title: 'Spotlight Piece 3',
        description: 'Spotlight Piece 3',
    },
    3: {
        id: 'spotlight-4',
        img: 'img/Frontpage4.jpg',
        title: 'Spotlight Piece 4',
        description: 'Spotlight Piece 4',
    },
    4: {
        id: 'spotlight-5',
        img: 'img/Frontpage5.jpg',
        title: 'Spotlight Piece 5',
        description: 'Spotlight Piece 5',
    },
    5: {
        id: 'spotlight-6',
        img: 'img/Frontpage6.jpg',
        title: 'Spotlight Piece 6',
        description: 'Spotlight Piece 6',
    },
    6: {
        id: 'spotlight-7',
        img: 'img/Nouveau_web.jpg',
        title: 'Spotlight Piece 7',
        description: 'Spotlight Piece 7',
    },
    7: {
        id: 'spotlight-8',
        img: 'img/vacancysubmissionweb.jpg',
        title: 'Spotlight Piece 8',
        description: 'Spotlight Piece 8',
    },
    8: {
        id: 'spotlight-9',
        img: 'img/WillGraham.jpg',
        title: 'Spotlight Piece 9',
        description: 'Spotlight Piece 9',
    },
};

const galleryItems = {
    0: {
        id: '1',
        img: 'img/7_Postcard_Front.jpg',
        title: 'Charity Piece 1',
        description: 'Charity Piece 1',
    },
    1: {
        id: '2',
        img: 'img/9_Postcard_Front.jpg',
        title: 'Charity Piece 2',
        description: 'Charity Piece 2',
    },
    2: {
        id: '3',
        img: 'img/11_Postcard_Front.jpg',
        title: 'Charity Piece 3',
        description: 'Charity Piece 3',
    },
    3: {
        id: '4',
        img: 'img/16_Postcard_Front.jpg',
        title: 'Charity Piece 4',
        description: 'Charity Piece 4',
    },
    4: {
        id: '5',
        img: 'img/2020_1.jpg',
        title: 'Charity Piece 5',
        description: 'Charity Piece 5',
    },
    5: {
        id: '6',
        img: 'img/2020_7.jpg',
        title: 'Charity Piece 6',
        description: 'Charity Piece 6',
    },
    6: {
        id: '7',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 7',
        description: 'Charity Piece 7',
    },
    7: {
        id: '8',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 8',
        description: 'Charity Piece 8',
    },
    8: {
        id: '9',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 9',
        description: 'Charity Piece 9',
    },
    9: {
        id: '10',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 10',
        description: 'Charity Piece 10',
    },
    10: {
        id: '11',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 11',
        description: 'Charity Piece 11',
    },
    11: {
        id: '12',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 12',
        description: 'Charity Piece 12',
    },
    12: {
        id: '13',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 13',
        description: 'Charity Piece 13',
    },
    13: {
        id: '14',
        img: 'img/Nouveau_web.jpg',
        title: 'Charity Piece 14',
        description: 'Charity Piece 14',
    },
};

const sketchbookItems = {
    1: {
        imageLeft: 'img/Frontpage1.jpg',
        titleLeft: 'Sketchbook Page 1',
        imageRight: 'img/Frontpage2.jpg',
        titleRight: 'Sketchbook Page 2',
    },
    2: {
        imageLeft: 'img/Frontpage3.jpg',
        titleLeft: 'Sketchbook Page 3',
        imageRight: 'img/Frontpage4.jpg',
        titleRight: 'Sketchbook Page 4',
    },
    3: {
        imageLeft: 'img/Frontpage5.jpg',
        titleLeft: 'Sketchbook Page 5',
        imageRight: 'img/Frontpage6.jpg',
        titleRight: 'Sketchbook Page 6',
    },
    4: {
        imageLeft: 'img/Frontpage7.jpg',
        titleLeft: 'Sketchbook Page 7',
        imageRight: 'img/Nouveau_web.jpg',
        titleRight: 'Sketchbook Page 8',
    },
};

/** NAVIGATION MENU **/
const toggleNav = () => {
    if (
        !elements.navMenuOpenArrow.classList.contains('animate-nav-arrow') &&
        !elements.navMenuOpenArrow.classList.contains('animate-nav-arrow-reverse')
    ) {
        openNav();
    } else if (elements.navMenuOpenArrow.classList.contains('animate-nav-arrow')) {
        closeNav();
    } else if (elements.navMenuOpenArrow.classList.contains('animate-nav-arrow-reverse')) {
        openNav();
    }
};

const openNav = () => {
    // Open nav arrow animation
    if (elements.navMenuOpenArrow.classList.contains('animate-nav-arrow')) {
        elements.navMenuOpenArrow.classList.remove('animate-nav-arrow');
        elements.navMenuOpenArrow.classList.add('animate-nav-arrow-reverse');
    } else {
        elements.navMenuOpenArrow.classList.remove('animate-nav-arrow-reverse');
        elements.navMenuOpenArrow.classList.add('animate-nav-arrow');
    }

    [elements.headerTitle, elements.navMenu, elements.navContent].forEach((el) => el.classList.add('active'));

    setTimeout(() => {
        elements.header.classList.remove('scroll-up');
        elements.header.classList.remove('scroll-down');
    }, 550);

    if (!elements.header.classList.contains('scroll-down')) {
        setTimeout(() => elements.navMenuOpenArrow.classList.remove('scroll-down'), 700);
    }
    setTimeout(animateNavList, 300);
};

const closeNav = () => {
    animateNavList();
    setTimeout(() => {
        elements.navMenuOpenArrow.classList.remove('animate-nav-arrow');
        elements.navMenuOpenArrow.classList.add('animate-nav-arrow-reverse');
        setTimeout(() => elements.navMenuOpenArrow.classList.remove('scroll-down'), 700);
        [elements.headerTitle, elements.navMenu, elements.navContent].forEach((el) => el.classList.remove('active'));
    }, 300);
};

const animateNavList = () => {
    const navList = document.querySelectorAll(`.${elementStrings.navMenuListItem}`);
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.toggle('active');
    }
};

// Nav-menu event listeners
document.getElementById('menu-open').addEventListener('click', toggleNav);
elements.navMenuInital.addEventListener('click', toggleNav);
document.getElementById('menu-close').addEventListener('click', closeNav);

// Set all anchor links to scroll smoothly
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/

// Close nav-menu after anchor clicked
document.querySelectorAll(`li.${elementStrings.navMenuListItem} a`).forEach((el) => {
    el.addEventListener('click', closeNav);
});

/**** HEADER ****/
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 40) {
        elements.header.classList.remove(scrollUp);
        return;
    }

    const focus = document.getElementById('focus');
    if (elements.navMenu.classList.contains('active')) {
        elements.header.classList.remove(scrollDown);
        elements.header.classList.remove(scrollUp);
        return;
    } else if (focus) {
        elements.header.classList.remove(scrollUp);
        elements.header.classList.add(scrollDown);
        return;
    }

    if (currentScroll > lastScroll && !elements.header.classList.contains(scrollDown)) {
        // down
        elements.header.classList.remove(scrollUp);
        elements.header.classList.add(scrollDown);
        elements.navMenuOpenArrow.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && elements.header.classList.contains(scrollDown)) {
        // up
        elements.header.classList.remove(scrollDown);
        elements.header.classList.add(scrollUp);
        elements.navMenuOpenArrow.classList.remove(scrollDown);
    }
    lastScroll = currentScroll;
});

/**** SPOTLIGHT ****/
const renderSpotlightItems = (item) => {
    // Use 'keys' function to calculate length of an object
    const spotlightItemsLength = Object.keys(spotlightItems).length;
    for (let i = 0; i < spotlightItemsLength; i++) {
        createSpotlightHtml(item[i].id, item[i].img, item[i].title, item[i].description);
    }
};

const createSpotlightHtml = (id, img, title, description) => {
    const markup = `
    <div class="spotlight__piece" id="${id}">
        <img src="${img}" class="spotlight__img" alt="${title}">
        <div class="spotlight__piece-info">
            <h2 class="spotlight__title heading-4">${title}</h2>
            <p class="spotlight__description">${description}</p>
            <svg class="spotlight__zoom">
                <use xlink:href="img/sprite.svg#icon-plus"></use>
            </svg>
        </div>
    </div>
    `;
    elements.spotlightPieces.insertAdjacentHTML('beforeend', markup);
};

/**** FOCUS ITEM ****/
/*
const openFocus = (e) => {
    if (e.target.matches(`.${elementStrings.spotlightZoom}, .${elementStrings.spotlightZoom} *`)) {
        // Get clicked item's img source and convert to relative path
        const imgSrcArr = e.target.closest(`.${elementStrings.spotlightPiece}`).firstElementChild.src.split('/');
        const imgSrcRelative = `img/${imgSrcArr[imgSrcArr.length - 1]}`;

        // Get clicked item's information
        const pieceTitle = e.target.closest('svg').parentElement.firstElementChild.textContent;
        const pieceDesc = e.target.closest('svg').parentElement.firstElementChild.nextElementSibling.textContent;

        // Create HTML and insert into the DOM
        createFocusHtml(imgSrcRelative, pieceTitle, pieceDesc);

        // Add second class to 'focus' element to enable transition
        const focus = document.getElementById('focus');
        const container = document.getElementById('container');
        requestAnimationFrame(() => {
            focus.classList.add('appear');
            container.classList.add('focus-active');
        });

        // Add event listener to be able to close 'focus'
        const focusClose = document.getElementById('focus-close');
        focusClose.addEventListener('click', closeFocus);
    }
};
*/
const openFocus = (e) => {
    // SPOTLIGHT ITEMS
    if (e.target.matches(`.${elementStrings.spotlightZoom}, .${elementStrings.spotlightZoom} *`)) {
        // Get clicked item's img source and convert to relative path
        const imgSrcArr = e.target.closest(`.${elementStrings.spotlightPiece}`).firstElementChild.src.split('/');
        const imgSrcRelative = `img/${imgSrcArr[imgSrcArr.length - 1]}`;

        // Get clicked item's information from DOM
        const pieceTitle = e.target.closest('svg').parentElement.firstElementChild.textContent;
        const pieceDesc = e.target.closest('svg').parentElement.firstElementChild.nextElementSibling.textContent;

        // Create HTML and insert into the DOM
        createFocusHtml(imgSrcRelative, pieceTitle, pieceDesc);

    // CHARITY ITEMS
    } else if (e.target.matches(`.${elementStrings.galleryZoom}, .${elementStrings.galleryZoom} *`)) {
        // Get clicked item's img source and convert to relative path
        const imgSrcArr = e.target.closest(`.${elementStrings.galleryItem}`).firstElementChild.src.split('/');
        const imgSrcRelative = `img/${imgSrcArr[imgSrcArr.length - 1]}`;

        // Get clicked item's information from galleryItems object
        const pieceID = e.target.closest('figure').classList[1].split('--')[1];
        const { title, description } = galleryItems[pieceID - 1];

        // Create HTML and insert into the DOM
        createFocusHtml(imgSrcRelative, title, description);
    }

    // Add second class to 'focus' element to enable transition
    const focus = document.getElementById('focus');
    const container = document.getElementById('container');
    requestAnimationFrame(() => {
        focus.classList.add('appear');
        container.classList.add('focus-active');
    });

    // Add event listener to be able to close 'focus'
    const focusClose = document.getElementById('focus-close');
    focusClose.addEventListener('click', closeFocus);
};

const closeFocus = () => {
    // Select the 'focus' element
    const focus = document.getElementById('focus');

    // Remove 'focus' from DOM
    focus.classList.remove('appear');
    setTimeout(() => {
        focus.remove();
    }, 1000);

    // Remove 'focus-active' class from 'container
    const container = document.getElementById('container');
    container.classList.remove('focus-active');
};

const createFocusHtml = (img, title, desc) => {
    const markup = `
    <div class="focus" id="focus">
        <div class="focus__close">
            <img src="img/close.png" class="focus__close-icon" id="focus-close" alt="Close">
        </div>
        <div class="focus__img-wrapper">
            <img src="${img}" class="focus__img" alt="${title}">
        </div>
        <div class="focus__piece-info">
            <h2 class="focus__title heading-3">${title}</h2>
            <p class="focus__description">${desc}</p>
            <h3 class="focus__logo">Meroë</h3>
        </div>
    </div>
    `;
    document.getElementById('container').insertAdjacentHTML('beforebegin', markup);
};

// Create Spotlight items on load
renderSpotlightItems(spotlightItems);

/**** TESTING ****/
/*
function noBoxShadow() {
    for (let i = 0; i < 3; i++) {
        const spots = document.querySelectorAll('.spotlight__piece');
        spots[i].style.boxShadow = 'none';
    }
}
noBoxShadow();
*/

// Assign event listeners to all spotlight elements
const spotlightElements = document.querySelectorAll(`.${elementStrings.spotlightPiece}`);
spotlightElements.forEach((el) => {
    el.addEventListener('click', openFocus);
});

/**** CHARITY SECTION ****/
const renderGalleryItems = (item) => {
    const galleryItemsLength = Object.keys(galleryItems).length;
    for (let i = 0; i < galleryItemsLength; i++) {
        createGalleryHtml(item[i].id, item[i].img, item[i].title);
    }
};

const createGalleryHtml = (id, img, title) => {
    const markup = `
    <figure class="gallery__item gallery__item--${id}">
        <img src="${img}" alt="${title}" class="gallery__img">
        <svg class="gallery__zoom">
            <use xlink:href="img/sprite.svg#icon-plus"></use>
        </svg>
    </figure>
    `;
    document.querySelector('.gallery__items').insertAdjacentHTML('beforeend', markup);
};

// Create Gallery items on load
renderGalleryItems(galleryItems);

// Add event listeners to all gallery items
const galleryZooms = document.querySelectorAll('.gallery__zoom');
galleryZooms.forEach((el) => {
    el.addEventListener('click', openFocus);
});

/**** SKETCHBOOK ****/

const renderSketchbookItems = (item) => {
    const sketchbookItemsLength = Object.keys(sketchbookItems).length;
    for (let i = 1; i <= sketchbookItemsLength; i++) {
        createSketchbookHtml(item[i].imageLeft, item[i].imageRight, item[i].titleLeft, item[i].titleRight);
    }
    addJsClass();
};

// Add active class to first Sketchbook carousel item only
const addJsClass = () => {
    const spinnerFace = document.querySelector('.spinner--left').firstElementChild;
    spinnerFace.classList.add('js-active');
};

const createSketchbookHtml = (imgLeft, imgRight, titleLeft, titleRight) => {
    const markup = `
    <div class="spinner__face">
        <div class="content">
            <div class="content__left">
                <img src="${imgLeft}" alt="${titleLeft}" />
            </div>
            <div class="content__right">
                <img src="${imgRight}" alt="${titleRight}" />
            </div>
        </div>
    </div>
    `;
    document.querySelector('.spinner--left').insertAdjacentHTML('beforeend', markup);
};

/*
const preloadSketchbookImages = (imgLeft, imgRight) => {
    const markup = `
    <img src="${imgLeft}"/>
    <img src="${imgRight}"/>
    `;
    document.querySelector('.sketchbook__loader').insertAdjacentHTML('beforeend', markup);
};
*/

let activeIndex = 0;
let limit = 0;
let disabled = false;
let $stage;
let $controls;
let canvas = false;

const SPIN_FORWARD_CLASS = 'js-spin-fwd';
const SPIN_BACKWARD_CLASS = 'js-spin-bwd';
const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled';
const SPIN_DUR = 1000;

const appendControls = () => {
    for (let i = 0; i < limit; i++) {
        $('.carousel__control').append(`<a href="#" data-index="${i}"></a>`);
    }
    let height = $('.carousel__control').children().last().outerHeight();

    $('.carousel__control').css('height', 30 + limit * height);
    $controls = $('.carousel__control').children();
    $controls.eq(activeIndex).addClass('active');
};

const setIndexes = () => {
    $('.spinner')
        .children()
        .each((i, el) => {
            $(el).attr('data-index', i);
            limit++;
        });
};

const duplicateSpinner = () => {
    const $el = $('.spinner').parent();
    const html = $('.spinner').parent().html();
    $el.append(html);
    $('.spinner').last().addClass('spinner--right');
    $('.spinner--right').removeClass('spinner--left');
};

const paintFaces = () => {
    $('.spinner__face').each((i, el) => {
        const $el = $(el);
        let color = $(el).attr('data-bg');
        $el.children().css('backgroundImage', `url(${getBase64PixelByColor(color)})`);
    });
};

const getBase64PixelByColor = (hex) => {
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.height = 1;
        canvas.width = 1;
    }
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = hex;
        ctx.fillRect(0, 0, 1, 1);
        return canvas.toDataURL();
    }
    return false;
};

const prepareDom = () => {
    setIndexes();
    paintFaces();
    duplicateSpinner();
    appendControls();
};

const spin = (inc = 1) => {
    if (disabled) return;
    if (!inc) return;
    activeIndex += inc;
    disabled = true;

    if (activeIndex >= limit) {
        activeIndex = 0;
    }

    if (activeIndex < 0) {
        activeIndex = limit - 1;
    }

    const $activeEls = $('.spinner__face.js-active');
    const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`);
    $nextEls.addClass('js-next');

    if (inc > 0) {
        $stage.addClass(SPIN_FORWARD_CLASS);
    } else {
        $stage.addClass(SPIN_BACKWARD_CLASS);
    }

    $controls.removeClass('active');
    $controls.eq(activeIndex).addClass('active');

    setTimeout(
        () => {
            spinCallback(inc);
        },
        SPIN_DUR,
        inc
    );
};

const spinCallback = (inc) => {
    $('.js-active').removeClass('js-active');
    $('.js-next').removeClass('js-next').addClass('js-active');
    $stage.addClass(DISABLE_TRANSITIONS_CLASS).removeClass(SPIN_FORWARD_CLASS).removeClass(SPIN_BACKWARD_CLASS);

    $('.js-active').each((i, el) => {
        const $el = $(el);
        $el.prependTo($el.parent());
    });
    setTimeout(() => {
        $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
        disabled = false;
    }, 100);
};

const attachListeners = () => {
    document.onkeyup = (e) => {
        switch (e.keyCode) {
            case 38:
                spin(-1);
                break;
            case 40:
                spin(1);
                break;
        }
    };

    $controls.on('click', (e) => {
        e.preventDefault();
        if (disabled) return;
        const $el = $(e.target);
        const toIndex = parseInt($el.attr('data-index'), 10);
        spin(toIndex - activeIndex);
    });
};

const assignEls = () => {
    $stage = $('.carousel__stage');
};

const init = () => {
    assignEls();
    prepareDom();
    attachListeners();
};

$(() => {
    init();
});

// Create Sketchbook items on load
renderSketchbookItems(sketchbookItems);

// TESTING
window.sketchbookItems = sketchbookItems;

/**** UPDATE FORM ****/
/** SLIDESHOW **/
/*
const slideshowImg = document.getElementById('slideshow-img');
slideshowImg.addEventListener('change', getSlides);

function getSlides() {
    if (slideshowImg.options[slideshowImg.selectedIndex].value === "0") {
        document.querySelector('.update__slideshow-info').classList.remove('active');
    } else {
        document.querySelector('.update__slideshow-info').classList.add('active');
    };
};

const whatTask = document.getElementById('whatTask');
whatTask.addEventListener('change', getTask);

function getTask() {
    if (whatTask.options[whatTask.selectedIndex].value === "0") {
        document.querySelector('.update__slideshow-info').classList.remove('active');
        document.querySelector('.update__edit-slide').classList.add('active');

        document.getElementById('update__new-btn').classList.remove('active');
        document.getElementById('update__edit-btn').classList.add('active');

    } else if (whatTask.options[whatTask.selectedIndex].value === "1") {
        document.querySelector('.update__edit-slide').classList.remove('active');
        document.querySelector('.update__slideshow-info').classList.add('active');

        document.getElementById('update__edit-btn').classList.remove('active');
        document.getElementById('update__new-btn').classList.add('active');
    };
};


const updateSlide = () => {
    if (slideshowImg.options[slideshowImg.selectedIndex].value !== "0") {
        // Determine which slide is selected
        const slideIndex = parseInt(slideshowImg.options[slideshowImg.selectedIndex].value);
        
        // Grab the values from inputs
        const imgPath = 'img/';
        const imgValue = document.getElementById('imgSrc').value;
        const imgSrc = imgPath.concat(imgValue);
        const imgTitle = document.getElementById('imgTitle').value;
        //const imgFile = document.getElementById('imgFile');
        
        // Update values in slideshowItems object
        slideshowItems[slideIndex - 1].img = imgSrc;
        slideshowItems[slideIndex - 1].title = imgTitle;
    }
    return imgSrc, imgTitle;
};

const slideshowItemsLength = Object.keys(slideshowItems).length;

const newSlide = () => {
    // Grab the values from inputs
    const imgPath = 'img/';
    const imgValue = document.getElementById('imgSrc').value;
    const imgSrc = imgPath.concat(imgValue);
    const imgTitle = document.getElementById('imgTitle').value;
    //const imgFile = document.getElementById('imgFile');

    // Add values to the slideshowItems object
    const addKey = {
        // Square brackets use the computed value for an object key e.g "3"
        [slideshowItemsLength]: {
            img: imgSrc,
            title: imgTitle
        }
    };
    const updateSlideshowItems = Object.assign({}, slideshowItems, addKey);
    
    return updateSlideshowItems;
};

// Need to add this to the render slideshow items function if you end up merging everything into a single js file
const createSlideOption = () => {
    const markup = `<option value="${slideshowItemsLength}">Slide ${slideshowItemsLength}</option>`;
    document.getElementById('slideshow-img').insertAdjacentHTML('beforeend', markup);
};

// Event listener for update slideshow button
const slideshowUpdate = document.getElementById('update__edit-btn');
slideshowUpdate.addEventListener('click', updateSlide);

// Event listener for add new slide button
const addSlide = document.getElementById('update__new-btn');
addSlide.addEventListener('click', newSlide);
*/
