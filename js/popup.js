var popupLink = document.querySelector(".open-popup");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".close-popup");

var form = popup.querySelector("form");
var validation = popup.querySelectorAll(".validation");

popupLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    for (var i = 0; i < validation.length; i++) {
        if (!validation[i].value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        }
    }
});