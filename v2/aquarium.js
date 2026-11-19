const controls = document.querySelector(".aquarium-controls");
const gallery = document.querySelector(".aquarium-pair");
const buttons = [...controls.querySelectorAll("button")];

function showAquarium(selected) {
  for (const button of buttons) {
    const active = button === selected;
    document.getElementById(button.getAttribute("aria-controls")).hidden = !active;
    button.setAttribute("aria-pressed", String(active));
  }
}

for (const button of buttons) {
  button.addEventListener("click", () => showAquarium(button));
}
showAquarium(buttons[0]);
gallery.classList.add("single");
controls.hidden = false;