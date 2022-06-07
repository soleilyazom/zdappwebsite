function removeClass() {
  let modal4 = document.getElementsByClassName("menubar");
  modal4[0].classList.toggle("animate-bottom2");
  modal4[0].classList.toggle("modalleft");
  console.log("modal4", modal4);
}

function addClass() {
  let modal4 = document.getElementsByClassName("menubar");
  modal4[0].classList.add("animate-bottom2");
  modal4[0].classList.remove("modalleft");
  console.log("modal4", modal4);
}

function addModal4() {
  let modal4 = document.getElementsByClassName("menubar");
  modal4[0].classList.add("animate-bottom2");
  modal4[0].classList.remove("modalleft");
}
