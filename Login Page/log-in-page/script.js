// ========================================
// LOGIN PASSWORD
// ========================================

const loginPassword = document.getElementById("password");
const loginPasswordIcon = document.querySelector(".password-icon");

if (loginPassword && loginPasswordIcon) {

    loginPasswordIcon.addEventListener("click", function () {

        if (loginPassword.type === "password") {

            loginPassword.type = "text";

            loginPasswordIcon.classList.remove("fa-eye");
            loginPasswordIcon.classList.add("fa-eye-slash");

        } else {

            loginPassword.type = "password";

            loginPasswordIcon.classList.remove("fa-eye-slash");
            loginPasswordIcon.classList.add("fa-eye");

        }

    });

}


// ========================================
// LOGIN API
// ========================================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", async function () {

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const loginMessage =
            document.getElementById("loginMessage");

        // Check empty fields
        if (!email || !password) {

            loginMessage.textContent =
                "Please enter email and password.";

            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                // Save JWT token
                localStorage.setItem("token", data.token);

                loginMessage.textContent =
                    "Login successful!";

                console.log("User:", data.user);
                console.log("JWT Token:", data.token);

            } else {

                loginMessage.textContent =
                    data.message || "Login failed.";

            }

        } catch (error) {

            console.error("Login error:", error);

            loginMessage.textContent =
                "Cannot connect to server.";

        }

    });

}


// ========================================
// SIGNUP PASSWORD
// ========================================

const signupPassword =
    document.getElementById("signup-password");

const signupPasswordIcon =
    document.querySelector(".signup-password-icon");

if (signupPassword && signupPasswordIcon) {

    signupPasswordIcon.addEventListener("click", function () {

        if (signupPassword.type === "password") {

            signupPassword.type = "text";

            signupPasswordIcon.classList.remove("fa-eye");
            signupPasswordIcon.classList.add("fa-eye-slash");

        } else {

            signupPassword.type = "password";

            signupPasswordIcon.classList.remove("fa-eye-slash");
            signupPasswordIcon.classList.add("fa-eye");

        }

    });

}


// ========================================
// SIGNUP API
// ========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const firstName =
            document.getElementById("firstName").value.trim();

        const lastName =
            document.getElementById("lastName").value.trim();

        const email =
            document.getElementById("signup-email").value.trim();

        const password =
            document.getElementById("signup-password").value;

        const signupMessage =
            document.getElementById("signupMessage");


        // Check fields
        if (!firstName || !lastName || !email || !password) {

            signupMessage.textContent =
                "Please fill all fields.";

            return;
        }


        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/signup",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: `${firstName} ${lastName}`,
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();


            if (response.ok) {

                signupMessage.textContent =
                    "Account created successfully!";

                console.log("Created user:", data);

                // Clear form
                signupForm.reset();

            } else {

                signupMessage.textContent =
                    data.message || "Signup failed.";

            }

        } catch (error) {

            console.error("Signup error:", error);

            signupMessage.textContent =
                "Cannot connect to server.";

        }

    });

}


// ========================================
// GOOGLE BUTTON
// ========================================

const googleBtn =
    document.getElementById("googleBtn");

if (googleBtn) {

    googleBtn.addEventListener("click", function () {

        alert("Google login will be connected later.");

    });

}


// ========================================
// APPLE BUTTON
// ========================================

const appleBtn =
    document.getElementById("appleBtn");

if (appleBtn) {

    appleBtn.addEventListener("click", function () {

        alert("Apple login will be connected later.");

    });

}