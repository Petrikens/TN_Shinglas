let slider = document.querySelector(".slider_gallery"),
  sliderList = slider.querySelector(".slider_list"),
  sliderTrack = slider.querySelector(".slider_track"),
  slides = slider.querySelectorAll(".slider_card"),
  arrows = slider.querySelector(".slider_menu"),
  prev = slider.querySelector(".prev"),
  next = slider.querySelector(".next"),
  slideGap = 60,
  slideWidth = slides[0].offsetWidth + slideGap,
  slideIndex = 0,
  maxIndex = slides.length - Math.floor(slider.offsetWidth / slideWidth),
  transition = true,
  slide = function () {
    if (transition) {
      sliderTrack.style.transition = "transform .5s";
    }
    sliderTrack.style.transform = `translate3d(-${
      slideIndex * slideWidth
    }px, 0px, 0px)`;
  },
  reachEdge = function () {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";

sliderTrack.addEventListener("transitionend", () => (allowSwipe = true));

arrows.addEventListener("click", function (event) {
  let target = event.target;

  if (target.classList.contains("next")) {
    slideIndex++;
    if (slideIndex > maxIndex) {
      slideIndex = 0;
    }
  } else if (target.classList.contains("prev")) {
    if (slideIndex > 0) {
      slideIndex--;
    } else if (slideIndex === 0) {
      slideIndex = maxIndex;
    }
  } else {
    return;
  }
  slide();
});

console.log(maxIndex);
