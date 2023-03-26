const estimateCards = document.querySelectorAll(".roof_card");

const markEstimateCard = (cardIndex) => {
  estimateCards.forEach((card, index) => {
    const cardImg = card.querySelector(".roof_card_img");
    const cardName = card.querySelector(".roof_card_name");

    if (card.querySelector(".mark_roof")) {
      card.removeChild(card.querySelector(".mark_roof"));
      cardImg.style.backgroundColor = "#FFFFFF";
      cardName.style.fontWeight = 300;
    }
    if (card.childElementCount > 2) {
      return;
    }
    if (index === cardIndex) {
      const markRoof = document.createElement("div");
      const markImg = document.createElement("img");
      cardImg.style.backgroundColor = "#F9F7F6";
      cardName.style.fontWeight = 700;
      markRoof.classList.add("mark_roof");
      markImg.src = "./images/roofEstimate/Chosen.svg";
      markRoof.appendChild(markImg);
      card.appendChild(markRoof);
    }
  });
};

estimateCards.forEach((card, index) => {
  card.addEventListener("click", function () {
    markEstimateCard(index);
  });
});
