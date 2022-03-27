const form = document.querySelector("form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// Show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check email is valid
const checkMail = (input) => {
  const rgx =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  if (rgx.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
  //   return rgx.test(String(email).toLowerCase());
};

// Check Required
const checkRequired = (inputArr) => {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getError(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// Check length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getError(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getError(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

// Check password
const checkPassword = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  } else {
    showSuccess(input1, input2);
  }
};

//Get field name
const getError = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([userName, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
  checkMail(email);
  checkPassword(password, password2);
});
