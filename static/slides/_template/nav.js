// Diapos — Intro Camejo
// Navegación simple: flechas izq/der además del espacio/PageDown nativo del navegador.
// Sin esto el mazo igual funciona (scroll-snap ya scrollea de a una slide).
(function () {
  function goTo(direction) {
    var slides = document.querySelectorAll('.slide');
    var mid = window.scrollY + window.innerHeight / 2;
    var current = 0;
    slides.forEach(function (slide, i) {
      if (slide.offsetTop <= mid) current = i;
    });
    var target = slides[current + direction];
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(-1);
  });
})();
