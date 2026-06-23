const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

// Search
if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        searchForm.classList.toggle("active");
    });
}

// Cart
if (cartBtn) {
    cartBtn.addEventListener("click", function () {
        cartItem.classList.toggle("active");
    });
}

// Menu
if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}

// Add to cart
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();

        const name = this.getAttribute("data-name");
        const price = this.getAttribute("data-price");

        const item = document.createElement("div");

        item.classList.add("cart-item");

        item.innerHTML = `
            <i class="fas fa-times"></i>
            <div class="content">
                <h3>${name}</h3>
                <div class="price">${price}</div>
            </div>
        `;

        cartItem.prepend(item);

        cartItem.classList.add("active");
    });
});

// Remove item
cartItem.addEventListener("click", function(e) {
    if (e.target.classList.contains("fa-times")) {
        e.target.parentElement.remove();
    }
});
const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function () {

    if (this.value === "en") {

        document.getElementById("nav-home").textContent = "Home";
        document.getElementById("nav-about").textContent = "About Us";
        document.getElementById("nav-menu").textContent = "Menu";
        document.getElementById("nav-extra").textContent = "Extras";
        document.getElementById("nav-review").textContent = "Reviews";
        document.getElementById("nav-contact").textContent = "Contact";

        document.getElementById("order-btn").textContent = "ORDER NOW";

        document.getElementById("hero-title").textContent =
        "THE KING OF DONER IN ÇARŞIBAŞI";

    } else {

        document.getElementById("nav-home").textContent = "Ana Sayfa";
        document.getElementById("nav-about").textContent = "Hakkımızda";
        document.getElementById("nav-menu").textContent = "Menü";
        document.getElementById("nav-extra").textContent = "Extra";
        document.getElementById("nav-review").textContent = "Yorumlar";
        document.getElementById("nav-contact").textContent = "İletişim";

        document.getElementById("order-btn").textContent =
        "SİPARİŞE BAŞLA";

        document.getElementById("hero-title").textContent =
        "ÇARŞIBAŞI'NIN KRALI DÖNER";
    }
});
