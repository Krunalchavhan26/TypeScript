// Function return type
function add(num1, num2) {
    return num1 + num2;
}
;
console.log(add(10, 20));
function greet(name) {
    console.log("Hi ".concat(name));
}
;
// let combineFunction : Function;
// combineFunction = add // Valid
// combineFunction = greet // valid
// console.log(combineFunction(1,5));
// Good Practice
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 300));
// Function type and callback
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
;
addHandle(10, 20, function (result) {
    console.log(result);
});
