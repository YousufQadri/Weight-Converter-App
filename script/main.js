let input = document.querySelector("#kgInput"),
  output = document.querySelector("#output");

output.style.display = "none";

kgInput.addEventListener("input", () => {
  let kg = input.value;
  if (kg != "" && kg != 0) {
    output.style.display = "block";

    document.querySelector("#grams").innerText = kg * 1000;
    document.querySelector("#ounces").innerHTML = kg * 2.205;
    document.querySelector("#pounds").innerHTML = kg * 35.274;
  } else {
    output.style.display = "none";
  }
});
