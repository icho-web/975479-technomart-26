var cartLink = document.querySelectorAll(".catalog-product button");
var cartPopup = document.querySelector(".cart-popup");
var cartClose = document.querySelector(".close-popup");

for (var i = 0; i < cartLink.length; i++) 
cartLink[i].addEventListener("click", function(button) {
  button.preventDefault();
  cartPopup.classList.add("modal-show")
});

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show")
})
