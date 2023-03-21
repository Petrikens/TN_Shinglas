let slider = document.querySelector(".slider_gallery"),
  sliderItems = slider.querySelector(".slider_items"),
  sliderList = slider.querySelector(".slider_list"),
  sliderTrack = slider.querySelector(".slider_track"),
  slides = slider.querySelectorAll(".slider_card"),
  arrows = slider.querySelector(".slider_menu"),
  prev = slider.querySelector(".prev"),
  next = slider.querySelector(".next"),
  slideGap = slider.offsetWidth > 320 ? 60 : 0,
  slideWidth = slides[0].offsetWidth + slideGap,
  slideIndex = 0,
  maxIndex = slides.length - Math.floor(slider.offsetWidth / slideWidth),
  createSliderItems = (function () {
    for (let i = 0; i <= maxIndex; i++) {
      let li = document.createElement("li");
      li.classList.add("slider_item");
      if (i === 0) {
        li.classList.add("active_item");
      }
      sliderItems.appendChild(li);
    }
  })(),
  slide = function () {
    sliderTrack.style.transition = "transform .5s";

    sliderTrack.style.transform = `translate3d(-${
      slideIndex * slideWidth
    }px, 0px, 0px)`;
  },
  activeItem = function (slideIndex) {
    sliderItems.querySelectorAll(".slider_item").forEach((item, index) => {
      item.classList.remove("active_item");
      if (index === slideIndex) {
        item.classList.add("active_item");
      }
    });
  };

arrows.addEventListener("click", function (event) {
  let target = event.target;

  console.log(target);

  if (target.classList.contains("next")) {
    slideIndex++;
    activeItem(slideIndex);
    if (slideIndex > maxIndex) {
      slideIndex = 0;
      activeItem(slideIndex);
    }
  } else if (target.classList.contains("prev")) {
    if (slideIndex > 0) {
      slideIndex--;
      activeItem(slideIndex);
    } else if (slideIndex === 0) {
      slideIndex = maxIndex;
      activeItem(slideIndex);
    }
  } else {
    return;
  }
  slide();
});
