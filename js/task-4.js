const form = document.querySelector(".login-form");

form.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(ev) {
  ev.preventDefault();
  const login = ev.target.elements.email.value;
  const password = ev.target.elements.password.value;

  if (login === "" || password === "") {
    return console.log("All form fields must be filled in");
  }
  const formData = new FormData(ev.target);
  const data = {
    email: formData.get("email").trim(),
    password: formData.get("password").trim(),
  };
  console.log(data);
  form.reset();
}
