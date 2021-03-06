function findSubstring(s, k) {
    const result = {
        str: 'Not found',
        rating: 0
    }

    const d = ['a', 'e', 'i', 'o', 'u']

    let rating = 0;
    let str = '';

    for(let i =0; i <s.length; i ++) {
        if (str.length >= k) {
            if (d.includes(str[0])) {
                rating--;
            }
            str = str.substr(1, str.length)
        }
        str += s[i];
        if (d.includes(s[i])) {
            rating++;
        }
        if (rating > result.rating) {
            result.rating = rating;
            result.str = str;
        }
        return result.str;
    }

}


console.log('2354364564535464', '=====>', findSubstring('23443534534534', 6), '===', 'Not Found')
console.log('caberqiitefg','=====>', findSubstring('caberqiitefg', 5), '===', 'erqii')
console.log('aeiouia','=====>', findSubstring('aeiouia', 3), '===', 'aei')
