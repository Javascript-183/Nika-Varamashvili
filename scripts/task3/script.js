// 1.	შექმენით პროგრამა, რომელიც რიცხვის კვადრატს იანგარიშებს

const num = 2.5;

function calcSquareOfNumber(num){
    return Math.pow(num,2);
}

console.log(`the square of ${num} is ${calcSquareOfNumber(num)}`);

// 2.	შექმენით პროგრამა, რომელიც ცელსიუსში მიწოდებულ ტემპერატურას გადაიყვანს ფერენჰეიტში, 1°C ტოლია 33.8°F -ის. (1°C × 9/5) + 32 = 33.8°F	

let celsius = 1;

function toFahrenheit(celsius){
    return celsius * 9/5 + 32;
}

console.log(`${celsius} celsius to fahrenheit is : ${toFahrenheit(celsius)} fahrenheit`);

// 3.	შექმენით პროგრამა, რომელიც შეამოწმებს არის თუ არა კონკრეტული რიცხვი მოქცეული მომხმარებლის მიერ შეყვანილ დიაპაზონში, ფუნქციამ უნდა მიიღოს სამი პარამეტრი, 1. რიცხვი, 2. დიაპაზონის საწყისი რიცხვი, 3. დიაპაზონის ბოლო რიცხვი.

function checkNumberRange(checkNum, startNum, endNum){
    if(checkNum >= startNum && checkNum <= endNum)
        console.log(`${checkNum} is in the range [${startNum}...${endNum}]`);

    else{
        console.log(`${checkNum} is out of range!`);
    }
}

checkNumberRange(66,1,6);

// 4.	შექმენით პროგრამა, რომელიც დაადგენს მომხმარებლის მიერ შეყვანილი წელი ნაკიანია თუ არა, თუ ნაკიანია უნდა გამოუტანოთ ეკრანზე, რომ მოცემული წელი ნაკიანია და თუ არა მაგ შემთხვევაში უნდა გამოიტანოთ რომ წელი არ არის ნაკიანი.
function checkLeapYear(year){
    if(year % 4 == 0){
        console.log(`${year} is a leap year;`);
    }

    else{
        console.log(`${year} is not a leap year;`);
    }
}

checkLeapYear(2024);

// 5.	შექმენით კალკულატორი, რომელიც შედგება შემდეგი ნაწილებისაგან: მომხმარებელს უნდა შეეძლოს სისტემაში მონაცემების შეტანა prompt-ის მეშვეობით, ეს მონაცემები უნდა იყოს: 
// 1. რიცხვი 1,
// 2. რიცხვი 2,
// 3. მოქმედება
// პირობითი ოპერატორების მეშვეობით დაადგინეთ თუ რა მოქმედება შეიტანა მომხმარებელმა და მოახდინეთ შესაბამისი კალკულაცია.
// მაგ. თუ რიცხვი 1: 10, რიცხვი 2: 23 ხოლო მოქმედება არის მიმატება(+) მაშინ:
// 10+23=33-ის, ანუ გამოგაქვთ 33;

const opNotes = ['+','-','*','/'];
let result = 0;
let terminateSymbol = "";

while(terminateSymbol.toLowerCase() != 'x')
{
    let num1 = prompt("Enter number1");

    if(isNaN(Number(num1))){

        while(isNaN(Number(num1))){
            alert("num1 is not in correct format. Enter again!");
            num1 = prompt("Enter number1");
        }
    }
    
    let ops = prompt("Enter operation note: +, -, *, /");
    if(!opNotes.includes(ops)){
        while(!opNotes.includes(ops)){
            alert("enter correct note from next list: +, -, *, /");
            ops = prompt("Enter operation note: +, -, *, /");
        }
    }

    let num2 = prompt("Enter number2"); 
    if(isNaN(Number(num2))){
        while(isNaN(Number(num2)))
        {
            alert("num2 is not in correct format. Enter again!");
            num2 = prompt("Enter number2"); 
        }
    }

    alert(`${num1} ${ops} ${num2} = ${opsResult(num1,ops,num2)}`);
    terminateSymbol = prompt("to continue calculation enter any symbol or 'X' to terminate the program");
}

function opsResult(num1,ops,num2){
    switch(ops){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;        
        case '*':
            result = num1 * num2;
            break;        
        case '/':
            result = num1 / num2;
            break;        
    }

    return result;
}

