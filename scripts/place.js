// Static assignment data: keep these values consistent with the Weather section.
const temperatureC = 29;
const windSpeedKmh = 12;

// Metric wind-chill formula (°C and km/h).
function calculateWindChill(temperature, windSpeed) {
  return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

const windChillOutput = document.querySelector("#wind-chill");
if (windChillOutput) {
  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    windChillOutput.textContent = `${calculateWindChill(temperatureC, windSpeedKmh).toFixed(1)} °C`;
  } else {
    windChillOutput.textContent = "N/A";
  }
}

// Display the current year and the document's last-modified date.
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;
