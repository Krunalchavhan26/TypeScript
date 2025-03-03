var userInput;
// let userInput : any;
var userName;
userInput = 10;
userInput = "Krunal";
if (typeof userInput === "string") {
    userName = userInput;
}
;
// Never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
;
var res = generateError("Internal Server Error", 500);
console.log(res);
