// Ternary operator
let x = 10
const color = x > 10 ? 'red':'blue'

console.log(color)

// if conditions and switch case

if (x === 10){
    console.log('X is 10')
}
else if( x > 10){
    console.log("x is more than 10")
}
else{
    console.log("X is less than 10")
}

switch(color){
    case 'blue':
        console.log("color is blue")
        break;
    case 'red':
        console.log('color is red')
        break;
    default:
        console.log('color is neither red nor blue')
}

let x1 = 4
let x2 = 11

if(x1 > 4 && x2 > 10){
    console.log("x1 is more than 4 and x2 is more than 10")
}
else if(x1 > 4 || x2 > 10){
    console.log("Either x1 is more than 4 or x2 is more than 10")
}
else{
    console.log("x1 is less than 4 and x2 is less than 10")
}