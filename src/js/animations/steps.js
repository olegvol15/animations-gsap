import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEP_OFFSET = 18;

export function initSteps() {
  const list = document.querySelector("[data-steps-list]");
  const steps = gsap.utils.toArray("[data-step]");
  if (!list || steps.length < 2) return;

  const header = document.querySelector("[data-header]");
  const topGap = () => (header?.offsetHeight ?? 0) + 16;

  steps.forEach((step, index) => {
    gsap.set(step, { zIndex: index + 1 });

    ScrollTrigger.create({
      trigger: step,
      start: () => `top ${topGap() + index * STEP_OFFSET}`,
      endTrigger: list,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true,
    });

    const next = steps[index + 1];
    if (!next) return;

    const content = step.querySelectorAll(".step__body, .step__media");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: next,
        start: "top bottom",
        end: "top 25%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(step, { scale: 0.94, ease: "none" }, 0).to(
      content,
      { opacity: 0.15, ease: "none" },
      0,
    );
  });
}
