let userInput : unknown;
// let userInput : any;
let userName : string;

userInput = 10;
userInput = "Krunal"

if(typeof userInput === "string"){
    userName = userInput;
};

// Never return type

function generateError(message: string, code: number) : never{
    throw {message: message, statusCode: code}
};

const res = generateError("Internal Server Error", 500);

console.log(res);
