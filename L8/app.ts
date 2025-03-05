// Generics intro

type person = {
    name: string;
    age: number;
};

const boy : person = {
    name: 'John',
    age: 20,
};

const fruits: Array<person> = [{name: 'Vivek', age: 20}];

// fruits.push('apple');
// fruits.push('banana');
// fruits.push('orange');
// console.log(fruits);

// Example 2

/**
 * This function merges two objects using TypeScript generics.
 * 
 * @param objA - First object of type T
 * @param objB - Second object of type U
 * @returns A new object containing properties from both objA and objB
 * 
 * Why use generics (T and U)?
 * - `T` and `U` are generic type placeholders, meaning they can be replaced by any type.
 * - If we used only `T` for both parameters, both objects would have to be of the same type.
 * - By using `T` for objA and `U` for objB, TypeScript allows merging objects with different properties.
 * 
 * Example:
 * const merged = merge({ name: "Krunal" }, { age: 24 });
 * // `T` is inferred as { name: string }
 * // `U` is inferred as { age: number }
 * // Result: { name: "Krunal", age: 24 }
 */

function merge<T, U>(objA : T, objB: U){
    return {...objA, ...objB};
};

const result = merge({name: 'Vivek'}, {age: 20});
// console.log(result);

// Generics with constraints

function createObject<T extends String, U extends number, V extends Boolean>(
    key: T,
    value: U,
    isActive: V,
): {key: T, value: U, isActive: V} {
    return {key, value, isActive};
};

const obj = createObject('name', 20, true);
// console.log(obj);



// Generics with interfaces

interface box<T> {
    value: T;
};

const numberBox: box<number> = {value: 20};
const stringBox: box<string> = {value: 'Hello'};
const objectBox: box<object> = {value: {name: 'Vivek'}};
// console.log(numberBox);
// console.log(stringBox);
// console.log(objectBox);

// Generic default values

interface User<T = string> {
    data: T;
    status: number;
};

type person2 = {
    name: string;
    age: number;
};


const user1: User = {data: 'Vivek', status: 200};
const user2: User<person2> = {data: {name: "Rahul", age: 19}, status: 200};
// console.log(user1);
// console.log(user2);

// Generic with classes

class container<T> {
    private data: T;

    constructor(data: T){
        this.data = data;
    };

    getData(): T {
        return this.data;
    };
};

const stringContainer = new container<string>('Hello');
// console.log(stringContainer.getData());

const numberContainer = new container<number>(20);
// console.log(numberContainer.getData());

// Generic with Array

function getFirstItem<T>(items: T[]): T {
    return items[0];
}

const firstNumber = getFirstItem([1, 2, 3]);
const firstString = getFirstItem(['a', 'b', 'c']);
// console.log(firstNumber);    
// console.log(firstString);

// Generic with keyof

function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
};

const person3 = {
    name: 'Vivek',
    age: 20,
};

const name1 = getProperty(person3, 'name');
const age1 = getProperty(person3, 'age');
console.log(name1);
console.log(age1);