class RoofSlider {
  constructor(slider) {
    this.slider = slider;
    this.sliderItems = this.slider.querySelector(".slider_items");
    this.sliderTrack = this.slider.querySelector(".slider_track");
    this.slides = this.slider.querySelectorAll(".slider_card");
    this.arrows = this.slider.querySelector(".slider_menu");
    this.prev = this.slider.querySelector(".prev");
    this.next = this.slider.querySelector(".next");
    this.slideGap = this.slider.offsetWidth > 700 ? 60 : 0;
    this.slideWidth = this.slides[0].offsetWidth + this.slideGap;
    this.slideIndex = 0;
    this.maxIndex =
      this.slides.length -
      Math.floor(this.slider.offsetWidth / this.slideWidth);
  }

  chechSliderWidth() {
    window.addEventListener("resize", () => {
      this.slideWidth = this.slides[0].offsetWidth + this.slideGap;
    });
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

const favoriteRoofs = document.querySelectorAll(".favorite_roof");

const roofSlider = new RoofSlider(document.querySelector(".slider_gallery"));

roofSlider.createSliderItems();

roofSlider.arrows.addEventListener("click", function (event) {
  let target = event.target;

  if (target.classList.contains("next")) {
    roofSlider.slideIndex++;
    roofSlider.activeItem(roofSlider.slideIndex);
    if (roofSlider.slideIndex > roofSlider.maxIndex) {
      roofSlider.slideIndex = 0;
      roofSlider.activeItem(roofSlider.slideIndex);
    }
  } else if (target.classList.contains("prev")) {
    if (roofSlider.slideIndex > 0) {
      roofSlider.slideIndex--;
      roofSlider.activeItem(roofSlider.slideIndex);
    } else if (roofSlider.slideIndex === 0) {
      roofSlider.slideIndex = roofSlider.maxIndex;
      roofSlider.activeItem(roofSlider.slideIndex);
    }
  } else {
    return;
  }
  roofSlider.slide();
});

function addFavoriteRoof(roofIndex) {
  favoriteRoofs.forEach((item, index) => {
    if (roofIndex === index && item.src !== "./images/header/FillLike.svg") {
      item.src = "./images/header/FillLike.svg";
    }
    if (roofIndex === index && item.src === "./images/header/FillLike.svg") {
      item.src = "./images/header/Like.svg";
    }
  });
}

favoriteRoofs.forEach((roof, index) => {
  roof.addEventListener("click", () => {
    addFavoriteRoof(index);
  });
});
