//aabbaa - true
function palindrom(word) {
    word = word.toLowerCase();
    for ( let i = 0; word.length / 2; i ++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
}
function palindrom2(word) {
    word = word.toLowerCase()
    return word === word.split('').reverse().join('')
}

console.log(palindrom('aabbaa'))
