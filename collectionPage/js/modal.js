const colorModal = document.getElementById("color_modal");
const shapeModal = document.getElementById("shape_modal");

const colorBtn = document.getElementById("color_modal_button");
const shapeBtn = document.getElementById("shape_modal_button");

const closeColorModal = colorModal.getElementsByClassName("close")[0];
const closeShapeModal = shapeModal.getElementsByClassName("close")[0];

colorBtn.onclick = function () {
  colorModal.style.display = "block";
};

shapeBtn.onclick = function () {
  shapeModal.style.display = "block";
};

closeShapeModal.onclick = function () {
  shapeModal.style.display = "none";
};

closeColorModal.onclick = function () {
  colorModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == colorModal || event.target == shapeModal) {
    colorModal.style.display = "none";
    shapeModal.style.display = "none";
  }
};
