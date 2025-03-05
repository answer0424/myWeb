document.querySelector(".img__btn").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s--signup");
});

document.getElementById("submit1").addEventListener("click", function (event) {
  const form = document.getElementById("loginForm1");
  const submit = document.getElementsByTagName("input");
  let check = true;

  submit.forEach((element) => {
    if (element.value.trim() === "") {
      check = false;
    }
  });

  if (check) {
    form.submit();
  }
});

document.getElementById("submit2").addEventListener("click", function () {
  const form = document.getElementById("loginForm2");
  const submit = document.getElementsByTagName("input");
  let check = true;

  submit.forEach((element) => {
    if (element.value.trim() === "") {
      check = false;
    }
  });

  if (check) {
    form.submit();
  }
});

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
