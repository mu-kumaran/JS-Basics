//Class
class Person{
    constructor(firtsName,lastName,dob){
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firtsName} ${this.lastName}`
    }
}

// instantiating object
const person1 = new Person('manoj','kumar','06-17-1991')
const person2 = new Person('sridhar','vembu','04-07-1981')

console.log(person1)
console.log(person2)
console.log(person1.getFullName(), person1.getBirthYear())
console.log(person2.getFullName(), person2.getBirthYear())