var popupLink = document.querySelector(".open-popup");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".close-popup")

popupLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show")
});