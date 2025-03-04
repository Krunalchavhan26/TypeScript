// Interface

// interface person {
//     name : string;
//     age : number;
//     greet(text : string) : void;
// };

// let user : person;

// user = {
//     name : "Krunal",
//     age : 20,
//     greet(text) {
//         console.log(`${text} ${this.name}`);
//     },
// };

// console.log(user);

// interface greetable {
//     name : string;
//     greet(text: string): void;
// };

// class person implements greetable {
//     name : string;

//     constructor(n: string){
//         this.name = n;
//     };

//     greet(text: string): void {
//         console.log(`${text} ${this.name}`);
//     };
// };

// const p1 = new person("Krunal");
// p1.greet("Hi there i am");

// readonly

// interface greetable {
//     readonly name : string;
//     greet(text: string): void;
// };

// class person implements greetable {
//     name : string;

//     constructor(n: string){
//         this.name = n;
//     };

//     greet(text: string): void {
//         console.log(`${text} ${this.name}`);
//     };
// };

// let user1 : greetable;

// user1 = new person("Krunal");

// Extending interface

// interface named {
//     readonly name: string;
// };

// interface greetable extends named{
//     greet(text: string): void;
// };

// class person implements greetable {
//     name: string;
//     constructor(n: string){
//         this.name = n;
//     };
//     greet(text: string): void {
//         console.log(`${text} ${this.name}`);
//     };
// };

// let user1 : greetable;

// user1 = new person("Krunal");
// console.log(user1);

//Optional (?)

interface named{
    readonly name: string;
    outputName ?: string; // you don't need too implement this property into person it is optional
}

class person implements named{
    name  : string;
    constructor(n: string){
        this.name = n;
    };
};

