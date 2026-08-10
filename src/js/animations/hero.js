import { gsap } from "gsap";

// Доля высоты экрана, которую панель проезжает в режиме накрытия.
// 0.5 => накрытие стартует, когда верх панели дошёл до середины экрана,
// а до этого страница скроллится обычным образом.
const COVER_RANGE = 0.5;

export function initHeroCover() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  gsap.to(hero, {
    y: () => window.innerHeight * COVER_RANGE,
    ease: "none",
    scrollTrigger: {
      trigger: "[data-panel]",
      start: `top ${COVER_RANGE * 100}%`,
      end: "top top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
}
