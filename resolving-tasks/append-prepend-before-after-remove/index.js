const logBlock = document.querySelector('.log-block')

let div = document.createElement('div')

div.textContent = 'New Div'
div.classList.add('bg-primary')

logBlock.append(div); // append   this method  added to end in element

let div1 = document.createElement('div')

div1.textContent = 'New Prepend'
div1.classList.add('bg-primary')

logBlock.prepend(div1); // prepend this method  added to start in element