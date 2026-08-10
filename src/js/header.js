import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const OPEN_CLASS = "header--open";

export function initHeader() {
  const header = document.querySelector("[data-header]");
  const burger = document.querySelector("[data-burger]");
  if (!header || !burger) return;

  const setOpen = (open) => {
    header.classList.toggle(OPEN_CLASS, open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    ScrollSmoother.get()?.paused(open);
  };

  burger.addEventListener("click", () => {
    setOpen(!header.classList.contains(OPEN_CLASS));
  });

  header.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  const panel = document.querySelector("[data-panel]");
  if (!panel) return;

  ScrollTrigger.create({
    trigger: panel,
    start: "top 15%",
    end: "bottom 15%",
    toggleClass: { targets: header, className: "header--dark" },
  });
}
