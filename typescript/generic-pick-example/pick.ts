type Employee = {
    name: string;
    age: number;
    id: number;
    role: string
}

const getUserLabel = ({name, age}: Pick<Employee, "name" | "age">): string => {
    return `${age} ${name}`
}
