// Basic Class

// class department {
//     name : string;
//     constructor(n : string){
//         this.name = n;
//     };

//     describe(this : department) : void {
//         console.log("Department ", this.name);
//     };
// };

// const accounting = new department("Accounting");
// accounting.describe();

// const accountingCopy = {
//     name : "Dummy",
//     describe : accounting.describe,
// };

// accountingCopy.describe();



// Private and public Access modyfiers
// class department {
//     public name : string;
//     private employee : string[];
//     constructor(n : string){
//         this.name = n;
//         this.employee = [];
//     };

//     describe(this : department) : void {
//         console.log("Department ", this.name);
//     };

//     addEmployee(emp : string){
//         this.employee.push(emp);
//     };

//     printEmployeeInformation(){
//         console.log("Number of emp: ", this.employee.length);
//         console.log(this.employee);
//     }
// };

// const accounting = new department("Accounting");
// accounting.describe();

// accounting.addEmployee("Chavhan");
// accounting.addEmployee("Rahul");

// accounting.printEmployeeInformation();

// readOnly

// class department {
//     public name : string;
//     private employee : string[];
//     private readonly id : string;
//     constructor(n : string){
//         this.name = n;
//         this.id = "d1"; // Only once you can initiallize
//         this.employee = [];
//     };

//     describe(this : department) : void {
//         console.log("Department ", this.name);
//     };

//     addEmployee(emp : string){
//         this.employee.push(emp);
//     };

//     printEmployeeInformation(){
//         console.log("Number of emp: ", this.employee.length);
//         console.log(this.employee);
//     };
// };

// Inheritance
// Override properties and protected access modyfiers
// setter and getter method

class department {
    public name : string;
    protected employees : string[];
    private readonly id : string;
    constructor(id : string, n : string){
        this.name = n;
        this.id = id; // Only once you can initiallize
        this.employees = [];
    };

    describe(this : department) : void {
        console.log(`Department (${this.id}), ${this.name}`);
    };

    addEmployee(emp : string){
        this.employees.push(emp);
    };

    printEmployeeInformation(){
        console.log("Number of emp: ", this.employees.length);
        console.log(this.employees);
    };
};


class accountingDepaertment extends department {
    constructor(id: string, private reports: string[]){
        super(id, "Accouting");
        this.reports = [];
    }

    addReports(text : string){
        this.reports.push(text);
    };

    printReport(){
        console.log(this.reports)
    };

    addEmployee(emp: string): void {
        if(emp === "Chavhan"){
            return;
        }
        this.employees.push(emp);
    };

    get getReports(){
        if(this.reports.length > 0) {
            return this.reports;
        }
        throw new Error("Report not found");
    }

    set setReports(value : string){
        if(!value){
            throw new Error("Please pass valid value");
        }
        this.reports.push(value);
    }
};  

const accDep = new accountingDepaertment("d1", []);
accDep.addReports("Bug");
// accDep.printReport();
// accDep.describe();

accDep.addEmployee("Krunal");
accDep.addEmployee("Rahul");
// accDep.printEmployeeInformation(); 


// setter and getter 

console.log("Getter ->", accDep.getReports);
accDep.setReports = "Code review error";
console.log("getter ->", accDep.getReports);


// static method

class department2 {
    public name : string;
    protected employees : string[];
    private readonly id : string;
    constructor(id : string, n : string){
        this.name = n;
        this.id = id; // Only once you can initiallize
        this.employees = [];
    };

    describe(this : department2) : void {
        console.log(`Department (${this.id}), ${this.name}`);
    };

    addEmployee(emp : string){
        this.employees.push(emp);
    };

    printEmployeeInformation(){
        console.log("Number of emp: ", this.employees.length);
        console.log(this.employees);
    };

    static getSalary(){
        return {salary: 500000};
    };
};

const salary = department2.getSalary(); // without creating object.
console.log(salary);

// abstract classes 

abstract class department3 {
    public name : string;
    protected employees : string[] = [];
    protected readonly id : string;

    constructor(id : string, n: string){
        this.id = id;
        this.name = n 
    };

    abstract describe(this: department3): void;
    abstract displayName() : void;
};

class subClass extends department3{
    constructor(id: string, private reports : string[]){
        super(id, "Accounting");
    };

    describe(): void {
        console.log("Department", this.id);
    }

    displayName(): void {
        console.log(this.name);
        
    }
};

const SubClass = new subClass("D1", []);
SubClass.displayName();