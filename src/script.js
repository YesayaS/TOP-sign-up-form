const signupForm = document.getElementById("signup_form");

signupForm.addEventListener("submit", (event) => {
  resetInput();
  let isFilled = true;
  document.querySelectorAll(".form-container").forEach((form) => {
    const input = form.querySelector("input");
    if (input.value === "") {
      const errorMessage = document.createElement("div");
      errorMessage.classList.add("error-text");
      errorMessage.innerHTML = "*Required";
      form.appendChild(errorMessage);
      input.classList.add("error-input");
      isFilled = false;
    }
  });
  const isPhoneNumber = validatePhoneNumber();
  const isPassword = validatePassword();
  const isConfirmPassword = validateConfirmPassword();
  if (isFilled && isPhoneNumber && isPassword && isConfirmPassword) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
    const validForm = document.querySelector("#valid-form");
    validForm.innerHTML = "Account Registered!";
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

function validatePhoneNumber() {
  const number = document.getElementById("phone_number");
  const numberParent = number.parentNode;
  const errorMessage = document.createElement("div");
  const pattern = /^\d{10,}/;
  if (!pattern.test(number.value) && number.value !== "") {
    errorMessage.innerHTML = "Please use correct phone number";
    errorMessage.classList.add("error-text");
    numberParent.appendChild(errorMessage);
    number.classList.add("error-input");
    return false;
  }
}

function validatePassword() {
  const password = document.getElementById("password");
  const passwordParent = password.parentNode;
  const errorMessage = document.createElement("div");
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}/;
  const isValid = pattern.test(password.value);
  if (!isValid && password.value !== "") {
    errorMessage.innerHTML =
      "*Password should be<br /> At least 8 characters <br /> Has Lowercase <br /> Has Uppercase <br /> Has Symbol <br /> Has Number";
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
