interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

const shanto: User = { name: "Shanto", age: 25 };
console.log(greet(shanto));