const password = document.querySelector("#password");
const confPassword = document.querySelector("#conf-password");
const submit = document.querySelector("#submit");
const errorMessage = document.querySelector("#errorMessage");

confPassword.addEventListener("input", (e) => {
  //   e.preventDefault();
  if (password.value != confPassword.value) {
    errorMessage.innerHTML = "*Password do not match";
  } else {
    errorMessage.textContent = "";
  }
});
