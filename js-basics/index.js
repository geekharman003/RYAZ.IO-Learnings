// console.log("harman")

//object
// let obj = {
//   firstName: "john",
//   age: 33,
// };
// console.log(obj);
// console.log(obj.firstName);
// console.log(obj["age"]);

// ------------------------------------------------------

//arrays
// let arr = ["name", "age", 3, 43];
// console.log(arr);
// arr[5] = 2
// console.log(arr[5]);

// ------------------------------------------------------

//functions
// function greet(name){
//     console.log("hello" + " "  + name)
// }

// greet("harman");

//function returns some value
// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(2,5));

// ------------------------------------------------------

//Operators

//Arithmatic operators
// let x = 2;

// x = x+1;
// x= x-1;
// x = x*1;
// x = x/1;
// x = x*1;
// x = x**1

// x++;
// ++x;

// x--;
// --x;

// ------------------------------------------------------

//Assignment Operators
// x = 10;
// x+=10;
// x-=10;
// x*=10;
// x/=10;
// x%=10;

// ------------------------------------------------------

//Comparison operators
// let x = 5;
//x==5;
// x>5;
// x<5;
// x>=5;
// x<=5;

// ------------------------------------------------------

//Equality operators
// let x = '5';

//strict equality (checks both value and data type)
// console.log(x === 5);

//loose equality (checks only the value)
// console.log('5' == 5);

// in == the data type on the right side automatically convert into the data type on left side in case if both the values are same but data tyep is different
// console.log('1' == 1)

// ------------------------------------------------------

// //Ternary operator
// let marks = 91;
// let grade;

// console.log(marks > 90 ? "A+" : "A");

// ------------------------------------------------------

//Logical Operators

// Logical AND (&&)
// console.log('1' && 1);  returns true only if both the operands are true else return false

//Logical OR (||)
// console.log('1' || '1');  //if one of the operand is true then also it return true else false

// Logical NOT (!)
// console.log(!true) it swaps the current value with its opposite

// ------------------------------------------------------

//Truthy and falsy values

// Falsy values:
// undefined
// null
// ''
// 0
// false
// NaN

// Truthy values:
// anything which is not falsy is truthy value

// ---------------------------------------------------------

//Logical operators with non-boolean values
// console.log("1" && {});

// console.log(1 || null);

// console.log(!"harman");

// ------------------------------------------------------

// Short Circuiting:
// In an expression if we use a OR (||) operator then at any time when we got a truthy value we stop checking further.this is called short circuiting.

// --------------------------------------------------------------------

//Bitwise Operators
// Bitwise &:
// console.log(1&2) it checks individual bits of the number and if two same bits have 1 then the resultant bit will become 1

// Bitwise |:
// console.log(1&2) it checks individual bits of the number and if either of the bit have 1 then the resultant bit will become 1

// --------------------------------------------------------------------

// Control Flow statements
// control flow statements are used to execute a block of code when a certain condition is met.

// 1.If else
// let hour = 6;
// if (hour >= 6 && hour < 12) {
//   console.log("good morning");
// } else if (hour >= 12 && hour <= 6) {
//   console.log("Good afternoon");
// } else {
//   console.log("Good Evening");
// }

// --------------------------------------------------------------------

// 2.Switch case
// let role = "Admin";

// switch (role) {
//   case "guest":
//     console.log("Guest user");
//     break;

//   case "Admin":
//     console.log("Admin User");
//     break;

//   default:
//     console.log("Unknown User");
//     break;
// }

// --------------------------------------------------------------------

// 3.For loop
// for (let i = 1; i <= 5; i++){
//     console.log("hello world");
// }

// --------------------------------------------------------------------

//While Loop
// let i = 0;
// while (i < 5) {
//   if (i%2!==0) {
//     console.log(i);
//   }
//   i++;
// }

// --------------------------------------------------------------------

//do-while loop
// let i = 0
// do {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 5);

// --------------------------------------------------------------------

//Infinite loop
// let i = 0;
// while (i < 5) {
//   if (i%2!==0) {
//     console.log(i);
//   }
// }

// while (true) {
//   console.log("infinite loop");
// }

// --------------------------------------------------------------------

//For in loop
// used to iterate over properties of an object

// const person = {
//   name: "zack",
//   age: 20,
//   key: 1,
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// const colors = ["red", "green", "blue"];

// for (let index in colors) {
//   console.log(index, colors[index]);
// }

// --------------------------------------------------------------------

//For of loop
// used to iterate over the elements of an array

// const colors = ["red", "green", "blue"];

// for (let value of colors) {
//   console.log(value);
// }

// --------------------------------------------------------------------

// break and continue
// break is used to break out of the loop
// continue is used to skip the current iteration
// break:
// let i = 0;
// while (i <= 5) {
//   if (i == 4) {
//     break;
//   }
//   console.log(i)
//   i++;
// }

// --------------------------------------------------------------------

// continue:
// while (i <= 5) {
//   if (i == 4) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// -------------------------------------------------------------------

//Exercises:

// max of two numbers
// function maxOfTwo(n1, n2) {
//   n1 > n2 ? console.log(n1 + " is maximum") : console.log(n2 + " is maximum");
// }

// maxOfTwo(103, -32);

// -------------------------------------------------------------------

//check if image is landscape or portrait

// function isLandscape(width, height) {
//   return (width > height);
// }

// console.log(isLandscape(440, 440));

// -------------------------------------------------------------------

//fizbuzz algorithm
//divisible by 3 -> Fizz
//divisible by 5 -> Buzz
//divisible by 3 && 5 -> FizzBuzz
//not divisible by 3 or 5 -> input
//not a number -> "Not a Number"

// function fizzBuzz(input) {
//   if (typeof input !== "number") {
//     return "Not a Number";
//   } else if (input % 3 === 0 && input % 5 === 0) {
//     return "FizzBuzz";
//   } else if (input % 3 === 0) {
//     return "Fizz";
//   } else if (input % 5 === 0) {
//     return "Buzz";
//   } else {
//     return input;
//   }
// }

// let result = fizzBuzz(NaN);
// console.log(result);

// --------------------------------------------------------------------

//demerit points
// speed limit = 70
// every 5km -> 1 point
//Math.floor(74.9)
//12 points -> license suspended

// function checkSpeed(speed) {
//   let difference = speed - 70;
//   let five_kms = Math.floor(difference / 5);

//   if (five_kms >= 12) console.log("License Suspended");
//   else if (five_kms < 1) console.log("OK");
//   else console.log("Points: " + five_kms);
// }

// checkSpeed(130);

//----------------------------------------------------------------------

//Even Odd

// function showNumers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = i % 2 == 0 ? console.log(i, "EVEN") : console.log(i, "ODD");
//     i % 2 == 0 ? message : message;
//   }
// }

// showNumers(10);

// --------------------------------------------------------------------

// Count truthy values

// function countTruthy(array) {
//   let truthyCount = 0;
//   for (let value of array) {
//     if (
//       value !== "" &&
//       value !== undefined &&
//       value !== null &&
//       value !== false &&
//       value !== 0 &&
//       value !== NaN
//     ) {
//       truthyCount++;
//     }
//   }
//   return truthyCount;
// } wrong approach

//   let truthyCount = 0;
//   for (let value of array) {
//     if (value) {
//       truthyCount++;
//     }
//   }
//   return truthyCount;
// }

// const arr = ["0", null, undefined, 4, "false", true, {}, []];

// console.log(countTruthy(arr));

// ---------------------------------------------------------------------

// Show only properties of an object which contain string data

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log(key, obj[key]);
//     }
//   }
// }

// const movieInfo = {
//   Name: "Spider-Man",
//   ReleaseDate: 14 - 9 - 2023,
//   Rating: 8.2,
//   Genre: "Action",
// };

// showProperties(movieInfo);

// ------------------------------------------------------------

// sum of multiples of 3 and 5 upto limit

// function sum(limit) {
//   let sum = 0;
//   for (let i = 3; i <= limit; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum = sum + i;
//     }
//   }

//   return sum;
// }

// console.log(sum(15));

// -------------------------------------------------------------

// Grades calculation
// function calculateAverage(array) {
//   let sum = 0;
//   let average = 0;
//   for (let value of array) {
//     sum += value;
//   }
//   average = sum / array.length;

//   return average;
// }

// function calculateGrade(array) {
//   const average = calculateAverage(array);
//   if (average < 60) {
//     return "F";
//   } else if (average < 70) {
//     return "D";
//   } else if (average < 80) {
//     return "C";
//   } else if (average < 90) {
//     return "B";
//   } else {
//     return "A";
//   }
// }

// const marks = [80, 100, 85];

// console.log(calculateGrade(marks));

// --------------------------------------------------------------------

// prime or not

// function isPrime(number) {
//   let prime = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       prime = false;
//       break;
//     }
//   }
//   if (prime) console.log(number);
// }

// function showPrimes(limit) {
//   for (let i = 2; i <= limit; i++) {
//     isPrime(i);
//   }
// }

// showPrimes(20);

// ------------------------------------------------------------------------
//Objects
// Objects are real world entities which have some properties and methods to perform .It is a collection of key value pairs.

// let obj = {
//   firstName: "john",
//   age: 33,
// };

//Different ways to make object
// 1.using object literal
// let obj = {
//     firstName: "john",
//     age: 33,
// };

// 2.Using factory functions

// function createPerson(firstName, age) {
//   return {
//     firstName: firstName,
//     age: age,
//   };
// }

// const person1 = createPerson("harman", 22);
// console.log(person1);

// const person2 = createPerson("jack", 34);
// console.log(person2);

// 3.Using Constructor Function
// function Person(firstName, age) {
//   (this.firstName = firstName), (this.age = age);
//   return this;
// }

// const person1 = new Person("zack", 23);
// console.log(person1);

// const person2 = new Person("alex", 33);
// console.log(person2);

// when we use new operator three thing happen:
/*
1.a new empty object is created
2.it will set this to point to this object
3.and finally it will return that object from constructor function
*/

// -------------------------------------------------------------------------

//objects are dynamic
// const obj = {
//   firstName: "zack",
//   age: 23,
// };

// obj.location = "california";
// console.log(obj);
// delete obj.age;
// console.log(obj);

// we cannot reassign the object with entirely new object
// obj = { lastName: "smith" };
// console.log(obj);

//----------------------------------------------------------------------------

//Constructor Property
// every object in js has a built in constructor property which tells which function is used to create that object.
// the object literal has built using built using built-in object function.

//  const obj = {
//   firstName: "zack",
//   age: 23,
// };

// console.log(obj.constructor);

// -----------------------------------------------------------------------

//Functions are Objects
// In JS functions are internally objects.

// function Greet(name) {
//   console.log("Good Morning " + name);
// }

// const Greet1 = new Function(name, console.log("Good Morning " + name));

// console.log(Greet1);

// ----------------------------------------------------------------------------

// Primitive types or reference types
// primitive types:string,number,boolean,undefined,null,symbol,BigInt
// reference types:object,function,array

// Primitive types values are copied by their value
// reference types values are copied by their reference or address

// let x = 10;
// let y = x; //(copy of x value is transferred here)
// y++;
// console.log(x);
// console.log(y);

// let obj = {
//   value: 10,
// };

// let obj2 = obj; //(reference or address of obj is copied here)
// obj2.value = 15;

// console.log(obj.value);
// console.log(obj2.value);

// --------------------------------------------------------------------------

// enumerating properties of an object
// const obj = {
//   firstName: "zack",
//   age: 23,
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

//returns all keys of an object in an array
// for (let key of Object.keys(obj)) {
//   console.log(key);
// }

//to print each key,value in one go
// for (let entry of Object.entries(obj)) {
//   console.log(entry);
// }

//to check if an object has a property:
// if ("age" in obj) {
//   console.log("present");
// }

// -------------------------------------------------------------------------------

// cloning an object
// const obj = {
//   firstName: "zack",
//   age: 23,
// };

// const obj2 = {};

// 1.method
// for(let key in obj){
//     obj2[key] = obj[key];
// }
// console.log(obj2)

// 2.method
// Object.assign(obj2, obj);
// const obj2 = Object.assign({}, obj);
// console.log(obj2);

// 3.method
// spread operator
// const obj2 = {...obj};
// console.log(obj2)

// --------------------------------------------------------------------------------------

// garbage collection
// javascript engines have a garbage collector which automatically detects which varibles are no longer useful in our programand it automatically deallocates the memory ,unlike low level languages like C,C++ where we have to manually deallocate the momory.

// -------------------------------------------------------------------------------------
// strings

// let myStr = "hello how are you?";
// console.log(myStr.charAt(7));
// console.log(myStr.includes("are"));
// console.log(myStr.startsWith("h"));
// console.log(myStr.endsWith("y"));
// console.log(myStr.length);
// console.log(myStr.trim());
// console.log(myStr.split(" "));

// ------------------------------------------------------------------------------------

// template literals
// using template literals we can add dynamic data in our program
// const name = "zack";

// const Greet = `Hi ${name},Good Morning`;
// console.log(Greet);

// Date Object
// Date object is built in object in JS.With the help of Date object we can get the current Date.

// const date = new Date(60000); //returns time in 1000 milliseconds from 1970-01-01
// const date = new Date(); //returns current date and time
// console.log(date)
// date.setFullYear(2025)
// console.log(date.getFullYear());

// -------------------------------------------------------------------------

// objects Exercise
// 1.Address object
// const address = {
//   street: "street no.8",
//   city: "Amsterdam",
//   zipCode: 305874,
// };

// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

// showAddress(address);

// --------------------------------------------------------------

// 2.Factory and constructor function

//Factory function
// function address(street, city, zipCode) {
//   return {
//     street: street,
//     city: city,
//     zipCode: zipCode,
//   };
// }

// const address1 = address("street no.8", "amsterdam", 305874);
// console.log(address1);

//Constructor function
// function Address(street, city, zipCode) {
//   (this.street = street), (this.city = city), (this.zipCode = zipCode);
// }

// const address2 = new Address("street no.8", "amsterdam", 305874);
// console.log(address2);

// --------------------------------------------------------------------------------

// object equality
// function Address(street, city, zipCode) {
//   (this.street = street), (this.city = city), (this.zipCode = zipCode);
// }

// const address1 = new Address("street no.8", "amsterdam", 305874);
// const address2 = new Address("street no.8", "amsterdam", 305874);

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// -----------------------------------------------------------------------

// Blog post object

// const post = {
//   title: "My first blog",
//   body: "this is dummy text",
//   author: "anonymous",
//   views: 345,
//   comments: [
//     {
//       author: "zack",
//       body: "this is dummy text",
//     },
//     {
//       author: "mack",
//       body: "this is dummy text",
//     },
//   ],
//   isLive: true,
// };

// console.log(post.comments[1].author);

// --------------------------------------------------------------------------------

// Constructor Functions

// function Post(title, body, author) {
//   (this.title = title),
//     (this.body = body),
//     (this.author = author),
//     (this.views = 0),
//     (this.comments = []),
//     (this.isLive = false);
// }

// const pos1 = new Post("My first blog", "this is dummy text", "anonymous");
// console.log(pos1);

// ---------------------------------------------------------------------------

// price range object

// let priceRanges = [
//   {
//     label: "$",
//     toolTip: "Inexpensive",
//     minPerPerson: 0,
//     maxPerPerson: 10,
//   },
//   {
//     label: "$$",
//     toolTip: "Moderate",
//     minPerPerson: 11,
//     maxPerPerson: 20,
//   },
//   {
//     label: "$$$",
//     toolTip: "expensive",
//     minPerPerson: 21,
//     maxPerPerson: 30,
//   },
// ];

// console.log(priceRanges)

// -------------------------------------------------------------------------

// Array
// In JS Array is a data structure used to store elementscof different types at contiguous memory locations.

// Adding elements
// const arr = [4,5,2,1,10,9];

// arr.push("a","8"); to add elements at the end

// arr.unshift(10,1); to add elements at the beginning

// arr.splice(3,0,3)
// console.log(arr);

// -------------------------------------------------------------------------------

// Finding Elements(Primitive types)
// const arr = [4, 5, 2, 1, 10, , 2, 9];

// console.log(arr.indexOf(2)); returns the first occurence index of element

// console.log(arr.lastIndexOf(2)); returns the last occurence index of element

// console.log(arr.includes(11)); return true if given element is present in array else return false

// console.log(arr.indexOf(2,3)); second argument is from what index you want to start the search for element.This is Optional

// ---------------------------------------------------------------------------

// Finding Elements(Refrence types)
// const courses = [
//   {
//     id: 1,
//     name: "a",
//   },
//   {
//     id: 2,
//     name: "b",
//   },
// ];

// console.log(courses.includes({ id: 1, name: "a" })); return false bcz the object we pass here is differnt from the course object,they are stored in two differnt memory locations.when we check them using includes method it checks their refrences/memory location which is different.

// let result = courses.find(function (course) {  //find function is used with refrence types
//   if (course.name === "a") {
//     return true;
//   }
//   return false;

//   return course.name === "a";    both methods are same.this is shortcut
// });

// console.log(result);

// let result = courses.findIndex(function (course) {
//   return course.name === "b";
// });

// console.log(result);

// -------------------------------------------------------------------------

// Arrow functions
// let result = courses.find((course) => course.name === "a");

// console.log(result)

// -----------------------------------------------------------------------------

// Removing Elements

// const arr = [2, 4, 3, 1, 6];

// const last = arr.pop(); //removes element from end
// console.log(last);
// console.log(arr)

// const first = arr.shift(); //removes elements from start
// console.log(first)
// console.log(arr)

// const middle = arr.splice(2, 1); //removes element from middle
// console.log(middle);
// console.log(arr)

// ---------------------------------------------------------------------------------

// Emptying an array

// let arr = [3, 5, 1, 77, 22];
// let number = arr;

// solution 1
// this solution will only work if you declare array using let and if any other variable is refrencing to your array then it will not set the array in that variable.
// arr = [];
// console.log(arr);
// console.log(number);

//solution 2
// arr.length = 0;
// console.log(arr)

//solution 3
// console.log(arr.length)
// arr.splice(0, 5);
// console.log(arr);

// ------------------------------------------------------------------------

// combining and slicing arrays

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// console.log(combined);

// const sliced = combined.splice(2, 3);
// console.log(sliced);

// const first = [1, { id: 1, name: "a" }, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second); //[1, { id: 1, name: "a" }, 3,4,5,6]
// combined[1].id = 2;
// console.log(first);
// console.log(combined);

// -------------------------------------------------------------------------------

//using spread operator
// const combined = [...first, ...second];
// console.log(combined);
// copy of primitive values are made in new array but in case of refrence type their refernce/memory location is passed to new array

// ------------------------------------------------------------------------

// iterating an array
// const arr = [4, 1, 5, 6, 3, "4"];

// for(let value of arr){
//     console.log(value)
// }

// for (let index in arr) {
//   console.log(index, arr[index]);
// }

// arr.forEach(function (value, index) {
//   console.log(index, value);
// });

// -----------------------------------------------------------------------------

// joining arrays
// const arr = [6,4,9,8,3];

// // const joined = arr.join("-"); return string
// // console.log(joined)

// const str = "this is my string";

// const splited = str.split(" ");    //return array
// // console.log(splited)

// console.log(splited.join("-"));

// --------------------------------------------------------------------------

// sorting an array
// by default it sorts the elements  based on their unicode value.
// const arr = [3,2,5, 10, 8, 2, "A"];
// arr.sort();
// console.log(arr);

// arr.reverse();
// console.log(arr);

//to sort objects
// const arr = [
//   { id: 1, name: "science" },
//   { id: 2, name: "Chemistry" },
// ];

// arr.sort(function (a, b) {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();

//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });

// console.log(arr);

// ---------------------------------------------------------------------------------

// testing the elements of an array
// every() - checks if every element os array satisfies the condition,if any single element is not satisfying the consition ,then it return false.

// some() - checks if at least one element satisfies the given condition,if any single element follows the given condition it return true

// const numbers = [1, -2, -3, -4];

// console.log(
//   numbers.every(function (number) {
//     return number >= 0;
//   })
// );

//----------------------------------------------------------------------

//filtering an array

// const numbers = [1, -2, 3, 4];

// const filterd = numbers.filter(function (value) {
//   if (value >= 0) {
//     return false;
//   } else {
//     return true;
//   }
// });

// console.log(filterd);

// ------------------------------------------------------------------------------

// mapping an array

// const arr = [1, 2, 3, 4];

// const mapped = arr.map(function (value) {
//   return "<li>" + value + "</li";
// });

// console.log(mapped.join(" "));

// ----------------------------------------------------------------------------

// Reducing array
// const arr = [2, 5, 1, 3];

// let sum = 0;

// for (let value of arr) {
//   sum = sum + value;
// }

// const sum = arr.reduce(
//   (accumulator, currentValue) =>
//     accumulator + currentValue,0);
// console.log(sum);

// ----------------------------------------------------------------------------

// Array Exercises
// Exercise - 1
// function arrayFromRange(min, max) {
//   const res = [];
//   for (let i = min; i <= max; i++) {
//     res.push(i);
//   }
//   return res;
// }

// const result = arrayFromRange(-10, -19);
// console.log(result);

// ---------------------------------------------------------------------------------

// Exercise - 2
// includes() method implementation

// function includes(array, searchElement) {
//   for (let value of array) {
//     if (value === searchElement) {
//       return true;
//     }
//     // return false;
//   }
// }

// const arr = [3, 5, 1, 7, 2];

// console.log(includes(arr, 5));

// -----------------------------------------------------------------------------------

// Exercise -3
// Except function

// function except(arr, excluded) {
//   const res = [];
//   for (let value of arr) {
//     if (!excluded.includes(value)) {
//       res.push(value);
//     }
//   }
//   return res;
// }

// const arr = [3, 6, 1, 5, 2, 6];
// const result = except(arr, [6, 1]);

// console.log(result);

// ---------------------------------------------------------------------------

// exercise - 4
// moving an element

// const arr = [1, 2, 3, 4];

// function move(arr, moveFrom, moveTo) {
//   let res = [];
//   if (moveTo >= arr.length || moveTo < 0) {
//     return "Invalid Offset";
//   }

//   let temp = arr[moveFrom];
//   arr[moveFrom] = arr[moveTo];
//   arr[moveTo] = temp;

//   for (let i = 0; i < arr.length; i++) {
//     res[i] = arr[i];
//   }
//   return res;
// }

// const result = move(arr, 1, 2);
// console.log(result);

// ----------------------------------------------------------------------------

// exercise - 5
// count occurences

// function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let value of array) {
//     if (value === searchElement) count++;
//   }
//   return count;
// }

// const arr = [3, 6, 1, 7, 2];

// const result = countOccurences(arr, 5);
// console.log(result);

// -------------------------------------------------------------------------------

// using reduce

// function countOccurences(array, searchElement) {
//   return array.reduce(function (count, currentValue) {
//     if (currentValue === searchElement) {
//       count = count + 1;
//     }
//     return count;
//   }, 0);
// }
// const arr = [2, 4, 5, 1, 2, 5];
// const result = countOccurences(arr, 4);
// console.log(result);

// ----------------------------------------------------------------------------
// exercise - 6
// get max

// function getMax(arr) {
//   let max = 0;
//   for (let value of arr) {
//     if (value > max) max = value;
//   }
//   return max;
// }

// const arr = [4,2,5,1];

// const result = getMax(arr);
// console.log(result);

// ----------------------------------------------------------------------------

// using reduce

// function getMax(arr) {
//   if (arr.length === 0) return undefined;
//   return arr.reduce(
//     (acccumulator, currentValue) =>
//       currentValue > acccumulator ? currentValue : acccumulator,
//     0
//   );
// }

// const arr = [];
// const res = getMax(arr);
// console.log(res);

// ---------------------------------------------------------------------------

// exercise - 7
// movies

// const movies = [
//   { title: "a", releaseYear: 2018, rating: 4.5 },
//   { title: "b", releaseYear: 2018, rating: 4.1 },
//   { title: "c", releaseYear: 2017, rating: 3 },
//   { title: "d", releaseYear: 2018, rating: 6 },
// ];

// all the movies in 2018:rating>4
// sort them by their rating
//descending order
//pick their title

// const result = movies
//   .filter(function (value) {
//     return value.releaseYear === 2018 && value.rating > 4;
//   })
//   .sort(function (a, b) {
//     if (a.rating < b.rating) return 1;
//     if (a.rating > b.rating) return -1;
//     return 0;
//   })
// //   .map((element) => {
// //     return element.title;
// //   });

// console.log(result);

// ----------------------------------------------------------------------------------

// Functions
// function declaration

// function walk(){
//   console.log("walking...");
// }

// walk();

//anonymous function expression
// let walk = function () {
//   console.log("walking...");
// };

// walk();

// ---------------------------------------------------------------------------

// Hoisting
// Hoisting is a process in which function declarations are moved to the top of file,and as a result we can call the function before its declaration.
// It only works if we define our function using function declartion not in case of function expression.

//will work
// walk();

// function walk() {
//   console.log("walking...");
// }

// will not work
// walk();

// let walk = function () {
//   console.log("walking...");
// };

// -----------------------------------------------------------------------------

// arguments object
// in JS every funtion has a argument object which contains all arguments that we pass to the function.we can use this argument object if we have more number of argumments,so we don't have to recive it one by one.

// function sum() {
//   let total = 0;
//   for (let value of arguments) {
//     total += value;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

// ------------------------------------------------------------------------

// Rest Operator
// if we pass multiple arguments to our function then we can simply recieve it all at once using rest operator. it takes all the rest arguments and put them into array.

// function sum(...args) {
//   return args.reduce(function (sum, currentValue) {
//     return (sum += currentValue);
//   }, 0);
// }

// const result = sum(4, 3, 1, 6, 5, 4);
// console.log(result);

// ---------------------------------------------------------------------

// Default Arguments
// function sum(a,b=10){
// return a+b;
// }

// console.log(sum(3))

// ----------------------------------------------------------------------------
// getters and setters
// getters and setters are used to get or set the value of properties of an object.

// let person = {
//   firstName: "john",
//   lastName: "Smith",
//   setFullName: function (value) {
//     const fullName = value.split(" ");
//     this.firstName = fullName[0];
//     this.lastName = fullName[1];
//   },
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.getFullName());

// -------------------------------------------------------------------------

// error handling
// let person = {
//   firstName: "john",
//   lastName: "Smith",
//   setFullName: function (value) {
//     if (typeof (value) !== "string") {
//       throw new Error("Value must be a string");
//     }
//     const fullName = value.split(" ");
//     if (fullName.length < 2) {
//       throw new Error("Enter both firstname and lastname");
//     }
//     this.firstName = fullName[0];
//     this.lastName = fullName[1];
//   },
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// try {
//   person.setFullName("");
// } catch (e) {
//   console.log(e);
// }

// ------------------------------------------------------------------------
// local vs global scope
// if we deeclare a varible inside a block its scope is blocked scope
// if we declare a variable outside a block its scope is global scope.

// const pi = 3.14; //global scope

// function setPi() { //block scope
//   const pi = 3.144;
//   console.log(pi);
// }

// setPi();

// ----------------------------------------------------------------------------

// let vs var
// var -> var creates function scoped variables.variables created with var attached to window object automatically.
// let - > let create block scoped variables

// function func() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// func();

// ------------------------------------------------------------------------------

// this keyword
// this points to the object that is executing the function
// if a method is a part of an object ,this points to the object in which the method is.
// if a function is not part of an object,this points to the window object in browser or global object in node.

// const obj = {
//   name: "zack",
//   getName() {
//     console.log(this);
//   },
// };

// obj.getName();

// function func() {
//   console.log(this);
// }

// func();

// function Name(name) {
//   this.name = name;
//   console.log(this);
// }

// const res = new Name("zack"); //{}
// const res2 = new Name("mike");  //{}

// const obj = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title,tag);
//     },this);
//   },
// };

// obj.showTags();

// ---------------------------------------------------------------------------

// Exercise - 1

// function sum() {
//   let sum = 0;
//   for (let value of arguments) {
//     if (Array.isArray(value)) {
//       for (let i of value) {
//         sum += i;
//       }
//     } else {
//       sum += value;
//     }
//   }
//   return sum;
// }

// const result = sum(1, 2, 3, 4, 5, [2, 4, 5, 3]);
// console.log(result);

// ---------------------------------------------------------------------

// exercise - 2

// const circle = {
//     radius:1,
//     get area(){
//         return Math.PI * this.radius * this.radius;
//     }
// }

// // circle.radius = 2;
// // circle.area = 20;

// console.log(circle.area);

// -------------------------------------------------------------------------

// exercise - 3
// error handling
// function countOccurences(array, searchElement) {
//   if (!Array.isArray(array)) {
//     throw new Error("Please pass an array");
//   }
//   let count = 0;
//   for (let value of array) {
//     if (value === searchElement) count++;
//   }
//   return count;
// }

// const arr = [3, 6, 1, 7, 7, 2];
// try {
//   const result = countOccurences(1, 7);
//   console.log(result);
// } catch (e) {
//   console.log(e);
// }
