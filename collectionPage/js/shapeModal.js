const shapeModal = document.getElementById("shape_modal");

const shapeBtn = document.getElementById("shape_modal_button");

const closeShapeModal = shapeModal.getElementsByClassName("close")[0];

shapeBtn.onclick = function () {
  shapeModal.style.display = "block";
};

closeShapeModal.onclick = function () {
  shapeModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == shapeModal) {
    shapeModal.style.display = "none";
  }
};
