
document.addEventListener("DOMContentLoaded", function() {
    const lazyLoadElements = document.querySelectorAll('.lazy-load');
    
    const lazyLoad = (target) => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
  
            // 각 row에 맞는 콘텐츠를 동적으로 삽입
            if (element.id === 'row1') {
              element.innerHTML = `
                <div id="mediumCar">중형</div>
                <div id="row1-content" class="col-10">
                  <div id="mediumCar1" class="mediumCar col-3">HYUNDAI SONATA</div>
                  <div id="mediumCar2" class="mediumCar col-3">GENESIS G70</div>
                  <div id="mediumCar3" class="mediumCar col-3">KIA K5</div>
                </div>
                <div class="clear"></div>
                <!-- 다른 row 콘텐츠 추가 -->
              `;
            } else if (element.id === 'row2') {
              element.innerHTML = `
                <div id="largeCar">대형</div>
                <div id="row2-content" class="col-10">
                  <div id="largeCar1" class="largeCar col-3">HYUNDAI PALISADE</div>
                  <div id="largeCar2" class="largeCar col-3">KIA SORENTO</div>
                  <div id="largeCar3" class="largeCar col-3">GENESIS GV80</div>
                </div>
                <div class="clear"></div>
                <!-- 다른 row 콘텐츠 추가 -->
              `;
            } else if (element.id === 'row3') {
              element.innerHTML = `
                <div id="electricCar">전기차</div>
                <div id="row3-content" class="col-10">
                  <div id="electricCar1" class="electricCar col-3">HYUNDAI KONA EV</div>
                  <div id="electricCar2" class="electricCar col-3">KIA NIRO EV</div>
                  <div id="electricCar3" class="electricCar col-3">HYUNDAI IONIQ 5</div>
                </div>
                <div class="clear"></div>
                <!-- 다른 row 콘텐츠 추가 -->
              `;
            } else if (element.id === 'row4') {
              element.innerHTML = `
                <div id="sportsCar">스포츠카</div>
                <div id="row4-content" class="col-10">
                  <div id="sportsCar1" class="sportsCar col-3">HYUNDAI AVANTE N</div>
                  <div id="sportsCar2" class="sportsCar col-3">KIA STINGER</div>
                  <div id="sportsCar3" class="sportsCar col-3">HYUNDAI VELOSTER</div>
                </div>
                <div class="clear"></div>
                <!-- 다른 row 콘텐츠 추가 -->
              `;
            }
  
            observer.unobserve(element); // 콘텐츠가 로드되면 감시 중지
          }
        });
      });
  
      observer.observe(target);
    };
  
    lazyLoadElements.forEach(lazyLoad);
  });
  