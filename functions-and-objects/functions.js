function add(num1 = 1, num2 = 2){
    return num1 + num2;
}
console.log(add(5,8))

// Arrow functions
const add_sum = (num1=5,num2=5) => {
    return num1 + num2;
}
console.log(add_sum(3,8))

const addNums = (num1 = 2, num2 = 3) => num1 + num2
const subnums = (num1 = 8) => num1 - 5

console.log(addNums(3,9))
console.log(subnums(11))

//-------------------------------------------------------

// constructor function
function Person(firtsName,lastName,dob){
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    // this.getFullName = function(){
    //     return `${this.firtsName} ${this.lastName}`
    // }
}

// instantiating object
const person1 = new Person('manoj','kumar','06-17-1991')
const person2 = new Person('sridhar','vembu','04-07-1981')

// prototying the object
Person.prototype.getFullName = function(){
    return `${this.firtsName} ${this.lastName}`
}

console.log(person1)
console.log(person2)
console.log(person1.getFullName(), person1.getBirthYear())
console.log(person2.getFullName(), person2.getBirthYear())