// ========================
// Part 1: Event Handling
// ========================
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent =
    "🎉 You clicked the button! Interactivity activated!";
});

// ========================
// Part 2: Interactive Features
// ========================

// 1. Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  document.getElementById("count").textContent = count;
});

// 3. Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// ========================
// Part 3: Form Validation
// ========================
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission
  let valid = true;

  // Clear old errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters.";
    valid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    valid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters long.";
    valid = false;
  }

  // Show success if valid
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Form submitted successfully!";
    this.reset(); // clear form
  }
});
