document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");

    // Get elements for cripto data
    const getInfoBtn = document.getElementById("getInfoBtn");
    const criptoInfo = document.getElementById("criptoInfo");


    function checkAuth() {
        const user = localStorage.getItem("loggedIn");
        if (user) {
            loginLink.style.display = "none";
            registerLink.style.display = "none";
            logoutBtn.style.display = "inline-block";
        } else {
            loginLink.style.display = "inline-block";
            registerLink.style.display = "inline-block";
            logoutBtn.style.display = "none";
        }
    }

    // register

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const name = document.getElementById("registerName").value.trim();
            const email = document.getElementById("registerEmail").value.trim();
            const password = document.getElementById("registerPassword").value.trim();
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
            // Validation checks
            if (name === "") {
                alert("გთხოვთ, შეიყვანოთ თქვენი სახელი!");
                return;
            }
            if (!emailRegex.test(email)) {
                alert("ელ. ფოსტის ფორმატი არასწორია!");
                return;
            }
            if (password.length < 6) {
                alert("პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს!");
                return;
            }

            const user = { name, email, password };
                    localStorage.setItem("usersData", JSON.stringify(user));
                    alert("რეგისტრაცია წარმატებულია!");
                    window.location.href = "login.html";

        });
    }

    // login    

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            
            const user = JSON.parse(localStorage.getItem("usersData"));
            if (user.email === email && user.password === password) {
                alert("შესვლა წარმატებულია!");
                localStorage.setItem("loggedIn", "true");
                window.location.href = "index.html";
            } else {
                alert("ელ. ფოსტა ან პაროლი არასწორია!");
            }
        });
    }

    checkAuth();

    // Logout functionality
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedIn");
        alert("წარმატებით გამოხვედით!");
        window.location.href = "login.html"; // Redirect to login page
    });

    checkAuth();

    getInfoBtn.addEventListener("click", function () {
        fetchTickerData();
        criptoInfo.style.display = "block";
    });

    async function fetchTickerData() {
        try {
            const response = await fetch("https://api4.binance.com/api/v3/ticker/24hr");
            const data = await response.json();
            
            const tableBody = document.querySelector("#tickerTable tbody");
            tableBody.innerHTML = ""; // Clear existing data

            data.slice(0, 10).forEach(ticker => {  
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${ticker.symbol}</td>
                    <td>${ticker.lastPrice}</td>
                    <td class="${parseFloat(ticker.priceChange) >= 0 ? 'green' : 'red'}">
                        ${ticker.priceChange} (${ticker.priceChangePercent}%)
                    </td>
                    <td>${ticker.highPrice}</td>
                    <td>${ticker.lowPrice}</td>
                    <td>${parseFloat(ticker.volume).toFixed(2)}</td>
                `;

                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
});
