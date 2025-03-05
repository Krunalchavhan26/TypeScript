// Type guards
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
;
console.log(30, 30);
console.log("30", 30);
var emp1 = {
    name: "Max",
    privillages: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privillages" in emp) {
        console.log("Privillages: " + emp.privillages);
    }
    ;
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
    ;
}
;
printEmployeeInformation(emp1); // Name: Max, Privillages: create-server, Start Date: Wed Sep 08 2021 00:00:00 GMT+0530 (India Standard Time)
printEmployeeInformation({ name: "Manu", startDate: new Date }); // Name: Manu, Start Date: function Date() { [native code] }
// Type guards in classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    ;
    return Car;
}());
;
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    ;
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo..." + amount);
    };
    ;
    return Truck;
}());
;
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    ;
}
;
useVehicle(v1); // Driving...
useVehicle(v2); // Driving a truck... Loading cargo...1000
// type casting / type assertion
var inputElement = document.getElementById("input1");
// const inputElement1 = <HTMLInputElement>document.getElementById("input1")!;
inputElement.value = "Hi there!";
