// const names: Array<string> = []
//
// names.push('df')
// names.push('de')
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done')
//     }, 2000)
// })
//
// const fun = async () => {
//     const data = await promise
//     console.log(data.toUpperCase())
// }
// fun()

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'max', hobbies: ['Sort']}, {age: 2})


interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value'
    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements'
    }
    return [element, descriptionText];
}

// console.log(countAndPrint([]))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

// console.log(extractAndConvert({name: 'Max'}, 'name'))

class DataStorage<T extends string | number | boolean> {
    private data: T[] = []

    addItem<U>(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return this.data
    }
}

// const textStorage = new DataStorage<string>()
// textStorage.addItem('Max')
// textStorage.addItem('Mala')
// textStorage.removeItem('Mala')
// console.log(textStorage.getItems())
//
// const numberStorage = new DataStorage<number>()
// numberStorage.addItem(1)
// numberStorage.addItem(3)
// numberStorage.addItem(3)
// numberStorage.removeItem(3)
// console.log(numberStorage.getItems())

// const objStorage = new DataStorage<object>()
// const maxObj = {name: "Max"}
// objStorage.addItem(maxObj)
// objStorage.addItem({name: "Manu"})
// objStorage.removeItem(maxObj)
// console.log(objStorage.getItems())

interface CourseGoal {
    title: string,
    description: string
    completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // return {title: title, description: description, completeUntil: date}
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date

    return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop()

