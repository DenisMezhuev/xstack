(function () {
  let mainMapButton = document.querySelector(".main-map__button");
  let mainMapButtonImg = document.querySelector(
    ".main-map__button_wrapper img"
  );
  let formMap = document.querySelector(".form-map");
  let mainQiwiButton = document.querySelector(".main-qiwi__button");
  let formQiwi = document.querySelector(".form-qiwi");
  let mainQiwiButtonImg = document.querySelector(".main-qiwi__button img");

  mainMapButton.addEventListener("click", function (e) {
    this.classList.toggle("main-map__button_active");
    formMap.classList.toggle("form-map_active");

    this.classList.contains("main-map__button_active")
      ? (mainMapButtonImg.src = "img/map_active.svg")
      : (mainMapButtonImg.src = "img/map.svg");
  });

  mainQiwiButton.addEventListener("click", function (e) {
    this.classList.toggle("main-qiwi__button_active");
    formQiwi.classList.toggle("form-qiwi_active");
    this.classList.contains("main-qiwi__button_active")
      ? (mainQiwiButtonImg.src = "img/QIWI_logo_active.svg")
      : (mainQiwiButtonImg.src = "img/qiwi_logo.svg");
  });
})();
