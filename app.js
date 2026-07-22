// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB7FSWjvzqwMahwOY55KbVow6_Y8r8vbx8",
  authDomain: "kcc-registration.firebaseapp.com",
  projectId: "kcc-registration",
  storageBucket: "kcc-registration.firebasestorage.app",
  messagingSenderId: "719610715810",
  appId: "1:719610715810:web:cffe40efed97e992a641fb",
  measurementId: "G-48SK77DVMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form
const form = document.getElementById("registrationForm");
// Success Message
const successMessage = document.getElementById("successMessage");

// Submit Form
form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const teamName = document.getElementById("teamName").value.trim();
  const city = document.getElementById("city").value.trim();
  const captain = document.getElementById("captain").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const email = document.getElementById("email").value.trim();
  const utr = document.getElementById("utr").value.trim();

  try {

    await addDoc(collection(db, "registrations"), {
      teamName,
      city,
      captain,
      mobile,
      whatsapp,
      email,
      utr,
      createdAt: serverTimestamp()
    });
    alert("✅ Team Registered Successfully!");
        successMessage.style.display = "block";

    form.reset();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);

  } catch (error) {

    console.error("Firebase Error:", error);

    alert("Registration Failed!\n\n" + error.message);

  }

});
