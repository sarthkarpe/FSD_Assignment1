// Wait until the DOM loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const error = document.getElementById("error");

    form.addEventListener("submit", function (event) {

        event.preventDefault(); // Prevent page refresh

        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();

        error.innerText = "";
        error.style.color = "red";

        // Email validation pattern
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 1️⃣ Check if email is empty
        if (email === "") {
            error.innerText = "Email is required.";
            return;
        }

        // 2️⃣ Validate email format
        if (!emailPattern.test(email)) {
            error.innerText = "Please enter a valid email address.";
            return;
        }

        // 3️⃣ Check if password is empty
        if (password === "") {
            error.innerText = "Password is required.";
            return;
        }

        // 4️⃣ Password length check
        if (password.length < 6) {
            error.innerText = "Password must be at least 6 characters.";
            return;
        }

        // 5️⃣ Password must contain at least one number
        if (!/\d/.test(password)) {
            error.innerText = "Password must contain at least one number.";
            return;
        }

        // If all validations pass
        error.style.color = "green";
        error.innerText = "Login Successful!";

        // AJAX Example using fetch()
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