//Onde eu quero adicionar esse elemento?
let container = document.getElementById('first');

// console.log(container);

//Como criar um elemento HTML?
/* 
 let newDiv = document.createElement("div"); 

 //Como adicionar classes neste elemento?

  newDiv.className = "circle small green";

//Como pôr o elemento no arquivo HTML?

container.appendChild(newDiv);

let segundo =  document.createElement("div");
segundo.className = "circle small red";
container.appendChild(segundo);
 */
//Criar uma função que recebe uma ou mais classes e
//retorna uma div que possui essas classes
function louvor(elemento) {
    let novaDiv = document.createElement("div");
    novaDiv.className = elemento;
    return novaDiv;
}
 /* container.appendChild(louvor("circle small green")); */
 
 /* prototico abaixo */
 function aula (pai,filho) {
     pai.appendChild(filho)
 }

 aula(container, louvor("circle small yellow"))
 aula(container, louvor("circle small red"))
 aula(container, louvor("circle small red"))
 aula(container, louvor("square small green"))
 /* function vidaHaDiv(elemento) {
  let vidaHaDiv = container.appendChild(louvor(elemento));
  return vidaHaDiv;
 }
 vidaHaDiv("square small green")
 vidaHaDiv("circle small yellow")
 vidaHaDiv("circle small red")
 vidaHaDiv("square small red") */
 
/* AULA AOUVIVO */


 

/* let features = ['circle medium red', 'square small yellow', 'square medium green', 'circle medium red'];

function createDivElement (classes){
    let newDiv = document.createElement('div');
    newDiv.className = classes;
    return newDiv;
};

function addElmentAsChild(local, elemento){
    local.appendChild(elemento);
};


for(let feature of features){
    let element = createDivElement(feature);
    addElmentAsChild(container, element);
};
 */
// addElmentAsChild(container, createDivElement('circle big red'));

// container.appendChild(createDivElement('square small green'));
// container.appendChild(createDivElement('circle small red'));
// container.appendChild(createDivElement('square medium green'));
