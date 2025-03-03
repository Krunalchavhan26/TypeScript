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
var favlang1;
favlang1 = ["Reactjs", "English"];
var favlang2;
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
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["Read_User_Only"] = 2] = "Read_User_Only";
})(Role || (Role = {}));
;
var person = {
    name: "Krunal",
    age: 20,
    skills: ["React", "Node"],
    product: [10, "Macbook"],
    role: Role.Admin
};
if (person.role === Role.Author) {
    console.log("Author");
}
else if (person.role === Role.Admin) {
    console.log("Admin");
}
else if (person.role === Role.Read_User_Only) {
    console.log("Read user only");
}
;
