const contactslPopup = document.querySelector(".contacts-button");
const modalPopup = document.querySelector(".modal-feedback");
const modalClose = modalPopup.querySelector(".modal-close");
const nameUser = modalPopup.querySelector("[name=name]");
const emailUser = modalPopup.querySelector("[name=email]");
const userText = modalPopup.querySelector("[message]");
const formSend = modalPopup.querySelector(".feedback-form");
/*Slider*/
const switchFirst = document.querySelector(".slider-dot-1");
const switchSecond = document.querySelector(".slider-dot-2");
const switchLast = document.querySelector(".slider-dot-3");
const slideFirst = document.querySelector(".feature-slide-1");
const slideSecond = document.querySelector(".feature-slide-2");
const slideLast = document.querySelector(".feature-slide-3");



contactslPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
  nameUser.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});


formSend.addEventListener("submit", function (evt) {
  if (!nameUser.value || !emailUser.value || !userText.value) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  }
});


/*Slider*/
switchFirst.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideSecond.classList.remove("slide-current");
  switchSecond.classList.remove("active");
  slideLast.classList.remove("slide-current");
  switchLast.classList.remove("active");

  switchFirst.classList.add("active");
  slideFirst.classList.add("slide-current");
});

switchSecond.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.remove("slide-current");
  switchFirst.classList.remove("active")

  slideLast.classList.remove("slide-current");
  switchLast.classList.remove("active")

  slideSecond.classList.add("slide-current");
  switchSecond.classList.add("active");
});

switchLast.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.remove("slide-current");
  switchFirst.classList.remove("active")

  slideSecond.classList.remove("slide-current");
  switchSecond.classList.remove("active");

  slideLast.classList.add("slide-current");
  switchLast.classList.add("active")
});
