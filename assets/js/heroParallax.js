(() => {
  if (window.innerWidth <= 767) return;

  const sections = document.querySelectorAll('.parallax-section');
  if (!sections.length) return;

  function update() {
    const scrollY = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
      // 🔴 MUDA: cada seção controla seu próprio bg
      const bg = section.querySelector('.hero-bg');
      if (!bg) return;

      const sectionHeight = section.offsetHeight;
      const bgHeight = bg.offsetHeight;
      const viewportOffset = window.innerHeight * 0.6;
      const start = section.offsetTop - viewportOffset;

      let progress = (scrollY - start) / sectionHeight;
      progress = Math.min(Math.max(progress, 0), 1);

      const maxShift = bgHeight - sectionHeight;
      const translateY = -progress * maxShift;

      bg.style.transform = `translateY(${translateY}px)`;
    });
  }

  function onScroll() {
    requestAnimationFrame(update);
  }

  window.addEventListener('load', () => { recalcSizes(); update(); });
  window.addEventListener('resize', () => { recalcSizes(); update(); });
  window.addEventListener('scroll', onScroll, { passive: true });
})();
