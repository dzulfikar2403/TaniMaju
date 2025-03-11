document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("hamburger");
  const closeBtn = document.getElementById("close-menu");
  const offcanvas = document.getElementById("offcanvas");

  menuBtn.addEventListener("click", function () {
      offcanvas.classList.add("open");
  });

  closeBtn.addEventListener("click", function () {
      offcanvas.classList.remove("open");
  });

  document.addEventListener("click", function (event) {
      if (!offcanvas.contains(event.target) && !menuBtn.contains(event.target)) {
          offcanvas.classList.remove("open");
      }
  });


});