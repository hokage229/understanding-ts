// const person: {
//     name: string;
//     age: number
// }
// const person: {
//     name: string, age: number, hobbies: string[], role: [number, string]
// } = {
//     name: 'Ernest',
//     age: 11,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'Ernest',
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person.role.push('admin')
// person.role = [0, 'admin']

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name)
for (const hobbie of person.hobbies) {
    console.log(hobbie)
}

if (person.role === Role.AUTHOR) {
    console.log(person.role)
}