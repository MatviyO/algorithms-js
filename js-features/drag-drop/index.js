const zone1 = document.querySelector('.zone1')
const zone2 = document.querySelector('.zone2')

const ufo = document.querySelector('#ufo')

zone1.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

ufo.ondragstart = drag;

function drag(e) {
    e.dataTransfer.setData('id', e.target.id);
}

zone1.ondrop = drop;

function drop(e) {
    let itemId = e.dataTransfer.getData('id')
    e.target.append(document.getElementById(itemId))
}