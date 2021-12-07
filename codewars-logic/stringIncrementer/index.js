function incrementString(str) {
    const regExp = /[0-8]?9*$/;
    return str.replace(regExp, (match) => Number(match + 1));
}
