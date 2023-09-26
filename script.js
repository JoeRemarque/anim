import { useDynamicAdapt } from './src/dynamicAdapt.js';

useDynamicAdapt();

// Scroll & Header

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Animation

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.fromTo(
  '.title-logo',
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
  1.5,
)
  .fromTo(
    '.title-tagline',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    2,
  )
  .fromTo(
    '.title-text',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    2,
  )
  .fromTo(
    '.title-services',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    2,
  )
  // .fromTo(
  //   '.header__logo',
  //   {
  //     y: -50,
  //     opacity: 0,
  //   },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     duration: 1,
  //   },
  //   1.4,
  // )
  .fromTo(
    '.anim',
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
    },
    0.1,
  )
  .fromTo(
    '.services-items',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
    },
    2.5,
  )
  .fromTo(
    '.services__item-50',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
    },
    2.5,
  );

// gsap.to('.main-section__content', {
//   scrollTrigger: {
//     trigger: '.header',
//     markers: true,
//     start: 'top top',
//     scrub: true,
//   },
//   x: -400,
//   scale: 0.5,
// });
