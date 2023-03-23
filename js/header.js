let menuBtn = document.querySelector(".burger_menu");
let menu = document.querySelector(".mobile_menu");
let menuItem = document.querySelectorAll(".navbar_item");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
});
