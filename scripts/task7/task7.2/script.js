const showButton = document.getElementById("showBtn");
const hideButton = document.getElementById("hideBtn");
const content = document.getElementById("content");

showButton.addEventListener('click', ()=> {
    showButton.style.display = "none";
    hideButton.style.display = "block";
    content.style.display = "block";
});

hideButton.addEventListener('click',()=> {
    showButton.style.display = "block";
    hideButton.style.display = "none";
    content.style.display = "none";
});