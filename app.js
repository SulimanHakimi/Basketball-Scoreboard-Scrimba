let homePonit = document.getElementById("Home-p");
let guestPoint = document.getElementById("Guest-p");
let homeBtns = document.querySelectorAll(".homeBtn");
let guestBtns = document.querySelectorAll(".guestBtn");
let reset = document.getElementById("reset");
let save = document.getElementById("save");

let homeNumber = 0;
let guestNumber = 0;
homeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    homeNumber += Number(btn.value);
    homePonit.innerHTML = homeNumber;
  });
});
guestBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    guestNumber += Number(btn.value);
    guestPoint.innerHTML = guestNumber;
  });
});
reset.addEventListener("click", () => {
  remover();
});

save.addEventListener("click", () => {
  if (homeNumber > 30 && homeNumber > guestNumber) {
    alert("home win");
    remover();
  } else if (guestNumber > 30 && guestNumber > homeNumber) {
    alert("guest win");
    remover();
  } else {
    alert("points is less then 30 match level");
  }
});
function remover() {
  homePonit.innerHTML = 0;
  guestPoint.innerHTML = 0;
  homeNumber = 0;
  guestNumber = 0;
}
