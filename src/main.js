import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "@fontsource-variable/inter";
import "./styles/main.scss";
import { initHeroCover } from "./js/animations/hero";
import { initCards } from "./js/animations/cards";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
});

initHeroCover();
initCards();
