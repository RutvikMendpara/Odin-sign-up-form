const form = document.querySelector("#form");
const password = document.querySelector("#password");
const confPassword = document.querySelector("#conf-password");
const errorMessage = document.querySelector("#errorMessage");
const email = document.querySelector("#email");
const errorMail = document.querySelector("#errorMail");
const phoneNumber = document.querySelector("#phoneNumber");
const phoneMessage = document.querySelector("#phoneMessage");
const submit = document.querySelector("#submit");

confPassword.addEventListener("input", (e) => {
  if (password.value != confPassword.value) {
    errorMessage.innerHTML = "*Password do not match";
  } else {
    errorMessage.textContent = "";
  }
});

email.addEventListener("input", () => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    errorMail.textContent = "Invalid email address!";
  } else {
    errorMail.textContent = "";
  }
});

phoneNumber.addEventListener("input", () => {
  var phoneFormat = /[789][0-9]{9}/;
  if (!phoneNumber.value.match(phoneFormat)) {
    phoneMessage.textContent = "Invalid Phone Number!";
  } else {
    phoneMessage.textContent = "";
  }
});
