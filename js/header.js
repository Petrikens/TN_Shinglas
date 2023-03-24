let menuBtn = document.querySelector(".burger_menu");
let menu = document.querySelector(".mobile_menu");
let menuItem = document.querySelectorAll(".navbar_item");
let galleryItem = document.querySelectorAll(".gallery");
let collectionMenu = document.querySelector(".collection_menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    // menu.classList.toggle("active");
  });
});

galleryItem.forEach(function (galleryItem) {
  galleryItem.addEventListener("mouseover", function () {
    collectionMenu.classList.add("active_collection_menu");
  });
  galleryItem.addEventListener("mouseout", function () {
    collectionMenu.classList.remove("active_collection_menu");
  });
});

collectionMenu.addEventListener("mouseover", function () {
  collectionMenu.classList.add("active_collection_menu");
});
collectionMenu.addEventListener("mouseout", function () {
  collectionMenu.classList.remove("active_collection_menu");
});
