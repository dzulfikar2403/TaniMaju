
const scroller = document.querySelector(".scroller");
console.log(scroller);
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

prev.addEventListener("click", function () {
  console.log('prev');

  scroller.scrollLeft -= 300;
});

next.addEventListener("click", function () {
  console.log('next');
  
  scroller.scrollLeft += 300;
});
