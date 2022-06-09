const d = document;
const $range = d.getElementById("range"),
  $span = d.getElementById("value");
// to avoid to style each bubble, I used styleSheets
const cssRules = d.styleSheets[0].cssRules;
let myRule = null;
for (const rule of cssRules) {
  if (rule.selectorText === ".bubble > .radius") myRule = rule;
}
$range.addEventListener("input", (e) => {
  $span.textContent = $range.value;
  myRule.style.borderRadius = `${$range.value}px`;
});
$span.textContent = $range.value;

// ROTATE
const $btnRotate = d.getElementById("rotate");
const $parentGradient = d.querySelector(".parent");
let deg = 90;
const rotateGradientBackground = () => {
  if (deg > 360) deg = 90;
  $parentGradient.style.setProperty("--a", `${deg}deg`);
  console.log(deg);
  deg += 90;
};
$btnRotate.addEventListener("click", () => rotateGradientBackground());
