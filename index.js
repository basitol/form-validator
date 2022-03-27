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

//Get field name
const getError = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([userName, email, password, password2]);

  if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  }
});
