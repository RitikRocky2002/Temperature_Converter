let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

celsius.addEventListener("input", () => {
  let c = parseFloat(celsius.value);
  fahrenheit.value = celsiusToFahrenheit(c);
  kelvin.value = celsiusToKelvin(c);
});

fahrenheit.addEventListener("input", () => {
  let f = parseFloat(fahrenheit.value);
  celsius.value = fahrenheitToCelsius(f);
  kelvin.value = fahrenheitToKelvin(f);
});

kelvin.addEventListener("input", () => {
  let k = parseFloat(kelvin.value);
  celsius.value = kelvinToCelsius(k);
  fahrenheit.value = kelvinToFahrenheit(k);
});

function celsiusToFahrenheit(c) {
  let output = c * (9 / 5) + 32;
  return output.toFixed(2);
}
function celsiusToKelvin(c) {
  let output = c + 273.15;
  return output.toFixed(2);
}
function fahrenheitToCelsius(f) {
  let output = (f - 32) * (5 / 9);
  return output.toFixed(2);
}
function fahrenheitToKelvin(f) {
  let output = (f - 32) * (5 / 9) + 273.15;
  return output.toFixed(2);
}
function kelvinToCelsius(k) {
  let output = k - 273.15;
  return output.toFixed(2);
}
function kelvinToFahrenheit(k) {
  let output = (k - 273.15) * (9 / 5) + 32;
  return output.toFixed(2);
}
