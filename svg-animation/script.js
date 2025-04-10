var path = "M 20 150 Q 300 150 590 150";

var finalPath = "M 20 150 Q 300 150 590 150";

var string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
  console.log(dets);
  path = `M 20 150 Q 300 ${dets.y} 590 150`;
  gsap.to("svg path", {
    duration: 0.5,
    attr: { d: path },
    ease: "power2.inOut",
  });
});

string.addEventListener("mouseleave", (e) => {
  path = finalPath;
  gsap.to("svg path", {
    duration: 0.5,
    attr: { d: path },
    ease: "elastic.out(1, 0.3)",
  });
});
