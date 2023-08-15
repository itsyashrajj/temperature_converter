const inputTemp = document.getElementById("inputTemp");
const fromUnit = document.getElementById("fromUnit");
const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

inputTemp.addEventListener("input", updateResults);
fromUnit.addEventListener("change", updateResults);

function updateResults() {
  const temperature = parseFloat(inputTemp.value);

  if (fromUnit.value === "celsius") {
    celsiusResult.textContent = `${temperature} °C`;
    fahrenheitResult.textContent = `${(temperature * 9/5) + 32} °F`;
    kelvinResult.textContent = `${temperature + 273.15} K`;
  } else if (fromUnit.value === "fahrenheit") {
    celsiusResult.textContent = `${(temperature - 32) * 5/9} °C`;
    fahrenheitResult.textContent = `${temperature} °F`;
    kelvinResult.textContent = `${(temperature - 32) * 5/9 + 273.15} K`;
  } else if (fromUnit.value === "kelvin") {
    celsiusResult.textContent = `${temperature - 273.15} °C`;
    fahrenheitResult.textContent = `${(temperature - 273.15) * 9/5 + 32} °F`;
    kelvinResult.textContent = `${temperature} K`;
  }
}
