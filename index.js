const form = document.querySelector("form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const inn = document.querySelector(".inn");

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
  //   inn.innerText = message;
};

// Show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check email is valid
const isValidEmail = (email) => {
  var rgx =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return rgx.test(String(email).toLowerCase());
};

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (userName.value === "") {
    showError(userName, "Username is required");
  } else {
    showSuccess(userName);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Confirm Password");
  } else {
    showSuccess(password2);
  }
});
