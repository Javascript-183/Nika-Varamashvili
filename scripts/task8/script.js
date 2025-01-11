// task1

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const p = document.querySelector("p");
const span = document.querySelector("span");

h1.style.color = "blue";

h2.style.backgroundColor = "blue";
h2.style.color = "white";

span.style.fontSize = "200%";

// task2
const tagsWithIds = document.querySelectorAll("[id]");
const tagsWithClassAlert = document.querySelectorAll(".alert");
const tagsWithClassStop = document.querySelectorAll(".alert.stop");
const tagsWithClassGo = document.querySelectorAll(".alert.go");

// 1.ნებისმიერ HTML ელემენტს, რომელიც Id სელექტორით იქნება მონიშნული მიეცით ყვითელი გარეკანის(background) ფერი.

tagsWithIds.forEach(element => {
    element.style.backgroundColor = "yellow";
});

// 2. ნებისმიერ ელემენტს, რომელსაც alert კლასი ექნება გაწერილი, მიანიჭეთ 1px ნაცრისფერი (gray) კედელი(border).
tagsWithClassAlert.forEach(el=> {
    el.style.border = "1px solid gray";
});

// 3. თუ რომელიმე HTML ელემენტს კლასს alert-თან ერთად ექნება კლასი stop გაწერილი, გახადეთ მისი ფერი წითელი.

tagsWithClassStop.forEach(el => {
    el.style.backgroundColor = "red";
});

// 4. თუ რომელიმე HTML ელემენტს კლასს alert-თან ერთად ექნება კლასი go გაწერილი, გახადეთ მისი ფერი მწვანე.
tagsWithClassGo.forEach(el => {
    el.style.backgroundColor = "green";
});

