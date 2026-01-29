gsap.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".hero h1", {
  x: -200,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero p", {
  x: 200,
  opacity: 0,
  duration: 1,
  delay: 0.7
});

gsap.from(".hero button", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  delay: 1
});

gsap.from(".section", {
  scrollTrigger: ".section",
  y: 100,
  opacity: 0,
  duration: 1
});
