// The defer attribute lets the HTML finish parsing before this script runs.
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();

// document.lastModified is already a string supplied by the browser.
document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
