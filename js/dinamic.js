document.addEventListener('DOMContentLoaded', function () {
    // Alternar tema claro/oscuro
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      // Cambiar el icono dependiendo del tema
      if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    });
  
    // Toggle del menú de navegación en dispositivos móviles
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        e.preventDefault();
      } else {
        alert("Mensaje enviado exitosamente!");
      }
    });
  
    // Carrusel de proyectos
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const totalItems = carousel.children.length;
    let autoSlideInterval;
  
    // Función para mover el carrusel
    function moveToIndex(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
  
    // Mostrar el siguiente proyecto
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= totalItems) {
        currentIndex = 0;
      }
      moveToIndex(currentIndex);
      resetAutoSlide();
    });
  
    // Mostrar el proyecto anterior
    prevBtn.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = totalItems - 1;
      }
      moveToIndex(currentIndex);
      resetAutoSlide();
    });
  
    // Función para cambiar imágenes automáticamente cada 5 segundos
    function autoSlide() {
      autoSlideInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= totalItems) {
          currentIndex = 0;
        }
        moveToIndex(currentIndex);
      }, 5000);
    }
  
    // Función para reiniciar el auto-slide cuando se hace clic en un botón
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlide();
    }
  
    // Iniciar el carrusel automático al cargar la página
    autoSlide();
  });
  