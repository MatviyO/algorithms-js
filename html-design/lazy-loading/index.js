const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const loadMapBlock = document.querySelector('.load-map');
const windowHeight = document.documentElement.clientHeight;
const loadMoreBlock = document.querySelectorAll('._loadMore')

let lazyImagesyPosition = [];
if ( lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if ( img.datset.src || img.dataset.srcset) {
            lazyImagesyPosition.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck()
        }
    })
}


window.addEventListener('scroll', lazyScroll)

function lazyScroll() {
    if(document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
        lazyScrollCheck()
    }
    if (!loadMapBlock.classList.contains('_loaded')) {
        getMap()
    }

    if (!loadMoreBlock.classList.contains('_loading')) {
        loadMore()
    }
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

function getMap() {
    const loadMapBlockPosition = loadMapBlock.getBoundingClientRect().top + pageYOffset;
    if (pageYOffset > loadMapBlockPosition - windowHeight ) {
        const loadMapUrl = loadMapBlock.dataset.map;
        if (loadMapUrl) {
            loadMapBlock.insertAdjacentElement("beforeend", `<iframe src="${loadMapUrl}" style="border: 0;" allowfullscreen="" loading="lazy" ></iframe>`)
        }
        loadMapBlock.classList.add('_loaded')
    }
}


function loadMore() {
    const loadMoreBlockPosition = loadMoreBlock.getBoundingClientRect().top + pageYOffset;
    const loadMoreHeight =  loadMoreBlock.offsetHeight;

    if(pageYOffset >(loadMoreBlockPosition + loadMoreHeight) - windowHeight) {
        getContent()
    }

}

async function getContent() {
    if (!document.querySelector('._loadingicon')) {
        loadMoreBlock.insertAdjacentElement('beforeend', `<div class="_loading-icon"></div>`)
    }

    loadMoreBlock.classList.add('_loading')

    let response = await fetch('_more.html', {method: 'GET'})
    if(response.ok) {
        let result = await response.text()
        loadMoreBlock.insertAdjacentElement('beforeend', result);
        loadMoreBlock.classList.remove('_loading')
    }
    if (document.querySelector('._loading-icon')) {
        document.querySelector('._loading-icon').remove();
    } else {
        alert('Error')
    }
}
