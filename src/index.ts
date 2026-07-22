interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

const shanto: User = { name: "Shanto", age: 25 };
console.log(greet(shanto));




let userName: string = "Shanto";
let city: string = 'Sylhet';
let bio: string = `Full-stack developer from ${city}`; // template literal



let userName: string = "Shanto";
userName = 42; // ❌ Error: Type 'number' is not assignable to type 'string'



function greetUser(name: string): string {
  return `Hello, ${name}!`;
}

greetUser("Shanto"); // ✅ ঠিক আছে
greetUser(123); // ❌ Error, কারণ number পাঠানো হয়েছে যেখানে string আশা করা হয়েছে



function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

calculateTotal(100, 3); // ✅ 300
calculateTotal("100", 3); // ❌ Error, string পাঠানো যাবে না


function toggleUserStatus(isActive: boolean): string {
  return isActive ? "User is active" : "User is inactive";
}

toggleUserStatus(true); // ✅ "User is active"
toggleUserStatus("true"); // ❌ Error, string দেওয়া হয়েছে, boolean না


let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Shanto", "Rakib", "Karim"];

// অথবা generic syntax দিয়ে
let scores: Array<number> = [80, 90, 75];


let numbers: number[] = [1, 2, 3];
numbers.push("four"); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
numbers[0] = "one"; // ❌ Error, একই কারণে


interface User {
  name: string;
  age: number;
}

let users: User[] = [
  { name: "Shanto", age: 24 },
  { name: "Rakib", age: 26 },
];

users.push({ name: "Karim", age: 20 }); // ✅ ঠিক আছে
users.push({ name: "Invalid" }); // ❌ Error, কারণ age missing


let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];


let user: [string, number, boolean] = ["Shanto", 24, true];


let user: [string, number, boolean] = ["Shanto", 24, true]; // ✅ ঠিক আছে

let wrongOrder: [string, number, boolean] = [24, "Shanto", true]; 
// ❌ Error: Type 'number' is not assignable to type 'string' (প্রথম position-এ)

let wrongLength: [string, number, boolean] = ["Shanto", 24]; 
// ❌ Error: Source has 2 element(s) but target requires 3


let data: any = "hello";
data = 42; // ✅ কোনো error নেই
data = true; // ✅ এটাও ঠিক আছে
data = { name: "Shanto" }; // ✅ এটাও চলবে


function processData(data: any) {
  console.log(data.toUpperCase()); // TypeScript কোনো warning দেবে না
}

processData(42); // Runtime এ crash করবে: "data.toUpperCase is not a function"


let data: unknown = "hello";
data = 42; // ✅ যেকোনো value রাখা যায়, any-এর মতোই

console.log(data.toUpperCase()); // ❌ Error: Object is of type 'unknown'


let data: unknown = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ এখন safe, TypeScript জানে এটা string
}


function logMessage(message: string): void {
  console.log(message);
  return "done"; // ❌ Error: Type 'string' is not assignable to type 'void'
}