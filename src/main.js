import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "@fontsource-variable/inter";
import "./styles/main.scss";
import { initHeader } from "./js/header";
import { initHeroCover } from "./js/animations/hero";
import { initCards } from "./js/animations/cards";
import { initShowcase } from "./js/animations/showcase";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
});

initHeader();
initHeroCover();
initCards();
initShowcase();
