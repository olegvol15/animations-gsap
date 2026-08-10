import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initHeroCover() {
  const hero = document.querySelector(".hero");
  const panel = document.querySelector("[data-panel]");
  if (!hero || !panel) return;

  ScrollTrigger.create({
    trigger: panel,
    start: "top bottom",
    end: "top top",
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const distance = self.end - self.start;
      gsap.set(hero, { y: self.progress * distance });
    },
  });
}
