let collectionItem = document.getElementById("collection");
let mobileCollectionItem = document.getElementById("mobile_collection");
let mobileMenuItem = document.getElementById("mobile_menu");

let collectionMenuPage = document.querySelector(".collection_menu");
const collectionMobilePage = document.querySelector(".collection_mobile");
const menuMobilePage = document.querySelector(".main_menu_mobile");
const menuMobileItems = document.querySelector(".main_menu_items");
const roofMaterialsMobilePage = document.querySelector(
  ".roof_materials_mobile",
);
const facadeMaterialsMobilePage = document.querySelector(
  ".facade_materials_mobile",
);
const installationMobilePage = document.getElementById("installation_details");
const buyerMobilePage = document.getElementById("buyer_details");
const builderMobilePage = document.getElementById("builder_details");

let mainContent = document.querySelector("main");
const roofMaterialsLink = document.getElementById("roof_materials");
const facadeMaterialsLink = document.getElementById("facade_materials");
const collectionBackButton = document.querySelectorAll(
  ".collection_back_button",
);
const menuBackButton = document.querySelectorAll(".menu_back_button");
const installationLink = document.getElementById("installation_link");
const buyerLink = document.getElementById("buyer_link");
const builderLink = document.getElementById("builder_link");

let windowSize = window.innerWidth;

const hidecollectionMenuPage = () => {
  collectionMenuPage.classList.remove("active_collection_menu");
  mainContent.style.display = "block";
};

const onCollectionItemHover = () => {
  collectionMenuPage.classList.add("active_collection_menu");
  menuMobilePage.classList.remove("active_main_menu");
  mainContent.style.display = "none";
};

const onMenuItemHover = () => {
  menuMobilePage.classList.add("active_main_menu");
  collectionMenuPage.classList.remove("active_collection_menu");
  mainContent.style.display = "none";
};

const hideMobileMenuPage = () => {
  menuMobilePage.classList.remove("active_main_menu");
  mainContent.style.display = "block";
};

collectionItem.addEventListener("mouseover", () => {
  onCollectionItemHover();
  collectionMobilePage.style.display = "none";
  roofMaterialsMobilePage.style.display = "none";
  facadeMaterialsMobilePage.style.display = "none";
});

mobileCollectionItem.addEventListener("mouseover", () => {
  onCollectionItemHover();
  collectionMobilePage.style.display = "none";
  roofMaterialsMobilePage.style.display = "none";
  facadeMaterialsMobilePage.style.display = "none";
  if (windowSize <= 700) {
    collectionMobilePage.style.display = "flex";
  }
});

collectionMenuPage.addEventListener("mouseover", onCollectionItemHover);

mobileMenuItem.addEventListener("mouseover", onMenuItemHover);

menuMobilePage.addEventListener("mouseover", onMenuItemHover);

menuMobilePage.addEventListener("mouseout", hideMobileMenuPage);

mobileMenuItem.addEventListener("mouseout", hideMobileMenuPage);

collectionItem.addEventListener("mouseout", hidecollectionMenuPage);

mobileCollectionItem.addEventListener("mouseout", hidecollectionMenuPage);

collectionMenuPage.addEventListener("mouseout", hidecollectionMenuPage);

roofMaterialsLink.addEventListener("click", () => {
  collectionMobilePage.style.display = "none";
  roofMaterialsMobilePage.style.display = "flex";
});

facadeMaterialsLink.addEventListener("click", () => {
  collectionMobilePage.style.display = "none";
  facadeMaterialsMobilePage.style.display = "flex";
});

installationLink.addEventListener("click", () => {
  menuMobileItems.style.display = "none";
  installationMobilePage.style.display = "block";
});

buyerLink.addEventListener("click", () => {
  menuMobileItems.style.display = "none";
  buyerMobilePage.style.display = "block";
});

builderLink.addEventListener("click", () => {
  menuMobileItems.style.display = "none";
  builderMobilePage.style.display = "block";
});

collectionBackButton.forEach((button) => {
  button.addEventListener("click", () => {
    collectionMobilePage.style.display = "flex";
    facadeMaterialsMobilePage.style.display = "none";
    roofMaterialsMobilePage.style.display = "none";
  });
});

menuBackButton.forEach((button) => {
  button.addEventListener("click", () => {
    menuMobileItems.style.display = "block";
    installationMobilePage.style.display = "none";
    buyerMobilePage.style.display = "none";
    builderMobilePage.style.display = "none";
  });
});

window.addEventListener(
  "resize",
  function () {
    windowSize = window.innerWidth;
  },
  true,
);
