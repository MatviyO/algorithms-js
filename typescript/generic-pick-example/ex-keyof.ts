type ExpiryDateTime = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
//(key: 'days' | 'hours' | 'minutes',  ----worse code
const change = (key: keyof ExpiryDateTime, value: number, expiryDateTime: ExpiryDateTime ): ExpiryDateTime => {
    return {...expiryDateTime, [key]: value}
}


let expiryDateTime: ExpiryDateTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

expiryDateTime = change('hours', 10, expiryDateTime)


//typeof
//returntype

const getHisOrHer = (value: number): 'his' | 'her' => {
    return value % 2 === 0 ? 'his' : 'her'
}

const pronoun: ReturnType<typeof getHisOrHer> = getHisOrHer(3)
