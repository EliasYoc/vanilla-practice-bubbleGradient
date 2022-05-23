const d = document;
const $range = d.getElementById("range"),
  $span = d.getElementById("value");
// to avoid to style each bubble I used styleSheets
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
