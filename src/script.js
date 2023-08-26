const signupForm = document.getElementById("signup_form");

const createAccount = document.getElementById("create_account");

console.log(signupForm);

signupForm.addEventListener("submit", (event) => {
  resetInput();
  isPhoneNumber = validateConfirmPassword();
  isPassword = validatePassword();
  if (isPassword && isConfirmPassword) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
  } else this.onsubmit = false;
});

function resetInput() {
  document.querySelectorAll(".error-text").forEach((tag) => {
    tag.remove();
  });
  document.querySelectorAll(".error-input").forEach((tag) => {
    tag.classList.remove("error-input");
  });
}

function validatePassword() {
  const password = document.getElementById("password");
  const passwordParent = password.parentNode;
  const errorMessage = document.createElement("div");
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}/;
  const isValid = pattern.test(password.value);
  if (!isValid) {
    errorMessage.innerHTML =
      "Password should be<br /> At least 8 characters <br /> Has Lowercase <br /> Has Uppercase <br /> Has Symbol <br /> Has Number";
    errorMessage.classList.add("error-text");
    passwordParent.appendChild(errorMessage);
    password.classList.add("error-input");
  }
  return isValid;
}

function validateConfirmPassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const confirmPasswordParent = confirmPassword.parentNode;
  const errorMessage = document.createElement("div");
  if (password.value !== confirmPassword.value) {
    errorMessage.innerHTML = "Password doesn't match!";
    errorMessage.classList.add("error-text");
    confirmPasswordParent.appendChild(errorMessage);
    confirmPassword.classList.add("error-input");
    return false;
  }
  return true;
}
