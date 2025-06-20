const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("registerForm");

const updateBorder = () => {
  const match = password.value && password.value === confirmPassword.value;

  [password, confirmPassword].forEach((input) => {
    input.classList.remove("match", "mismatch");
    input.classList.add(match ? "match" : "mismatch");
  });
};

form.addEventListener("submit", (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault(); // zabrání odeslání, pokud hesla nesouhlasí
  }
});

[password, confirmPassword].forEach((input) =>
  input.addEventListener("input", updateBorder)
);
