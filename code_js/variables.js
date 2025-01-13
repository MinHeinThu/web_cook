// Types of javascript variable
var firstName = "Min"; // this is old version 

let middleName;
middleName = "Hein";
let lastName = "Thu";

console.log(middleName);

const full_name = "Min Hein Thu"; // var can't be changed
console.log(full_name);


// string

let my_favourite_food = "Healthy food";

// Numbers

let myLuckyNumber = "9,2,4,7";
let myGuessPoint = '1.3';

// Boolean
let love_coding = true;

// Big int

let big_int = '234238902';

// Object is like dictionary in python store data that is key values

let course = {
    name: 'Javascript tutorials',
    time: 3
};
console.log(course);
console.log(course.time);

console.log(course['name']);
course['level'] = 'Beginners'

console.log(course.level);

// Arrays to store list of data

// in python
// productColors = ['blue', 'green']

// in javascript
let productColors = ['blue', 'green'];
console.log(productColors);

// Can index the array
productColors[0] = 'red';
productColors[2] = 'blue';
console.log(productColors)


// checking len in python & js
// print(len(arr))

console.log(productColors.length);

// function difference between python vs js
// def name(arg):
//     return arg

function greeting(name) {
    console.log('Hello ' + name);
}

greeting('min'); // call the function


// js arithematic operators
let x = 7;
let y = 2;
let z = x / 2;
console.log(z)

x++;
console.log(x)
/*
*/

++y;
console.log(y);

let a = 2;
let b = '2';
 
// loose quality ==
console.log(a == b); // truthy

// strict quality
console.log(a === b);

// tenary operators

let age = 16;
const canDrive = age >= 16 ? true : false;
console.log(canDrive);

// in python if age >= 16 else "greater"
// x if x > y else y

