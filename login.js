import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbVltJqfky8I0-vwfi1XqxZXAoGxXcVVU",
  authDomain: "cooperative-nepal.firebaseapp.com",
  projectId: "cooperative-nepal",
  storageBucket: "cooperative-nepal.firebasestorage.app",
  messagingSenderId: "3919502964",
  appId: "1:3919502964:web:e79ce96a1abae499b27b21"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// role detect
const params = new URLSearchParams(window.location.search);
const role = params.get("role") || "member";

document.getElementById("loginTitle").innerText =
  role === "admin" ? "Admin Login" : "Member Login";

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email र Password हाल्नुहोस्");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "admin.html";
    })
    .catch(error => {
      alert(error.message);
    });
};
