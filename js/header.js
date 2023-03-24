let menuBtn = document.querySelector(".burger_menu");
let menu = document.querySelector(".mobile_menu");
let menuItem = document.querySelectorAll(".navbar_item");
let colectionItem = document.querySelectorAll(".collection");
let collectionMenu = document.querySelector(".collection_menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
  });
});

colectionItem.forEach(function (colectionItem) {
  colectionItem.addEventListener("mouseover", function () {
    collectionMenu.classList.add("active_collection_menu");
  });
  colectionItem.addEventListener("mouseout", function () {
    collectionMenu.classList.remove("active_collection_menu");
  });
});

collectionMenu.addEventListener("mouseover", function () {
  collectionMenu.classList.add("active_collection_menu");
});
collectionMenu.addEventListener("mouseout", function () {
  collectionMenu.classList.remove("active_collection_menu");
});
