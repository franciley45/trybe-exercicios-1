let pai = document.body;

let h1 = document.createElement("h1");
h1.innerText = "praticando eventos";
pai.appendChild(h1);

let div1 = document.createElement("div");
div1.className = "quadrado"
pai.appendChild(div1);

div1.addEventListener("click", function() {
 div1.innerText = "a pratica leva a perfeição !!"
 div1.style.backgroundColor = "green"
})

div1.addEventListener("mouseover", function(){
    div1.style.backgroundColor = "PowderBlue"
    div1.innerText = "entrou !!"

})
div1.addEventListener("mouseout", function(){
    div1.style.backgroundColor = "Brown";
    div1.innerText = "saiu !!"
})



/* const borderEl = document.getElementById('border');

const propMapper = [
  ["border-top-left", "borderTopLeftRadius"],
  ["border-top-right", "borderTopRightRadius"],
  ["border-bottom-left", "borderBottomLeftRadius"],
  ["border-bottom-right", "borderBottomRightRadius"],
];


for (let [cssID, cssProp] of propMapper) {
  const input = document.getElementById(cssID);
  input.addEventListener('input', handleChange(input, cssProp));
}

function handleChange(input, cssProp) {
  return function() {
    borderEl.style[cssProp] = `${input.value}px`M
  }
} */