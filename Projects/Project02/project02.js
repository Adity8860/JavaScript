const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const status = document.querySelector("#status");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.5) {
      status.innerHTML = "Underweight";
      status.style.color = "red";
    } else if (bmi >= 18.5 && bmi < 25) {
      status.innerHTML = "Normal weight";
      status.style.color = "green";
    } else if (bmi >= 25 && bmi < 30) {
      status.innerHTML = "Overweight";
      status.style.color = "orange";
    } else {
      status.innerHTML = "Obese";
      status.style.color = "red";
    }
  }
});
