// Function return type

function add(num1 : number, num2 : number): number {
    return num1 + num2;
};

console.log(add(10,20));

function greet(name: string) : void {
    console.log(`Hi ${name}`);
};

// let combineFunction : Function;

// combineFunction = add // Valid
// combineFunction = greet // valid

// console.log(combineFunction(1,5));

// Good Practice

let combineFunction : (a : number,b : number) => number ;

combineFunction = add;

console.log(combineFunction(100,300));

// Function type and callback

function addHandle(num1: number, num2: number, cb : (n:number) => void){
    const result = num1 + num2;
    cb(result);
};

addHandle(10, 20, (result : number) => {
    console.log(result);
})
