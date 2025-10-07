// GSAP + ScrollMagic Animation
const controller = new ScrollMagic.Controller();

document.querySelectorAll(".timeline-item").forEach(item => {
  new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.9
  })
    .setTween(gsap.fromTo(item, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1, ease: "power2.out"}))
    .addTo(controller);
});

