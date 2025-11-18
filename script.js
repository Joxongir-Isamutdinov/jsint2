let name = prompt("Ismingiz nima?").trim();
let birthYear = Number(prompt("Tug'ilgan yilingizni kiriting:"));

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
let randomID = Math.floor(Math.random() * 100000);

alert("Salom, " + name + "!");
alert("Sizning yoshingiz: " + age);
alert("Sizning ID raqamingiz: " + randomID);

console.log("Ism:", name);
console.log("Yosh:", age);
console.log("ID:", randomID);