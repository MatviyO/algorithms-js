const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const loadMapBlock = document.querySelector('.load-map');
const windowHeight = document.documentElement.clientHeight;


let lazyImagesyPosition = [];
if ( lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if ( img.datset.src || img.dataset.srcset) {
            lazyImagesyPosition.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck()
        }
    })
}

function lazyScrollCheck() {
    let imgIndex = lazyImagesyPosition.findIndex(
        item => pageYOffset > item - windowHeight
    );

    if ( imgIndex >= 0) {
        if(lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src')
        } else if (lazyImages[imgIndex].dataset.srcset) {
            lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
            lazyImages[imgIndex].removeAttribute('data-srcset')
        }

        delete lazyImagesyPosition[imgIndex];

    }

}
