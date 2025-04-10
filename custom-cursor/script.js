var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.6,
  });
});

imageDiv.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 4,
    duration: 0.3,
  });
});

imageDiv.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
  });
});
