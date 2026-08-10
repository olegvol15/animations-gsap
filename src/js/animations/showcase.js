import { gsap } from "gsap";

export function initShowcase() {
  const showcase = document.querySelector("[data-showcase]");
  if (!showcase) return;

  const frame = showcase.querySelector(".showcase__frame");
  const widgets = gsap.utils.toArray(".showcase__widget", showcase);

  gsap.from(frame, {
    y: 80,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: showcase,
      start: "top 85%",
      once: true,
    },
  });

  gsap.from(widgets, {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.15,
    delay: 0.25,
    scrollTrigger: {
      trigger: showcase,
      start: "top 85%",
      once: true,
    },
  });
}
