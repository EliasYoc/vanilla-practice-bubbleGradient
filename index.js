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

//----------------------- ROTATE
const $btnRotate = d.getElementById("rotate");
const $parentGradient = d.querySelector(".parent");
let deg = 45;
let prevForbiddenDeg = 90;
//forbbiden aside degs [90,270,450,630]
//deg [0, 45, 135, 180, 225, 315]
const rotateGradientBackground = () => {
  if (deg === 90) deg += 45;
  if (prevForbiddenDeg + 180 === deg) {
    prevForbiddenDeg = deg;
    deg += 45;
  }
  console.log("deg: ", deg + "°");
  // console.log("prevdeg:", prevForbiddenDeg);
  $parentGradient.style.setProperty("--a", `${deg}deg`);
  deg += 45;
};
$btnRotate.addEventListener("click", () => rotateGradientBackground());

//------------------------ SIMULAR MSG
const $btnSend = d.getElementById("send");
const sendMessage = () => {
  const $element = `
  <div class="msg-wrapper mine">
    <span class="msg-bg"></span>
    <p class="bubble">
      <span class="radius"></span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum.
    </p>
  </div>
  `;
  $parentGradient.insertAdjacentHTML("afterbegin", $element);
  rotateGradientBackground();
};
$btnSend.addEventListener("click", sendMessage);
