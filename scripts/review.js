// Count completed reviews only when this page is reached with a submitted product.
const params = new URLSearchParams(window.location.search);
const productId = params.get("product");
const rating = params.get("rating");
const installDate = params.get("install-date");
const features = params.getAll("features");
const writtenReview = params.get("written-review");
const userName = params.get("user-name");

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

if (productId && rating && installDate) {
  reviewCount += 1;
  localStorage.setItem("reviewCount", reviewCount.toString());
}

document.querySelector("#review-count").textContent = reviewCount;

// Display a simple summary of the submitted values.
const productNames = {
  "fc-1888": "flux capacitor",
  "fc-2050": "power laces",
  "fs-1987": "time circuits",
  "ac-2000": "low voltage reactor",
  "jj-1969": "warp equalizer"
};

const summary = document.querySelector("#review-summary");
if (productId && rating && installDate) {
  const rows = [
    ["Product", productNames[productId] || productId],
    ["Rating", `${rating} out of 5`],
    ["Installation date", installDate],
    ["Useful features", features.length ? features.join(", ") : "None selected"],
    ["Name", userName || "Not provided"],
    ["Written review", writtenReview || "Not provided"]
  ];

  rows.forEach(([label, value]) => {
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    paragraph.append(strong, document.createTextNode(value));
    summary.appendChild(paragraph);
  });
} else {
  summary.textContent = "No submitted review details were found. Please use the form to submit a review.";
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;
