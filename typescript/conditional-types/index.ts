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