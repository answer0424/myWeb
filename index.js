function moveToScroll(id) {
    // 페이지 이동
    window.location.href = 'car.html#' + id;
    
    // 페이지가 완전히 로드된 후 스크롤 이동
    window.onload = function() {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth', 
          block: 'start',
        });
        
        // 추가로 정확히 1초 동안 스크롤을 조정하는 코드
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          });
        }, 1000);
      }
    }
  }
  