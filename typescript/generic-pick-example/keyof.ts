enum Color {
    white = '#fff',
    black = '#000'
}

const door: Color = Color.white;
type MyColor = keyof typeof Color;
const one: MyColor = 'white'
console.log(one)
console.log(typeof door)
