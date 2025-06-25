// 輪播功能
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.swiper-slide');
  const dots = document.querySelectorAll('.pagination-dot');
  let currentSlide = 0;
  
  // 顯示指定輪播
  function showSlide(index) {
    // 透過 transform 來移動每個 slide
    slides.forEach((slide, i) => {
      const offset = i - index;
      slide.style.transform = `translateX(${offset * 100}%)`;
    });
    
    // 更新分頁點
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // 下一張輪播
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // 點擊分頁點切換輪播
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
  
  // 初始化顯示第一張
  showSlide(0);
  
  // 每3秒自動輪播
  setInterval(nextSlide, 3000);
});