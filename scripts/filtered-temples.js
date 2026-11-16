const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-46020.jpg"
  },
  {
    templeName: "Copenhagen Denmark",
    location: "Copenhagen, Denmark",
    dedicated: "2004, May, 23",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-39427.jpg"
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kyiv-ukraine-temple/kyiv-ukraine-temple-37420.jpg"
  }
];

const templeGrid = document.querySelector("#temple-grid");
const navigation = document.querySelector("#navigation");
const menuButton = document.querySelector("#menu-button");

function displayTemples(templeList) {
  templeGrid.innerHTML = "";

  templeList.forEach((temple) => {
    const year = Number(temple.dedicated.split(",")[0]);
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy" width="400" height="250">
      <figcaption>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    card.dataset.year = year;
    templeGrid.appendChild(card);
  });
}

function filterTemples(filter) {
  let filteredTemples = temples;

  if (filter === "old") {
    filteredTemples = temples.filter((temple) => Number(temple.dedicated.split(",")[0]) < 1900);
  } else if (filter === "new") {
    filteredTemples = temples.filter((temple) => Number(temple.dedicated.split(",")[0]) > 2000);
  } else if (filter === "large") {
    filteredTemples = temples.filter((temple) => temple.area > 90000);
  } else if (filter === "small") {
    filteredTemples = temples.filter((temple) => temple.area < 10000);
  }

  displayTemples(filteredTemples);
}

navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-filter]");
  if (!link) return;

  event.preventDefault();
  const filter = link.dataset.filter;
  filterTemples(filter);

  navigation.querySelectorAll("a").forEach((item) => item.removeAttribute("aria-current"));
  link.setAttribute("aria-current", "page");
  navigation.classList.remove("open");
  menuButton.textContent = "☰";
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.textContent = isOpen ? "✕" : "☰";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

displayTemples(temples);
