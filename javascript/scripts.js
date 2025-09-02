document.addEventListener('DOMContentLoaded', () => {
  //----- Burger menu toggle------
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('nav'); // Aquí el nav completo, para mostrar/ocultar menú

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // ----Cerrar menú al clicar enlace---
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  //----- Video especialidades - animar texto cuando entra en vista----
  const videoTexto = document.querySelector('.video-texto');

  if (videoTexto) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoTexto.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    observer.observe(videoTexto);
  }

  // ------Scroll horizontal con rueda en menú especialidades-------
  const menuItems = document.querySelector('.menu-items');

  if (menuItems) {
    menuItems.addEventListener('wheel', (e) => {
      e.preventDefault();
      menuItems.scrollLeft += e.deltaY * 3; // se multiplica la velocidad del scroll 
    });
  }

  // ----------- Aviso de reserva enviada (FormSubmit) ------------
  const ok = new URLSearchParams(window.location.search).get('ok');
  if (ok === '1') {
    alert('¡Reserva enviada! Revisa tu correo.');
    // Limpia la URL para que no repita el aviso al recargar
    const url = new URL(window.location.href);
    url.searchParams.delete('ok');
    history.replaceState({}, '', url.toString());
  }
});

// ----------- COOKIES -----------------

document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  const rejectButton = document.getElementById('reject-cookies');

  if (cookieBanner && acceptButton && rejectButton) {
    if (!localStorage.getItem('cookieConsent')) {
      cookieBanner.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieBanner.style.display = 'none';
      // Aquí puedes activar cookies opcionales como Google Analytics
    });

    rejectButton.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'rejected');
      cookieBanner.style.display = 'none';
      // No se activan cookies opcionales
    });
  }
});
