// Wait until the DOM loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const error = document.getElementById("error");

    form.addEventListener("submit", function (event) {

        event.preventDefault(); 

        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();

        error.innerText = "";
        error.style.color = "red";

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        
        if (email === "") {
            error.innerText = "Email is required.";
            return;
        }

        // 2️⃣ Validate email format
        if (!emailPattern.test(email)) {
            error.innerText = "Please enter a valid email address.";
            return;
        }

        if (password === "") {
            error.innerText = "Password is required.";
            return;
        }

       
        if (password.length < 6) {
            error.innerText = "Password must be at least 6 characters.";
            return;
        }

        if (!/\d/.test(password)) {
            error.innerText = "Password must contain at least one number.";
            return;
        }

        error.style.color = "green";
        error.innerText = "Login Successful!";

        
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Data sent successfully:", data);
        })
        .catch(err => {
            console.log("Error:", err);
        });

    });

});
