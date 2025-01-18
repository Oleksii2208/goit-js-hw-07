const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (ev) => {
  const addValue = ev.target.value.trim();
  output.textContent = addValue || "Anonymous";
});
