// Get DOM elements
const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-display");
const toggleModeBtn = document.getElementById("mode-toggle");
const body = document.body;

// Character sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~<>?/|";

// Generate password
function generatePassword() {
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;
  const length = parseInt(lengthSlider.value);

  let characterPool = "";

  if (includeUppercase) {
    characterPool += uppercaseLetters;
  }
  if (includeLowercase) {
    characterPool += lowercaseLetters;
  }
  if (includeNumbers) {
    characterPool += numbers;
  }
  if (includeSymbols) {
    characterPool += symbols;
  }

  if (characterPool === "") {
    passwordField.value = "Select options";
    return;
  }

  let generatedPassword = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    generatedPassword += characterPool[randomIndex];
  }

  passwordField.value = generatedPassword;
}

// Copy to clipboard
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordField.value);
  copyBtn.textContent = "✅";
  setTimeout(function () {
    copyBtn.textContent = "📋";
  }, 1500);
});

// Update length display
lengthSlider.addEventListener("input", function () {
  lengthDisplay.textContent = lengthSlider.value;
});

// Toggle dark/light mode
toggleModeBtn.addEventListener("click", function () {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  if (body.classList.contains("light")) {
    toggleModeBtn.textContent = "☀";
  } else {
    toggleModeBtn.textContent = "🌙";
  }
});

// Generate on button click
generateBtn.addEventListener("click", generatePassword);