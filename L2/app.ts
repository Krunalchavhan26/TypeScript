// Object Array Tuple Enum



// const person: {
//   firstName: string;
//   age: number;
//   skill: string[];
// } = {
//   firstName: "Chavhan",
//   age: 21,
//   skill: ["Reactjs", "Nodejs"]
// };

let favlang1: string[];
favlang1 = ["Reactjs", "English"];

let favlang2: any[];
favlang2 = ["Reactjs", "English", 15, true];

// console.log(person.firstName);

// Tuple

// const person : {
//     name: string;
//     age: number;
//     skills: string[];
//     product: [number, string]
// } = {
//     name: "Krunal",
//     age: 20,
//     skills: ["React", "Node"],
//     product: [10, "Macbook M2"]
// }

// person.product[1] = 20; Invalid


// Enum

enum Role {Admin, Author, Read_User_Only};

const person = {
    name: "Krunal",
    age: 20,
    skills: ["React", "Node"],
    product: [10, "Macbook"],
    role: Role.Admin
};

if(person.role === Role.Author){
    console.log("Author");
} else if(person.role === Role.Admin){
    console.log("Admin");
} else if(person.role === Role.Read_User_Only){
    console.log("Read user only");
};
