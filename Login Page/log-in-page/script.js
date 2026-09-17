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

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        window.location.href = "index.html";

    });

}

const googleBtn = document.getElementById("googleBtn");
const appleBtn = document.getElementById("appleBtn");

if (googleBtn) {
    googleBtn.addEventListener("click", function () {
        alert("Google login will be connected later.");
    });
}

if (appleBtn) {
    appleBtn.addEventListener("click", function () {
        alert("Apple login will be connected later.");
    });
}