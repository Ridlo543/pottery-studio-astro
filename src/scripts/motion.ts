import gsap from 'gsap';

function initMotion() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroItems = document.querySelectorAll<HTMLElement>('[data-motion="hero"]');

  if (prefersReduced) {
    gsap.set(heroItems, { clearProps: 'all', opacity: 1, y: 0 });
    return;
  }

  if (heroItems.length > 0) {
    gsap.fromTo(
      heroItems,
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      }
    );
  }
}

document.addEventListener('astro:page-load', initMotion);
