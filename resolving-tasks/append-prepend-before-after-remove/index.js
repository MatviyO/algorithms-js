const logBlock = document.querySelector('.log-block')
let div = document.createElement('div')

div.textContent = 'New Div'
div.classList.add('bg-primary')
logBlock.append(div); // append   this method  added to end in element




let div1 = document.createElement('div')

div1.textContent = 'New Prepend'
div1.classList.add('bg-primary')

logBlock.prepend(div1); // prepend this method  added to start in element


//before
let div2 = document.createElement('div')

div2.textContent = 'New before'
div2.classList.add('bg-primary')

logBlock.before(div2); // before this method  added pered eleventom top  1 lvl


//after
let div3 = document.createElement('div')

div3.textContent = 'New after'
div3.classList.add('bg-primary')

logBlock.after(div3); // after this method  added pered eleventom top  1 lvl


//replaceWith
let div4 = document.createElement('div')

div4.textContent = 'New replaceWith'
div4.classList.add('bg-primary')

logBlock.replaceWith(div4); // replace old div and add new div


//remove
let div4 = document.createElement('div')

div4.textContent = 'New remove'
div4.classList.add('bg-primary')

logBlock.remove(div4); // remove div