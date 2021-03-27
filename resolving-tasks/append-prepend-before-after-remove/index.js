document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMe, false)

const logBlock = document.querySelector('.log-block')

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;

    console.log(x1, y1)
}

function handleTouchMe(event) {
    if (!x1 || !y1) {
        return false
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientX;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            logBlock.textContent = 'right'
        } else {
            logBlock.textContent = 'left'
        }
    } else {
        if (yDiff > 0) {
            logBlock.textContent = 'down'
        } else {
            logBlock.textContent = 'up'
        }
    }
    x1 = null
    y1 = null;

}