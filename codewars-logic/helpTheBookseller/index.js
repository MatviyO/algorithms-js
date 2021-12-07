function stockList(listOfBooks, listOfCat) {
    if (!listOfBooks.length || !listOfCat) {
        return '';
    }
    const booksCategory = {};
    listOfBooks.forEach(el => {
        const [category, amount] = el.split(' ');
        const catCode = category[0];

        booksCategory[catCode] = (booksCategory[catCode] || 0) + Number(amount);
    })

    return listOfCat.map(el => {
        return `(${el} : ${booksCategory[el] || 0})`
    }).join(' - ')

}
