var cartLink = document.querySelectorAll(".buy-1");
var cartPopup = document.querySelector(".cart-popup");
var cartClose = document.querySelector(".close-cart-popup");
var cartColor = document.querySelector(".basket")

for (var i = 0; i < cartLink.length; i++) 
cartLink[i].addEventListener("click", function(button) {
  button.preventDefault();
  cartPopup.classList.add("modal-show");
  cartColor.classList.add("red");
});

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show")
})
