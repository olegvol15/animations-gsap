import { gsap } from "gsap";

export function initCards() {
  const cards = gsap.utils.toArray("[data-card]");
  if (!cards.length) return;

  gsap.from(cards, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".cards",
      start: "top 80%",
      once: true,
    },
  });
}
