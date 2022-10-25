const dropDown = document.getElementById("dropDown");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const hambIco = document.getElementById("hambIco");
const link1 = document.getElementById("link1");
let visible = false;

const toggleHamb = () => {
  if (visible === true) {
    line1.classList.remove("line1Cros");
    line2.classList.remove("line3Cros");
    line3.classList.remove("line2Cros");
    dropDown.classList.remove("show_hamb_menu");
    dropDown.classList.add("hide_hamb_menu");
    visible = !visible;
  } else {
    line1.classList.add("line1Cros");
    line2.classList.add("line3Cros");
    line3.classList.add("line2Cros");
    dropDown.classList.add("show_hamb_menu");
    dropDown.classList.remove("hide_hamb_menu");
    visible = !visible;
  }
};

if (visible === true) {
}
