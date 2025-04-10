var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.6,
});

tl.from("#full h4", {
  x: 150,
  duration: 0.4,
  stagger: 0.28,
  opacity: 0,
});

tl.from("#full i", {
  opacity: 0,
  duration: 0.3,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
