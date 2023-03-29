const colorModal = document.getElementById("color_modal");

const colorBtn = document.getElementById("color_modal_button");

const closeColorModal = colorModal.getElementsByClassName("close")[0];

colorBtn.onclick = function () {
  colorModal.style.display = "block";
};

closeColorModal.onclick = function () {
  colorModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == colorModal) {
    colorModal.style.display = "none";
  }
};
