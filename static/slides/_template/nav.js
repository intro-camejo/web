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

  // Botón flotante para descargar PDF
  var pdfArea = document.createElement('div');
  pdfArea.className = 'pdf-download-area';
  
  var pdfBtn = document.createElement('button');
  pdfBtn.className = 'pdf-download-btn';
  pdfBtn.title = 'Descargar como PDF';
  // Icono de descarga
  pdfBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
  pdfBtn.onclick = function() { window.print(); };
  
  pdfArea.appendChild(pdfBtn);
  document.body.appendChild(pdfArea);
})();
