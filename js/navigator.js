let collectionItem = document.getElementById("collection");
let collectionMenu = document.querySelector(".collection_menu");
let mainContent = document.querySelector("main");
let mobileCollectionItem = document.getElementById("mobile_collection");
const roofMaterialsLink = document.getElementById("roof_materials");
const facadeMaterialsLink = document.getElementById("facade_materials");
const backButton = document.querySelectorAll(".back_button");
const collectionMobilePage = document.querySelector(".collection_mobile");
const roofMaterialsMobilePage = document.querySelector(
  ".roof_materials_mobile",
);
const facadeMaterialsMobilePage = document.querySelector(
  ".facade_materials_mobile",
);
const windowSize = window.innerWidth;

console.log(windowSize);

const hideCollectionMenu = () => {
  collectionMenu.classList.remove("active_collection_menu");
  mainContent.style.display = "block";
};

collectionItem.addEventListener("mouseover", () => {
  onCollectionItemHover();
  collectionMobilePage.style.display = "none";
  roofMaterialsMobilePage.style.display = "none";
  facadeMaterialsMobilePage.style.display = "none";
});

const onCollectionItemHover = () => {
  collectionMenu.classList.add("active_collection_menu");
  mainContent.style.display = "none";
};

collectionItem.addEventListener("mouseout", hideCollectionMenu);

collectionMenu.addEventListener("mouseover", onCollectionItemHover);

collectionMenu.addEventListener("mouseout", hideCollectionMenu);

mobileCollectionItem.addEventListener("mouseover", () => {
  onCollectionItemHover();
  collectionMobilePage.style.display = "flex";
  roofMaterialsMobilePage.style.display = "none";
  facadeMaterialsMobilePage.style.display = "none";
});

mobileCollectionItem.addEventListener("mouseout", hideCollectionMenu);

roofMaterialsLink.addEventListener("click", () => {
  collectionMobilePage.style.display = "none";
  roofMaterialsMobilePage.style.display = "flex";
});

facadeMaterialsLink.addEventListener("click", () => {
  collectionMobilePage.style.display = "none";
  facadeMaterialsMobilePage.style.display = "flex";
});

backButton.forEach((button) => {
  button.addEventListener("click", () => {
    collectionMobilePage.style.display = "flex";
    facadeMaterialsMobilePage.style.display = "none";
    roofMaterialsMobilePage.style.display = "none";
  });
});
