window.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[n].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos (ajusta según tus necesidades)
  });
  