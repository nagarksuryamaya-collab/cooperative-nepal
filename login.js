// Firebase v10 (MODULAR)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBbVltJqfky8I0-vwfi1XqxZXAoGxXcVVU",
  authDomain: "cooperative-nepal.firebaseapp.com",
  projectId: "cooperative-nepal",
  appId: "1:3919502964:web:e79ce96a1abae499b27b21"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Role detect
const params = new URLSearchParams(window.location.search);
const role = params.get("role") || "member";

document.getElementById("loginTitle").innerText =
  role === "admin" ? "Admin Login" : "Member Login";

// 🔐 LOGIN FUNCTION
window.login = function () {
  const email = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  if (!email || !password) {
    alert("Email र Password हाल्नुहोस्");
    return;
  }

  if (role === "admin") {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "admin.html";
      })
      .catch(error => {
        alert(error.message);
      });
  }
};
