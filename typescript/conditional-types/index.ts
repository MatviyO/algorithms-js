interface User {
    id: string;
}
interface Message {
    id: number;
}

function getId<T extends { id: any}>(obj: T): T extends { id: string} ? string : number {
    return obj.id;
}

const r1 = getId({} as User)
const r2 = getId({} as Message)


//example 2

type NotFalsy<T = null> = T extends (null | undefined | false | 0) ? never : T;

let z: NotFalsy;
z = 'jello'  //error
let z1: NotFalsy<string>

z1 = 'string'
z1 = null // error 

//example 3

type Filter<T, U> = T extends U ? never : T;
type R = Filter<'a' | 'b' | 'c', 'b'>  // b removed , because b === b  was true and equal never ( never skip it)

// also 
type R1 = Exclude<'a' | 'b' | 'c', 'b'>