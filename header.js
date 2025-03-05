// 스크롤 이벤트를 통해 버튼을 보여주거나 숨김
window.onscroll = function () {
  var goUpButton = document.getElementById("goUpButton");
  if (document.documentElement.scrollTop > 20) {
    goUpButton.style.display = "block";
  } else {
    goUpButton.style.display = "none";
  }
};

// 페이지 상단으로 스크롤하는 함수
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("menu-icon").addEventListener("click", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
});

document.getElementById("menu-icon").addEventListener("click", function () {
  const bar1 = this.querySelector(".bar1");
  const bar2 = this.querySelector(".bar2");
  const bar3 = this.querySelector(".bar3");

  // 길이 변화
  if (bar1.style.width === "6.5vh") {
    bar1.style.width = "5vh";
    bar2.style.width = "6.5vh";
    bar3.style.width = "3vh";
  } else {
    bar1.style.width = "6.5vh";
    bar2.style.width = "3vh";
    bar3.style.width = "5vh";
  }
});




