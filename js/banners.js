bannerMenu = document.querySelector(".banner_menu");
bannerItems = bannerMenu.querySelectorAll(".banner_menu_item");
bannerHighlight = bannerMenu.querySelectorAll(".banner_menu_highlight");

let activeBannerItem = function (itemIndex) {
  bannerHighlight.forEach((item, index) => {
    item.classList.remove("banner_menu_active");
    if (index === itemIndex) {
      item.classList.add("banner_menu_active");
    }
  });
};

bannerItems.forEach((bannerItem, index) => {
  bannerItem.addEventListener("click", () => {
    activeBannerItem(index);
  });
});

bannerHighlight.forEach((highlight, index) => {
  highlight.classList.remove("banner_menu_active");
  if (index === 0) {
    highlight.classList.add("banner_menu_active");
  }
});
