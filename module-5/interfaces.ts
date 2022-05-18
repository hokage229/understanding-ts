// type AddFn = (a: number, b: number) => number

interface AddFn {
    (a: number, b: number): number
}

const add: AddFn = (a: number, b: number) => {
    return a + b
}

interface Named {
    readonly  name?: string
    outputName?: string
}


interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    name?: string;
    age = 30

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string): void {
        console.log(phrase)
    }

}

let user1: Greetable

user1 = new Person()