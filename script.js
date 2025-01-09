// @ts-check
let fName = prompt("Enter your first name: ");
let lName = prompt("Enter your last name: ");
let birthYear = prompt("Enter your birth year: ");
let place = prompt("Enter your location: ");
let age = 2024 - Number(birthYear);

alert(`გამარჯობა ${fName} ${lName},\nმიხარია რომ უკვე ${age} წლის ხარ\nდა ${place} ცხოვრობ.`);