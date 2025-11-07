"use strict";
// Must be placed at the beginning of the document
// Disallows any creation of global variables without "let" or "const" in front of them
// Any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error
// Deleting a variable, object or function is not allowed via "delete obj"
// Duplicating a parameter is disallowed
// If the script is declared in the HTML file with type="module", it is automatically in strict mode

// Common Values
// undefined - a variable that has been declared but not assigned a value
// null - a variable that has been declared but has been explicitly set to have no value
// NaN - Not a Number, usually the result of an invalid mathematical operation
// Infinity - a number that is greater than any other number
// -Infinity - a number that is less than any other number

let a;

//a = "My name is Atanas";
// a = 'My name is Atanas';
//a = 5;
// a = new Object(); // or "{}" (recommended)
//a = 5.456;
//a = "Atanas";

// console.log(a);
let res;

// res = `Uses the value of a via string interpolation, which is ${a}. String interpolation in js is marked with backticks instead of normal or double quotes and a dollar sign is put before the interpolated value!`;
// res = a.replace("is","was");
// res = a.split(' ');
//res = a.slice(3, 7);
// res = a.substring(3, 7);
// res = a[4];
// res = a.concat(a);
// res = a.startsWith("M");
// res = a.replaceAll(" ", "");
// res = a.includes("name");
// res = a.at(-1);
// res = a.charAt(3);
// res = a.indexOf("name");
// res = a.search("*n*"[1]);

// res = Number.isFinite(a);
// res = Number.isInteger(a);
// res = Number.isNaN(a);
// res = Number.parseInt("3");
// res = Number.parseInt("a");

// a.data = "My name is Atanas";
// a.id = 1;
// a.IsValid = true;

// res = a;
// res.id = 2;
// res.newData = "lol";

// res = Math.min(a, 3);
// res = Math.max(a, 3);
// res = Math.abs(a);
// res = Math.PI;
// res = Math.ceil(Math.PI);
// res++;
// res--;
// --res;
// res = (res % 3 === 0) ? true : false;
// if (res === true)
// {
//     res = 0;
//     console.log("Result is 0");
// }
// if (res == false) res = false;

// for (var i = 1; i <= 5; i++){
//     res += i;
// }

// while (res >= 0){
//     res -= 5;
// }

// if (res > 0) console.log("Impossible!");
// else if (res === 0) console.log("Zero?");
// else console.log("It is over zero!");

// if (res !== -6) console.log("It is " + res + " right now!");

// do{
//     res += 2;
// }
// while(res < -5);

// res = ["lol", 3, res];

// for (let i in res){
//     console.log(res[i]);
// }

//res = a.toFixed(2);
//res = Number("3a");

// if (!Number.isNaN(res))
// console.log(res);
// else console.log(typeof res);

// res = a[rand(0, a.length)];

// function sum(a, b) {
//   if (Number.isInteger(a) && Number.isInteger(b)) {
//     let sum = a + b;
//     document.getElementById("result").textContent = sum;
//   } else alert("Not a number!");
// }

// Random Function
// function rand(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// Inclusive Random Function
// function randInc(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//res = `My name is ${a}`;

// const obj1 = (a, b) => {
//     return a + b;
// }

// const obj2 = function (a, b) {
//     return Math.abs(a - b);
// }

// const obj3 = {
//     attr: obj1(1, 2),
//     obj:{
//         attr: obj2(1, 2)
//     },
//     func(){
//         return "class function";
//     },
//     func2: function(){
//         return "normal function";
//     },
//     func3: () => {
//         return "arrow funcion";
//     }
// }

// const inhr_Obj3 = Object.create(obj3); // Object Inheritance

// res = obj3;

// console.log(res.obj.attr);

// class Class1{
//     a;
//     b; // public
//     #c; // private
//     #d;
//     constructor(dValue){
//         this.a = 3; //"this" refers to the class, not the document
//         this.b = "lol";
//         this.#c = [this.a, this.b];
//         this.setD(dValue);
//     }
//     get c(){
//         return this.#c; //getter
//     }
//     set c (value){
//         this.#c = value; //setter
//     }
//     getD(){
//         return this.#d; //abstraction
//     }
//     setD (value){
//         this.#d = value; //abstraction
//     }
//     print(){
//         console.log("lol");
//     }
// }

// class inherited_Class1 extends Class1{
//     constructor(dValue){
//         super(dValue);
//         this.e = 5;
//     }
//     print(){
//         console.log("lol 2");
//     }
// }

// // res = new Class1(3);
// res = new inherited_Class1(3);

// console.log(res);
// res.print();

// a = {
//     name: "Atanas",
//     age: 17,
//     gender: "Male",
//     message: "I created this!",
//     talk: (msg) => { console.log(msg); },
//     hobbies: ["swimming", "programming"]
// }

// res = JSON.stringify(a); // Converts data to a JSON ("attr":"value") format. Doesn't sent functions!
// console.log(res);

// res = JSON.parse(res); // Converts JSON back to an object
// console.table(res); // Prints the values in a table

// const makeError = () => {
// try {
//     // Tries to execute an error-prone statement
//     throw new customError("Lol");
//     const a = "a";
//     a = "b";
//   } catch (error) {
//     // Decides what to do if it catches an error
//     console.warn(error.name); // Outputs it as a warning and only the name of the error.
//     console.error(error.message); // Outputs it as an error and only the message of the error.
//     console.info(error.stack); // Outputs it as info and the whole content of the error (and the information at which lines did it occur if its avaliable).
//   } finally {
//     // Always executes, no matter the result
//     console.log("Try-Catch check finished!");
//   }
// };

// makeError();

// function customError(message) {
//   // Custom Error
//   this.message = message;
//   this.name = "CustomError";
//   this.stack = `${this.name}: ${this.message}`;
// }

// const obj = {
//     type: "object",
//     name: "customObj",
//     id: 1,
//     ident: function () {
//         console.table(this.type, this.name, this.id);
//     },
//     data: ["data1", "data2", "data3"]
// };

// const arr = [1, "lol", true];

// const jsonObject = JSON.stringify(obj);
// const jsonArr = JSON.stringify(arr);

// Session Storage: Stores elements but only for the current session meaning if the website gets closed, the data gets deleted
// sessionStorage.setItem("Object", jsonObject);
// console.log('Object Saved!',obj);

// sessionStorage.setItem("Array", jsonArr);
// console.log("Array Saved!", arr);

// const getObj = JSON.parse(sessionStorage.getItem("Object"));
// console.log('Object Extracted!',getObj);

// const getArr = sessionStorage.getItem("Array"); // If data isn't avaliable, it returns null
// console.log('Array Extracted!',getArr);

// sessionStorage.removeItem("Array");
// sessionStorage.clear();

// // Local Storage: Stores elements on the user's computer meaning if the website gets closed, the data is saved locally.
// localStorage.setItem("Object", jsonObject);

// //sessionStorage.key(1);
// localStorage.key(2); // Accepts a zero-based index and returns the name of the key of the stored item at that position only for this website

// localStorage.length; // The count of elements in there
// sessionStorage.length;

// The following require the file to be set as a module in the HTML file with <script type="module" src="file.js"></script>
//import newDescribe from './export.js'; - default import
// import { print } from './export.js'; - named object import
// import {sum as jsTest_Sum, difference as jsTest_Difference, a as aImp, b} from './export.js'; - named import with alias
// import * as Functions from "./export.js"; - import all named objects as an object

// console.log(aImp, b);
// jsTest_Sum(1,2);
// //newDescribe();
// Functions.default('lol'); // Calls newDescribe()
// Functions.difference(3,10);
// console.log(typeof Functions); - returns the type of the object

// import UserClass from "./user.js";

// const user = new UserClass('email@email.com','Nasko');
// console.log(user.greetings());

// import data from "./json_data.js";

// Performs an action on each of the elements of the array without modifying the original values.
// data.forEach(x => console.log(x));

// data.forEach((post) => {
//     console.log(post.id);
// })

// Returns elements from an array based on a certain condition
// const posts = data.filter(post => {
//     return post.userId === 1;
// })

// console.log(posts);

// Performs an action on each of the elements of the array modifying the original values and returns the elements;
// const mappedPosts = posts.map(post => post.id * 10);

//console.log(mappedPosts);

// Performs an action on each of the elements of the array. You can access the grand total of all actions accumulated (prev), the current element's value (curr), the current element's position (pos) and the original array without any modifications (arr) and returns the elements;
// const reducedPosts = mappedPosts.reduce((prev, curr, pos, arr) => {
//     return prev += '\nsum: ' + curr + ' pos: ' + pos;
// });

// console.log(reducedPosts);

// DOM Manipulation

// Selecting HTML Elements
// You can select html elements by using either .getElementsByClassName(className)/Id(id) etc. or .querySelector(CSS_Selector)/querySelectorAll(CSS_Selector)
// querySelectorAll returns all elements while querySelector returns only the first match

// Creating HTML Elements
// You can create an HTML element by using document.createElement(HTMLElement)

// Event Listeners
// You can add them on components via .addEventListener(event, functionObj, callback)
// functionObj is a reference to the function, not calling it
// Example: "Sum" instead of "Sum(a, b)"

// const button = document.querySelector("button");
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   logic();
// });

// Transfering data across pages

// Way 1 - using href parameters

// page1.html
// const user = "John";
// window.location.href = `page2.html?name=${encodeURIComponent(user)}`;

// page2.html
// const params = new URLSearchParams(window.location.search);
// const name = params.get("name");
// console.log(name); // "John"

// Way 2 - using cookies

// page1.html
// document.cookie = "user=John; path=/";

// page2.html
// console.log(document.cookie); // "user=John"

// Way 3 - using Session or Local Storage

// Promises, async and await, thenables

// const myPromise = new Promise((resolve, reject) => {
//   const success = true; //* Simulate success or failure

//   if (success) {
//     resolve("Promise resolved successfully!");
//   } else {
//     reject("Promise rejected!");
//   }
// });

// Promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// The executor function is called immediately when the promise is created. It takes two arguments: resolve and reject.
// You call resolve(value) when the asynchronous operation is successful and you want to pass the result.
// You call reject(error) when the operation fails and you want to pass the error.
// You can attach handlers to the promise using the then() and catch() methods.
// The then() method is called when the promise is fulfilled, and it receives the resolved value as an argument.
// myPromise.then((value) => {
//   console.log(value); //* "Promise resolved successfully!"
// });
// //* The catch() method is called when the promise is rejected, and it receives the error as an argument.
// myPromise.catch((error) => {
//   console.error(error); //* "Promise rejected!"
// });

// Promises can be chained together using multiple then() calls. Each then() returns a new promise, allowing for sequential asynchronous operations.
// myPromise
//   .then((value) => {})
//   .then(() => {})
//   .catch((error) => {});

// Async functions are a more concise way to work with promises. They allow you to write asynchronous code that looks synchronous.
// async function myAsyncFunction() {
//   try {
//     const value = await myPromise; //* The await keyword pauses the execution of the async function until the promise is resolved or rejected.
//     console.log(value); //* "Promise resolved successfully!"
//   } catch (error) {
//     console.error(error); //* "Promise rejected!"
//   }
// }

// myAsyncFunction();

// The await keyword can only be used inside async functions. It makes the function wait for the promise to resolve and returns the resolved value.
// If the promise is rejected, an error is thrown, which can be caught using a try-catch block.
// Async functions always return a promise. If the function returns a value, it is wrapped in a resolved promise. If it throws an error, it is wrapped in a rejected promise.

// Fetch API

// The Fetch API provides a modern way to make network requests in JavaScript. It is built on promises and provides a more powerful and flexible feature set than the older XMLHttpRequest.
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {}) //* The fetch() function takes a URL as an argument and returns a promise that resolves to the Response object representing the response to the request.
//   .then((data) => {}) //* The Response object has several methods to read the response body, such as json(), text(), blob(), etc. These methods also return promises.
//   .catch((error) => {}); //* You can handle errors using the catch() method, which is called if the fetch operation fails (e.g., network error).

// You can also use async/await syntax with the Fetch API for cleaner and more readable code.
// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData();

// ADVANCED USAGE
// The Fetch API also allows you to customize the request by passing an optional second argument to the fetch() function. This argument is an object that can contain various options, such as method, headers, body, etc.
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST", //* HTTP method (GET, POST, PUT, DELETE, etc.)
//   headers: { "Content-Type": "application/json" }, //* Request headers
//   body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }), //* Request body (for POST, PUT, etc.)
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// METHOD: GET - Requests data from a specified resource
// METHOD: POST - Submits data to be processed to a specified resource
// METHOD: PUT - Updates a current resource with new data
// METHOD: DELETE - Deletes the specified resource
// METHOD: PATCH - Partially modifies a resource
// METHOD: HEAD - Same as GET but it transfers the status line and header section only
// METHOD: OPTIONS - Describes the communication options for the target resource

// HEADERS
// Headers are key-value pairs that provide additional information about the request or response. They can be used to specify the content type, authorization, caching, etc.

// Common request headers:
// 'Content-Type': Specifies the media type of the resource (e.g., 'application/json', 'text/html', etc.)
// 'Authorization': Contains credentials for authenticating the client with the server
// 'Accept': Specifies the media types that are acceptable for the response (e.g., 'application/json', 'text/html', etc.)
// 'User-Agent': Contains information about the user agent (browser) making the request

// Common response headers:
// 'Content-Length': Indicates the size of the response body in bytes
// 'Set-Cookie': Sets cookies that the client should store and send with subsequent requests to the same server
// 'Cache-Control': Specifies caching directives for the response

// HEADER: Content-Type - Indicates the media type of the resource
// - text/html - HTML document
// - text/css - CSS stylesheet
// - text/javascript - JavaScript file
// - application/json - JSON data
// - application/xml - XML data
// - multipart/form-data - Form data that includes files
// - application/x-www-form-urlencoded - Form data encoded as key-value pairs

// Sets
const set = new Set([1, 2, 3])
set.add(4)
set.add(5)
console.log(set)
set.add(5)
set.add(6)
// console.log(set)

// for (const x of set) {
//     console.log(x)
// }

// console.log(set instanceof Set)
// console.log(set.has(4))
// console.log(set.delete(3))
// console.log(set.values())
// set.clear()
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())
// console.log(set.size)
// set.forEach(item => console.log(item))

