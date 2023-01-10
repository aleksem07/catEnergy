const beforeAfterContainer = document.querySelector(".before-after__example");

const sliderElement = beforeAfterContainer.querySelector(".range-controls");
const catBefore = beforeAfterContainer.querySelector(".before-after__before");
const beforeMin = beforeAfterContainer.querySelector(".beforeMin");
const afterMax = beforeAfterContainer.querySelector(".afterMax");

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 55,
  connect: [true, false],
});

sliderElement.noUiSlider.on("update", (_, handle, unencoded) => {
  catBefore.style.width = unencoded[handle] + "%";
});

beforeMin.addEventListener("click", () => {
  sliderElement.noUiSlider.set(100);
  catBefore.style.width = 100 + "%";
});

afterMax.addEventListener("click", () => {
  sliderElement.noUiSlider.set(0);
  catBefore.style.width = 0 + "%";
});
