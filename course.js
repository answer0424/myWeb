// 스크롤 이벤트를 통해 버튼을 보여주거나 숨김
window.onscroll = function() {
    var goUpButton = document.getElementById("goUpButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goUpButton.style.display = "block";
    } else {
        goUpButton.style.display = "none";
    }
};

// 페이지 상단으로 스크롤하는 함수
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}