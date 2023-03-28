const roofEstimateSlider = document.getElementById("roof_estimate_slider");
const estimateCards = roofEstimateSlider.querySelectorAll(".slider_card");

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

class EstimateSlider {
  constructor(slider) {
    this.slider = slider;
    this.sliderItems = this.slider.querySelector(".slider_items");
    this.sliderTrack = this.slider.querySelector(".slider_track");
    this.slides = this.slider.querySelectorAll(".slider_card");
    this.arrows = this.slider.querySelector(".slider_menu");
    this.prev = this.slider.querySelector(".prev");
    this.next = this.slider.querySelector(".next");
    this.slideWidth = this.slides[0].offsetWidth;
    this.slideIndex = 0;
    this.maxIndex =
      this.slides.length -
      Math.floor(this.slider.offsetWidth / this.slideWidth);
  }

  createSliderItems() {
    for (let i = 0; i <= this.maxIndex; i++) {
      let li = document.createElement("li");
      li.addEventListener("click", () => {
        this.slideIndex = i;
        this.activeItem(i);
        this.slide();
      });
      li.classList.add("slider_item");
      if (i === 0) {
        li.classList.add("active_item");
      }
      this.sliderItems.appendChild(li);
    }
  }

  slide() {
    this.sliderTrack.style.transition = "transform .5s";

    this.sliderTrack.style.transform = `translate3d(-${
      this.slideIndex * this.slideWidth
    }px, 0px, 0px)`;
  }

  activeItem(slideIndex) {
    this.sliderItems.querySelectorAll(".slider_item").forEach((item, index) => {
      item.classList.remove("active_item");
      if (index === slideIndex) {
        item.classList.add("active_item");
      }
    });
  }
}

const estimateSlider = new EstimateSlider(roofEstimateSlider);

estimateSlider.createSliderItems();

estimateSlider.arrows.addEventListener("click", function (event) {
  let target = event.target;

  if (target.classList.contains("next")) {
    estimateSlider.slideIndex++;
    estimateSlider.activeItem(estimateSlider.slideIndex);
    if (estimateSlider.slideIndex > estimateSlider.maxIndex) {
      estimateSlider.slideIndex = 0;
      estimateSlider.activeItem(estimateSlider.slideIndex);
    }
  } else if (target.classList.contains("prev")) {
    if (estimateSlider.slideIndex > 0) {
      estimateSlider.slideIndex--;
      estimateSlider.activeItem(estimateSlider.slideIndex);
    } else if (estimateSlider.slideIndex === 0) {
      estimateSlider.slideIndex = estimateSlider.maxIndex;
      estimateSlider.activeItem(estimateSlider.slideIndex);
    }
  } else {
    return;
  }
  estimateSlider.slide();
});
