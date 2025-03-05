// Type guards

type combinable = string | number;
type numeric = number | boolean;

type universal = combinable & numeric;

function add(a: combinable, b: combinable){
    if(typeof a === "string" || typeof b ==="string"){
        return a.toString() + b.toString();
    }
    return a+b;
};

console.log(30, 30);
console.log("30", 30);

type admin = {
    name: string;
    privillages: string[]; 
};

type employee = {
    name: string;
    startDate: Date;
};

type elevatedEmployee = admin & employee;
type unknownEmployee = admin | employee;

const emp1 : elevatedEmployee = {
    name: "Max",  
    privillages: ["create-server"],
    startDate: new Date(),
};


function printEmployeeInformation(emp: unknownEmployee){
    console.log("Name: " + emp.name);
    if("privillages" in emp){
        console.log("Privillages: " + emp.privillages);
    };
    if("startDate" in emp){
        console.log("Start Date: " + emp.startDate);
    };
};

printEmployeeInformation(emp1);    // Name: Max, Privillages: create-server, Start Date: Wed Sep 08 2021 00:00:00 GMT+0530 (India Standard Time)

printEmployeeInformation({name: "Manu", startDate: new Date});    // Name: Manu, Start Date: function Date() { [native code] }

// Type guards in classes

class Car {
    drive(){
        console.log("Driving...");
    };
};

class Truck {
    drive(){
        console.log("Driving a truck...");
    };
    loadCargo(amount: number){
        console.log("Loading cargo..." + amount);
    };
};

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    };
};

useVehicle(v1);    // Driving...
useVehicle(v2);    // Driving a truck... Loading cargo...1000

// type casting / type assertion

const inputElement = document.getElementById("input1")! as HTMLInputElement;
// const inputElement1 = <HTMLInputElement>document.getElementById("input1")!;
inputElement.value = "Hi there!";