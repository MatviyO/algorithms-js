type APIResponse<Type> = {
    item?: Type;
    items?: Type[];
}

interface IUser {
    name: string;
    age: number;
}

const fetchAPI = <IUser>(url:string): Promise<APIResponse<IUser>> => {
    return fetch(url).then((response) => response.json())
}
