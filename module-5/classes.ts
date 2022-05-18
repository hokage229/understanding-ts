abstract class Department {
    static fiscalYear = 2020
    readonly name: string
    protected employees: string[] = [];

    protected constructor(protected readonly id: string, name: string,) {
        this.name = name;
    }

    abstract describe(this: Department): void

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }

    static printHello() {
        console.log("Hello")
    }

    static createEmployee(name: string) {
        return {name: name}
    }
}

class ITDepartment extends Department {
    readonly admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    describe(): void {
        console.log('IT department: ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private static instance: AccountingDepartment;
    private _lastReport: string

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this._lastReport = reports[0]
    }

    static getInstance() {
        if (!AccountingDepartment.instance) {
            AccountingDepartment.instance = new AccountingDepartment('d2', [])
        }
        return this.instance;
    }

    addEmployee(employee: string) {
        if (employee === '') {
            return
        }
        this.employees.push(employee)
    }

    addReport(text: string) {
        this.reports.push(text)
        this._lastReport = text
    }

    describe() {
        console.log('Accounting department: ' + this.id)
    }

    printReports() {
        console.log(this.reports)
    }

    set lastReport(value: string) {
        this._lastReport = value;
    }

    get lastReport(): string {
        if (this._lastReport) {
            return this._lastReport
        }
        throw new Error('No report found')
    }
}

let it = new ITDepartment('d1', ['Admin1', 'Admin2']);
it.addEmployee('Max')
it.addEmployee('Dime')

// accounting.employees[2] = 'Anna'

// console.log(accounting)
// it.describe()
// it.printEmployeeInfo()

// const accountingCopy = {name: 'fuck', describe: accounting.describe}
//
// accountingCopy.describe()

// console.log(it)

// const accounting = new AccountingDepartment('d2', [])
// console.log(accounting)
// accounting.addReport('hi')
// accounting.printReports()
// accounting.lastReport = 'dsf'
// console.log(accounting.lastReport);
// accounting.addEmployee('')
// accounting.addEmployee('Mars')
// accounting.printEmployeeInfo()

// AccountingDepartment.printHello()
// Department.printHello()
// console.log(ITDepartment.createEmployee('Miss'));

// accounting.describe()

const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()
console.log(accounting === accounting2)

const it1 = new ITDepartment('d1', [])
const it2 = new ITDepartment('d1', [])
console.log(it1 == it2)
