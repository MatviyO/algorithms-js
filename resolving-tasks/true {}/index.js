let str = '([)['

function isValid(s) {
    let stack = [];
    let brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (isClodesBracket(current)) {
            if (brackets[current] !== stack.pop()) return false

        } else {
            stack.push(current)
        }

    }

    return stack.length === 0;
}

function isClodesBracket(ch) {
    return [')', '}', ']'].indexOf(ch) > -1;
}