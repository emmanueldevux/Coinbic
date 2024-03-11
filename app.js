const checkbox = document.getElementById("checkbox");
const root = document.documentElement;
const darkModeClass = "dark-mode";

// Check if the user has a theme preference saved in local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.classList.add(savedTheme);
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    root.classList.add(darkModeClass);
    localStorage.setItem("theme", darkModeClass);
  } else {
    root.classList.remove(darkModeClass);
    localStorage.setItem("theme", ""); // Clear the saved theme
  }
});



var coinElements = document.getElementsByClassName("coin");

function updateCoinData(coinElement) {
  var coinId = coinElement.getAttribute("data-coin-id");
  var coinPriceElement =
    coinElement.querySelector(".coin-price");
  var coin24hChangeElement = coinElement.querySelector(
    ".coin-24h-change"
  );
  var coinArrowElement =
    coinElement.querySelector(".coin-arrow");

  var liveprice = {
    async: true,
    crossDomain: true,
    url:
      "https://api.coingecko.com/api/v3/simple/price?ids=" +
      coinId +
      "&vs_currencies=usd&include_24hr_change=true",
    method: "GET",
    headers: {},
  };

  $.ajax(liveprice).done(function (response) {
    var coinData = response[coinId];
    var usdPrice = coinData.usd;
    var usd24hChange = coinData.usd_24h_change;

    coinPriceElement.innerHTML =
      "$" + usdPrice.toLocaleString();
    coin24hChangeElement.innerHTML =
      usd24hChange.toFixed(2) + "%";

    if (usd24hChange > 0) {
      coinArrowElement.className = "fa-solid fa-caret-up";
      coinArrowElement.style.color = "#0fd38a";
      coin24hChangeElement.style.color = "#0fd38a";
    } else if (usd24hChange < 0) {
      coinArrowElement.className = "fa-solid fa-caret-down";
      coinArrowElement.style.color = "red";
      coin24hChangeElement.style.color = "red";
    } else {
      coinArrowElement.className = "fas";
      coinArrowElement.style.color = "blue";
      coin24hChangeElement.style.color = "blue";
    }
  });
}

// Call the updateCoinData function for each coin element
for (var i = 0; i < coinElements.length; i++) {
  updateCoinData(coinElements[i]);
}

let menutoggle = document.querySelector(".menu");
let navtoggle = document.querySelector(".nav-list");

menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  navtoggle.classList.toggle("active");
};

/*  */
const checkout = document.getElementById("checkbox");

checkbox.addEventListner("change", () => {
  document.body.classList.toggle("dark");
});

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds (adjust as needed)

const inputField = document.getElementById(
  "username-input"
);

inputField.addEventListener("focus", () => {
  inputField.removeAttribute("placeholder");
});

inputField.addEventListener("blur", () => {
  inputField.setAttribute(
    "placeholder",
    "Enter your username"
  );
});
