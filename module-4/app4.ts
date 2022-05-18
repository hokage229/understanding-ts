const userName = 'Max'
// let age = 30

// userName = '2'
// age = 28


// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(3, 4))

// const printOut: (a: number | string) => void =
//     output => console.log(output)

// printOut('heey')

// const button = document.getElementById('btn')!
// button.addEventListener('click', event => console.log(event))

// printOut(add(5))

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking']

activeHobbies.push(...hobbies)


const person = {
    name: 'Max',
    age: 30
}

const copiedPerson = {...person, sex: 'Male'};

// console.log(copiedPerson)


const add = (...numbers: number[]) => {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue)
}

const addedNumbers = add(1, 4, 5, 5, 6)
console.log(addedNumbers)

const [hobby1, hobby2] = hobbies
const {name: personName, age: personAge} = person

console.log(personName, personAge)