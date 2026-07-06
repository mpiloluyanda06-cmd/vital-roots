// ===============================
// VeraLuxe Script
// ===============================

let cart = [];
let cartCount = 0;

// Add to Cart
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("cart-btn")) {
        cartCount++;
        document.getElementById("cart-count").textContent = cartCount;

        alert("Product added to cart!");
    }
});

// Live Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// Buy Now
document.addEventListener("click", function (e) {

    if (e.target.classList.contains("buy-btn")) {

        alert("Checkout page coming soon!");

    }

});

// VeraLuxe Store Settings

const storeSettings = {

    personalCollection: true,

    delivery: false

};

console.log(storeSettings);
