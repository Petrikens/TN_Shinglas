const modal = document.getElementById("color_modal");

const btn = document.getElementById("color_modal_button");

const close = modal.getElementsByClassName("close")[0];

console.log(close);

btn.onclick = function () {
  modal.style.display = "block";
};

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
