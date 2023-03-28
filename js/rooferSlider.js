class RooferSlider {
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

const rooferSlider = new RooferSlider(
  document.getElementById("best_roofer_slider"),
);

rooferSlider.createSliderItems();

rooferSlider.arrows.addEventListener("click", function (event) {
  let target = event.target;

  if (target.classList.contains("next")) {
    rooferSlider.slideIndex++;
    rooferSlider.activeItem(rooferSlider.slideIndex);
    if (rooferSlider.slideIndex > rooferSlider.maxIndex) {
      rooferSlider.slideIndex = 0;
      rooferSlider.activeItem(rooferSlider.slideIndex);
    }
  } else if (target.classList.contains("prev")) {
    if (rooferSlider.slideIndex > 0) {
      rooferSlider.slideIndex--;
      rooferSlider.activeItem(rooferSlider.slideIndex);
    } else if (rooferSlider.slideIndex === 0) {
      rooferSlider.slideIndex = rooferSlider.maxIndex;
      rooferSlider.activeItem(rooferSlider.slideIndex);
    }
  } else {
    return;
  }
  rooferSlider.slide();
});
