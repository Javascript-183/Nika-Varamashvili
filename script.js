// 1.      შექმენით პროგრამა, რომელიც შეამოწმებს, არის თუ არა კონკრეტული ცვლადის მნიშვნელობა მასივი,
let myArray = [1, 2, 3, "four", "five", true, null, "last element"];
console.log(Array.isArray(myArray));

// 2.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის პირველ ელემენტს
console.log(myArray.at(0));

// 3.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის ბოლო ელემენტს.
console.log(myArray.at(-1));

// 4.      მოცემული გვაქვს შემდეგი მასივები:
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"]
//  შექმენით პროგრამ ა რომელიც გამოიტანს ფერებს შემდეგი თანმიმდევრობით:
//  "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

console.log(`1${o.at(1)} choice is ${color.at(0)}`);
console.log(`2${o.at(2)} choice is ${color.at(1)}`);
console.log(`3${o.at(-1)} choice is ${color.at(2)}`);

// 5. შექმენით პროგრამა, რომელიც შექმნის ობიექტს სტუდენტზე, რომელშიც იქნება ისეთი გასაღებები, 
//როგორიცაა: სახელი, გვარი, ა.შ მაგ: {sakheli: ‘mate’, ‘gvari’: ‘gotua’}, 
//მოახდინეთ ამ ობიექტზე მანიპულირება, მაგ. დაამატეთ ახალი მონაცემი გარდა ამისა წაშალეთ რაიმე მონაცემი და 
//ასევე არსებულ ობიექტში ჩაანაცვლეთ რაიმე ერთი მონაცემი მეორეთი, ეს მოქმედებები განახორციელეთ თანმიმდევრულად.

let students = {
    firstName: "Nika",
    lastName: "Varamashvili",
    address: "Tbilisi, Address1",
    children: [{
        firstName: "Aleqsandre",
        lastName: "Varamashvili",
        age: 18
    },
    {
        firstName: "Dachi",
        lastName: "Varamashvili",
        age: 9
    },
    {
        firstName: "Anastasia",
        lastName: "Varamashvili",
        age: 5
    }]
};

console.log(students);

students.isMarried = true;
console.log(students);

students["job"] = "Programmer";
console.log(students);

students.children.at(1).age = 10;
console.log(students);

delete students.job;
console.log(students);

