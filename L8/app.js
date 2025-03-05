// Generics intro
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var boy = {
    name: 'John',
    age: 20,
};
var fruits = [{ name: 'Vivek', age: 20 }];
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
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
;
var result = merge({ name: 'Vivek' }, { age: 20 });
// console.log(result);
// Generics with constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
;
var obj = createObject('name', 20, true);
;
var numberBox = { value: 20 };
var stringBox = { value: 'Hello' };
var objectBox = { value: { name: 'Vivek' } };
;
var user1 = { data: 'Vivek', status: 200 };
var user2 = { data: { name: "Rahul", age: 19 }, status: 200 };
// console.log(user1);
// console.log(user2);
// Generic with classes
var container = /** @class */ (function () {
    function container(data) {
        this.data = data;
    }
    ;
    container.prototype.getData = function () {
        return this.data;
    };
    ;
    return container;
}());
;
var stringContainer = new container('Hello');
// console.log(stringContainer.getData());
var numberContainer = new container(20);
// console.log(numberContainer.getData());
// Generic with Array
function getFirstItem(items) {
    return items[0];
}
var firstNumber = getFirstItem([1, 2, 3]);
var firstString = getFirstItem(['a', 'b', 'c']);
// console.log(firstNumber);    
// console.log(firstString);
// Generic with keyof
function getProperty(obj, key) {
    return obj[key];
}
;
var person3 = {
    name: 'Vivek',
    age: 20,
};
var name1 = getProperty(person3, 'name');
var age1 = getProperty(person3, 'age');
console.log(name1);
console.log(age1);
