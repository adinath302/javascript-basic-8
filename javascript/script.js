
// syntax
// for ([initialization]; [condition]; [update]) {
//   // code block to be executed
// }

// Ex on for loop - 
// syntax - i= 0 ,until(condition), increment
// for (let i = 10; i < 21; i++){
//     console.log(i); 
// }

// // 
// for (let a= 0; a < 10; a++){
//     console.log(a);
// }

// reverse
// for(let b = 20; b > 0; b--){
// console.log(b); 
// }

// multiples 5 table
// let number = 5;
// for (let i = 1; i<=10; i++){
//     const result = number * i
// //   console.log(`${number} x ${i} = ${result}`);
//   console.log(` ${result}`);
// }

// summission - 1 - 100
// let sum = 0
// for (let i = 0; i <= 100; i++){
//   sum = sum + i 
// }
// console.log(sum);

// even odd filter - 
// for (let i = 0; i <=10;i++){
//     if(i % 2 ==0){
//         console.log(`${i} is even`);
//     }else {
//         console.log(`${i} is odd`);
//     }
// }

// array traversal
// let Name= ["Apple", "Banana", "Cherry","Apple", "Banana", "Cherry"]

// for (const na of Name){
//     console.log(na);
// }

// 
// for (let i = 0; i <= 100; i++){
// if(i % 3 == 0 && i % 5 == 0){
//     console.log('fizzBuzz');
// }else if(i % 3==0){
//     console.log('fizz');
// }else if(i % 5==0){
//     console.log('Buzz');
// }else{
//     console.log(i);
// }
// }

// factorial -
// function calculateFactorial(n) {
//   // Factorial is not defined for negative numbers.
//   if (n < 0) {
//     return "Factorial is not defined for negative numbers.";
//   }

//   // 0! and 1! are both 1.
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   // Initialize the result variable.
//   let result = 1;

//   // Loop from 1 up to and including n.
//   for (let i = 1; i <= n; i++) {
//     result *= i; // Equivalent to result = result * i;
//   }

//   // Return the final accumulated product.
//   return result;
// }

// // Example usage:
// console.log(calculateFactorial(5)); // Output: 120
// console.log(calculateFactorial(0)); // Output: 1
// console.log(calculateFactorial(10)); // Output: 3628800

//Nested Multiplication Table:
// const on = 1
// const tw = 2
// const th = 3

//     for (let j = 1; j <= 10; j++) {
//         const one = on * j;    
//         console.log(one);
//     }
//     for (let k = 1; k <= 10; k++) {
//         const two = tw * k;
//         console.log(two);
//     }
//     for (let l = 1; l <=10; l++){
//         const three = th * l;
//         console.log(three);
//     }


// reverse string in javascript 
// let str = "subhash"
// let newstring = ''
// for (let i = str.length - 1; i >=0; i--){
//     newstring += str[i]
// }

// console.log(newstring);

// while loop in js 
// practice questions on while loop 

// let i =0; 
// while(i <=10){
//     console.log(i);
//    i++    
// }

//
// let n = 5

// let result = 1

// while (n > 1){
//     result *= n;  
//     n--         
// }
// console.log(result);

//
// let n = 4
// let result = 1

// while (n > 1){
//     result *= n
//     n--
// }
// console.log(result);

//
// let n=1
// while(10>n){
//     console.log(n);
//     n++
// }

//
// n = 2
// while(n<=20){
//     console.log(n);
//     n +=2
// }
// console.log(n)

//

// let a = prompt("Enter a number");

// for (let i = 1; i <= a; i--){
//     console.log(i);
// }

// if(num >0){
    //     console.log("positive");
    // }else{
        //     console.log("negative");
        // }
        
        //

//         let num = 7
// if(num%2==0){
//     console.log('its even ');
// }else{
//     console.log('its odd');
// }

//
// let a = 4
// let b = 3

// if(a>b){
//     console.log('a is greater');
// }else{
//     console.log('b is greater');
// }

//

// function in js - 

// In JavaScript, functions are the "building blocks" of code. They allow you to group code together, name it, and run it whenever you need it. 

// To master functions, you need to understand "declaration", "parameters", "return values", and the" modern Arrow Function" syntax

// function log(){
//     console.log("hello world");
// }
// log();
//
// function sayhello(na){
//     console.log(` hello ${na}`);
// }
    
// sayhello("subhash")

//

// function add(a,b){
//     return a + b;
// }

// const result = add(3,2)
// console.log(result);

//

// function aoc(radius){

//     area = Math.PI * radius * radius
//     return area

// }

// const result = aoc(5)
// console.log(result);

//

// function findx (a,b,c){
//     if(a>b && a>c){
//         return a
//     }else if(b>c && b>a){
//         return b
//     }else{
//         return c
//     }
// }

// const resu = findx(3,12,7)
// console.log(resu);

//

// function ctof(c){
//     far = (9/5 * c) + 32
//     return  far 
// }

// const res = ctof(22)
// console.log(res);


// function ftoc(f){
//     cel = (f - 32)* 5/9 
//     return cel
// }

// const res = ftoc(71.6)
// console.log(res);

//

// Arrow function - 

// function multiply(a,b){
//     return a * b
// }

// multiply(2,4)

// const multipy=(a,b)=>{
//     return a * b
// }

//

// const is_even = (num)=> num % 2 === 0; // num is a parameter and return bollean value (true, false)

// console.log(is_even(2)); // i passed it a arrgument 

//

// let count = 0;

// function increment(){
//   count ++;
//   console.log(`the count is ${count}`)
// }

// increment()
// console.log(count);

// because when i assign 0 value to the variable count then the js will assign a memory location to that variable. and after that the function will just update the value of that memory locations value. and outside the function i just call the function to get the value and log the count to see the updated value of variable count of that function.

//

// function orderPizza(topping = "Cheese"){
//      console.log(`Ordering a ${topping} pizza.`)
// }

// console.log(orderPizza());

//

// function is_upper(name){
//     return name.toUpperCase()  // SUBHASH 
// }
  
// function processUserInput(name,callback){
//    const transformedName = callback(name); // get the uppercase version
//    console.log(transformedName);
//    return transformedName
   
// }


// console.log(processUserInput("subhash",is_upper)
// );

// map method -

//  let a =  [1,2,3,4,5,6,7,8,9,10]

//  const newArray = a.map(num=>num *2);

//  console.log(newArray);

//

// let names = ["alice", "BOB", "charlie"];
// // first i select the first letter by usign indexing and then i use next letter as it is by using slice method , 1 means it will don't take the first letter
// const newarr = names.map(name => name[0].toUpperCase()+ name.slice(1));

// console.log(newarr);

//

// let cel = [12,34,53,23,32,23];

// const tofan = cel.map(celcious => (celcious * 9/5) + 32);

// console.log(tofan)

// 

// let obj = [{id: 1, name: "A",age:12}, {id: 2, name: "B",age:23}]

// const newarr = obj.map(obj => obj.name);

// console.log(newarr);

//

// const newarr = obj.map(ob=>{
//     return {
//         ...ob, // Copy all existing properties using spread operator
//         isAdult: ob.age>18 // it will return true or false 
//     }
// })

// console.log(newarr);

//

// let a = [" apple ", "ORANGE", " baNaNa "];

// const newarr = a.map(word => word.trim().toLowerCase())

// console.log(newarr)

//

// let a = [10.5, 20, 35.75]

// const arr = a.map(num => num.toLocaleString(
//     'en-US',{
//         style:'currency',
//         currency:'USD'
//     }
// ))

// console.log(arr);

//

// let a = [{ id: 1, user_name: "jdoe" }, { id: 2, user_name: "asmith" }]

// const newarr = a.map(({user_name : username, ...rest }) => ({
//     username,
//     ...rest
// }) )

// console.log(newarr);

//


// const users = [
//   {
//     id: 1,
//     name: "Alex Johnson",
//     age: 28,
//     email: "alex.j@example.com",
//     isActive: true,
//     hobbies: ["photography", "hiking"],
//     lastLogin: "2024-03-01T10:30:00Z"
//   },
//   {
//     id: 2,
//     name: "Sarah Chen",
//     age: 32,
//     email: "schen88@example.com",
//     isActive: false,
//     hobbies: ["coding", "cycling"],
//     lastLogin: "2024-02-28T14:15:00Z"
//   },
//   {
//     id: 3,
//     name: "Marcus Wright",
//     age: 45,
//     email: "m.wright@example.com",
//     isActive: true,
//     hobbies: ["cooking", "jazz"],
//     lastLogin: "2024-03-02T08:45:00Z"
//   }
// ];

// const newarr = users.map((user => ({
//     name : user.name,
//     email: user.email
// })))

// console.log(newarr);

//

// const inventory = [
//   { product: "Laptop", price: 1200, taxRate: 8 },
//   { product: "Smartphone", price: 800, taxRate: 10 },
//   { product: "Headphones", price: 150, taxRate: 5 },
//   { product: "Monitor", price: 300, taxRate: 7 }
// ];


// const newarr = inventory.map(product=>{
// return{
//     ...product,
//     totalprice : product.price + product.taxRate
// }
// }
// )

// console.log(newarr)

//

// let a = [{ task: "A", status: "pending" }, { task: "B", status: "pending" }];
// let ta = "A"

// const newarr = a.map(obj => {
//     return{
//         ...obj,
//         status:obj.task === ta ? "Completed" : obj.status
//     }
// })

// console.log(newarr)

//

// let a =[1, 2, null, 4, undefined]

// const newarr = a.map(num => {
//     return {
//         ...num,
//         num : typeof num === "number" ? num * 10 : 0
//     }
// })

// console.log(newarr)

//

// let a = ["Home", "About", "Contact"]

// const newarr = a.map(item =>`<li>${item}</li>`)

// console.log(newarr)

//

// const classes = [ { name: "Math", students: ["Alice", "Bob"] },
//   { name: "History", students: ["Charlie", "David"] },
//   { name: "Art", students: ["Eve"] }];

//   const newarr = classes.map(obj => obj.students);

//   console.log(newarr);
  
//

// let a = ['a',"b","c","d","e"]

// const newarr = a.map((item,index)=>{
//     return{
//       index,  item
//     }
// })

// console.log(newarr);

//

// let orignal_prices = [1200,2299,3500,4500,7000,9000]

// const discounted_prices = orignal_prices.map(item => (10/100)*item);

// console.log(newarr);

// // const neworignal = discounted_prices.map(item => orignal_prices + item);

// // console.log(neworignal);

// //

// // Array.prototype.map() - the method you've been practicing, used to transform an array into another array.

// // filter - 

// // syntax - 
// // const newarr = orignal.filter((element,index,array)=>{
// //     return condition;
// // })

// // return true to keep or false to remove

// // element: The current item being checked.
// // index (optional): The position of the item (0, 1, 2...).
// // array (optional): The original array itself.

// //------------------------------------------------------------

// const numbers = [1,2,3,4,5,6];
// const evennumbers = numbers.filter(num => num % 2 === 0);

// // console.log(evennumbers)

// //------------------------------------------------------------

// const users = [
//   { name: "Abhinav", age: 17 },
//   { name: "Riya", age: 20 },
//   { name: "Karan", age: 25 }
// ];

// const adults = users.filter(user=> user.age >= 18);
// // console.log(adults);

// //------------------------------------------------------------

// const products = [
//   { name: "Keyboard", category: "Electronics", price: 1200 },
//   { name: "Coffee Mug", category: "Home", price: 500 },
//   { name: "Headphones", category: "Electronics", price: 6000 },
//   { name: "Mouse", category: "Electronics", price: 2500 }
// ];

// const newarr = products.filter(products => products.category === "Electronics" && products.price >= 1000 && products.price <= 5000)

// // console.log(newarr);

// //------------------------------------------------------------

// const students = [
//   { name: "Amit", grades: [85, 90, 78] },
//   { name: "Sara", grades: [35, 88, 92] },
//   { name: "John", grades: [60, 70, 65] }
// ];

// const fs = students.filter(stu => stu.grades[0] < 40 || stu.grades[1] < 40 || stu.grades[2] < 40);

// // console.log(fs);

// //------------------------------------------------------------

// const use = [
//   { id: 1, name: "Alice", status: "active" },
//   { id: 2, name: "Bob", status: "inactive" },
//   { id: 3, name: "Charlie", status: "active" }
// ];

// const newuse = use.filter(us => us.status === 'active');

// // console.log(newuse);

// //------------------------------------------------------------

// const numbers1 = [1, 2, 2, 3, 4, 4, 5, 1];

// const newar = numbers1.filter((value,index,array)=>{
//   // console.log("value",value);
//   // console.log("index",index);
//   // console.log("array",array);
//   return array.indexOf(value)=== index;
// })

// console.log(newar);

//------------------------------------------------------------

// const listA = [1, 2, 3, 4, 5];
// const listB = [3, 4, 5, 6, 7];

// const newlist = listA.filter(num => listB.includes(num));

// console.log(newlist);

//------------------------------------------------------------
// REDUCER - array method

// const result = array.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initialValue);

//------------------------------------------------------------
// const products = [
//   { name: "iPhone", category: "Electronics" },
//   { name: "Sofa", category: "Furniture" },
//   { name: "Macbook", category: "Electronics" },
//   { name: "Chair", category: "Furniture" }
// ];

// const grouped = products.reduce((acc, product) => {
//   // 1. Get the category (e.g., "Electronics")
//   const { category, name } = product; // destructure the object

//   // 2. If the category doesn't exist in our object yet, create an empty array
//   if (!acc[category]) {
//     acc[category] = [];
//   }

//   // 3. Push the product name into that category's array
//   acc[category].push(name);

//   return acc;
// }, {});

// console.log(grouped);


//------------------------------------------------------------

const fruitBasket = ["apple", "banana", "cherry", "apple", "apple", "banana"];

// Desired Output: { apple: 3, banana: 2, cherry: 1 }

const countFruits = fruitBasket.reduce((acc, fruit)=>{
    acc[fruit] = acc[fruit] ? acc[fruit] + 1 : 1;
    return acc
},{})

// console.log(countFruits);

//------------------------------------------------------------

const nested = [[1, 2], [3, 4, 5], [6]];

// const newarr = nested.reduce(item=> item.flat(),[]);
const newarr = nested.flat();

// console.log(newarr);

//------------------------------------------------------------

const cart = [
  { item: "Bread", price: 40, quantity: 2 },
  { item: "Milk", price: 30, quantity: 3 },
  { item: "Eggs", price: 10, quantity: 12 }
];

// Desired Output: 290 ( (40*2) + (30*3) + (10*12) )
 
const newcart = cart.reduce((acc, item)=> acc + item.price * item.quantity,0);

// console.log(newcart);

//------------------------------------------------------------

const players = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 }
];

// Desired Output: { name: "Bob", score: 92 }

//------------------------------------------------------------

const fruits = ["apple", "banana", "cherry", "apple", "apple", "banana"];

// console.log(typeof(fruits));
const num = new Array(1,23,4,4)
// console.log(typeof(num));

// console.log(fruits[0]);

// console.log(fruits[0]= "mango");
// console.log(fruits);

//------------------------------------------------------------
const user = {
    name:"alice",
    age:25,
    greet: function(){
        console.log("hello, my name is " + this.name);
    }
}

console.log(user.name); // dot notation : 'Alice'
console.log(user['age']); // Bracket notation :25
user.greet(); // calling a method : "Hello, my name is alice"


//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------