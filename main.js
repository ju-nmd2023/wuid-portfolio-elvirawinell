document.addEventListener("DOMContentLoaded", function () {
  function changeImage() {
    var frogImage = document.getElementById("frog-animation");
    var currentSrc = frogImage.src;

    if (currentSrc.includes("frog01.png")) {
      frogImage.src = "img/frog-04.png";
    } else {
      frogImage.src = "img/frog01.png";
    }
  }

  document
    .getElementById("frog-animation")
    .addEventListener("click", changeImage);
});
