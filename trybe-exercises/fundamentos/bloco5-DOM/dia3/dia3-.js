/* 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target: */


/* exercio 1 */
const firstLi = document.getElementById('first-li');
/* firstLi.className = "tech"; */
 firstLi.addEventListener("dbclick", clik)
 function clik() {
    firstLi.className = "techfuuul"; 
 }
   
/*  firstLi.innerText = "Java Script";

 input.addEventListener("click", mudaTexto) {
    firstLi.innerText = "Java Script";
      }
 */

   /* exercio 2  */
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
document

const myWebpage = document.getElementById('my-spotrybefy');

function mudacor() {
   myWebpage.style.color = "red" ;
}
myWebpage.addEventListener("mouseover", mudacor)

/* myWebpage.hrf = "https://github.com/franciley45" */

function linkGitHub () {
   myWebpage.hrf = "https://github.com/franciley45"
}
myWebpage.addEventListener("dbclick",linkGitHub)
/* mudacor("red")
myWebpage.innerText = "red" ; */

 /*  let texte = document.getElementById("my-spotrybefy"); */

 function mudartexto() {
   firstLi.innerText = tex
 }