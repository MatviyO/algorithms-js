enum Color {
    white = '#fff',
    black = '#000'
}

const door: Color = Color.white;
type MyColor = keyof typeof Color;
const one: MyColor = 'white'
console.log(one)
console.log(typeof door)

//

const formData = {
    name: 'Jon',
    age: 30
}
type ValidationResult = {
    [key in keyof typeof  formData]: boolean
}

// declare function validate<T>(value: T): ValidationResult;
declare function validate<T>(value: T): { [key in keyof T]: boolean};

const r = validate<typeof formData>(formData)
console.log(r)


type myType = {
    age: string
    name: string
}
const v: myType = {name: '', age: ''}
