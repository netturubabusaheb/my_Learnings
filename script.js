document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById('slidesContainer');
    let currentSlide = 0;
  
    fetch('script.json')
      .then(response => response.json())
      .then(data => {
        const slides = data.map(item => createSlide(item));
        slidesContainer.append(...slides);
        showSlide(currentSlide);
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
      })
      .catch(error => console.error('Error fetching JSON:', error));
  
    function createSlide(item) {
      const slide = document.createElement('div');
      slide.classList.add('slide');
  
      const image = document.createElement('img');
      image.src = item.imagePath;
      image.alt = item.altText;
      
      slide.appendChild(image);
  
      return slide;
    }
  
    function showSlide(slideIndex) {
      const slideWidth = slidesContainer.children[0].offsetWidth;
      slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slidesContainer.children.length;
      showSlide(currentSlide);
    }
  });
  