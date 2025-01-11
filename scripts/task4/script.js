// 1.	შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// // using for() loop

// let numbers = [1,2,3,4,5,6,7,8,9,10];
let txt = "";

// for(let i = 2; i < numbers.length; i+=3){
//     txt += numbers[i] + ", ";
// }

// alert("using for() loop: " + txt);

// // using while() loop
// let i = 2;
// txt = "";

// while(i < numbers.length){
//     txt += numbers[i] + ", ";
//     i+=3;
// }

// alert("using while() loop: " + txt);

// 2.	შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// //--------------- with for() loop ----------------
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// var index = numbers.length - 1;

// for(let i = index; i >= 0; i--){
//     txt += numbers[i] + ", ";
// }

// alert("using for() loop: " + txt);

// //--------------- with while() loop ----------------
// txt = "";
// while(index >= 0){
//      txt += numbers[index] + ", ";
//      index--;
// }
// alert("using while() loop: " + txt);

// 3.	მოცემული მასივიდან ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

// let names = ['John', 'Nick', 'Bob', 'Mary', 'Sue', 'Bob', 'Ann'];
// let temp = [];

// for(let i = 0; i < names.length; i++){
//     if(names[i] == 'Bob')
//         continue;    
//     temp.push(names[i]);
// }

// alert("using for() loop: " + temp);

// let i = 0;
// temp = [];

// while(i < names.length){    
//     if(names[i] == 'Bob')
//     {
//         i++;
//         continue;
//     }

//     temp.push(names[i])
//     i++;
// }
// alert("using while() loop: " + temp);

// let txtNames = names.toString().replace(/bob/gi,"").split(',').filter(item=>item !== "");
// alert("using methods and without loop: " + txtNames);

// 4.	ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

// let result = 1;
// alert(fun(5,3));

// function fun(number,power){
//     for(let i = 1; i <= power; i++)       
//         result *= number;
    
//     return result;
// }

// let i= 1;
// result = 1;

// alert(funWithWhile(7,2));
// function funWithWhile(number,power){
//     while(i<=power){
//         result *= number;
//         i++;
//     }
//     return result;
// }


// 5.შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

// let startNum = 1, endNum = 100;
// let result = [];

// while(startNum <= endNum){
//     result.push(checkNumber(startNum));
//     startNum++;
// }

// alert(result.join(', '));

// function checkNumber(number){
//     if(number % 3 === 0 && number % 5 === 0)
//         number = "FizzBuzz";

//     else if(number % 3 === 0)
//         number = "Fizz";

//     else if(number % 5 === 0)
//         number = "Buzz";

//     else
//         number = number;

//     return number;
// }

// 6.	შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

// let startNumber = 1, factResult = 1;
// alert(factorialCalculator(5));

// function factorialCalculator(number){
//     // while(startNumber <= number){
//     //     factResult *= startNumber;
//     //     startNumber++;
//     // }

//     for(let i = 1; i <= number; i++){
//         factResult *= i;
//     }
//     return factResult;
// }

// 7.	შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

// let text = "javascript";
// alert(text.at(0).toUpperCase().concat(text.slice(1)));
// alert(text.at(0).toUpperCase().concat(text.substring(1)));

// 8.	შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => 
// რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.
// alert(blankStringChecker("1"));

// function blankStringChecker(testString){
//     let result = testString === "" ? "this string is blank" : "this string is not blank";
//     return result;
// }

// 9.	შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => 
// თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
// let resultArr = stringToArray("Hello, World!");
// alert(resultArr);

// function stringToArray(testString){
//     let arr = testString.split(' ');
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i].replace(/[,!]/g,'').trim();
//     }
//     return arr;
// }

// 10.	შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: 
// მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, 
// თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

// let email = "beqa.beqauri@gmail.com";
// alert(emailCover(email));

// function emailCover(email){
//     let indexOfFirstDot = email.indexOf(".");
//     let indexOfMailNote = email.indexOf("@");
//     let strToChange = email.substring(indexOfFirstDot + 1,indexOfMailNote);
//     let strChangeFrom = '.'.repeat(indexOfMailNote - indexOfFirstDot);
//     return email.replace(strToChange,strChangeFrom);
// }

// 11.	შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

// let txtToCheck = "some sentence for checking";
// var resultArr = findLongestWord(txtToCheck);
// let result = "";
// for(let el of resultArr){
//     result += el + " ";
// }

// alert(result);

// function findLongestWord(txt){
//     let arr = txt.split(' ');
//     let longestEl = arr[0].length;
//     let longestWord = arr[0];

//     for(let i = 1; i< arr.length; i++){
//         if(arr[i].length > longestEl)
//         {
//             longestEl = arr[i].length;
//             longestWord = arr[i];
//         }
//     }

//     return [longestWord,longestEl];
// }

// 12.	შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, 
// ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით:
// add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის:
// ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით

let calculator = {num1: 10, num2: 500};
calculator.add = function(){
    return this.num1 + this.num2;
}

calculator.substract = function(){
    return this.num1 - this.num2;
}

calculator.multiply = function(){
    return this.num1 * this.num2;
}

calculator.division = function(){
    return this.num2 === 0 ? this.num1 / this.num2 : this.num2 / this.num1;
}

let addResult = calculator.add();
let substractResult = calculator.substract();
let multiplyResult = calculator.multiply();
let divisionResult = calculator.division();

alert(`sum: ${addResult}, substract: ${substractResult}, multiply: ${multiplyResult}, division: ${divisionResult}`);

