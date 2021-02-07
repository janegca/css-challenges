const frame = document.querySelector("#frame");

frame.addEventListener("mousemove", (e) => {
  let gradientLevel = (0.5 - e.layerY / e.clientY) * 100;
  document.documentElement.style.setProperty("--height", e.layerY + "px");
  document.documentElement.style.setProperty("--gradient", gradientLevel + "%");
});
