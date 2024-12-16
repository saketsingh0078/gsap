// gsap.to("#box", {
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
// });

// gsap.from("#box", {
//   x: 1000,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "red",
// });

// TimeLine

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
//   delay: 1,
// });

// tl.to("#box2", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });

// tl.to("#box3", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
// });

const tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  duration: 0.4,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#main h1", {
  x: -500,
  duration: 0.4,
  opacity: 0,
  stagger: 0.3,
});

tl.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.4,

  stagger: 0.4,
});

tl.from("#footer", {
  y: -50,
  duration: 0.4,

  opacity: 0,
  stagger: 0.3,
});
