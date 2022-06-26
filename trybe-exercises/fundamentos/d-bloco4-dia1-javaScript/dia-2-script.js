/*  EXERCICIO 1 tasksList.unshift puxa para primeira posição
 */


/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("coco babaçu")

console.log(menu); */


/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.unshift('Fazer exercícios da Trybe');
console.log(tasksList); */

/* 
EXERCICIO 2 REMOVER ELEMENTO DO ARRY */
  


/* 
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
 */
/* tasksList.pop([1]);  // remove a última tarefa
console.log(tasksList); */

/* tasksList.shift();  // remove a última tarefa
console.log(tasksList) */


   
/* EXERCICIO 3 ENCONTRA ELEMENTO DENTRO DO ARRY ARRY */


/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask); */



/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices); */

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("portfólio") ;

console.log(indexOfPortfolio); */

/* EXERCICIO 4 for multiplicando numero */

/* let numero = 5;
for(var index = 1; index <=9; index ++) {
    console.log(numero * index)
    console.log("*")
} */


/* EXERCICIO 5 for imprimindo lista de array */

/* 
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (var index = 0; index < groceryList.length; index += 1 ) {
    console.log(groceryList[index])
} */
 

/* EXERCICIO 6 for/of deixa o for mas curto é simplis */



/* let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado:
//1
//2
//3
//4
//5 */


 /* exemplo 2 */



/* let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nomes of names) {
    console.log(nomes)
} */

  /* exemplo 3 */
/* 
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (var index = 0; index < numbers.length; index +=1) {
      console.log(numbers[index])
  }
 */
        /* exemplo 3 somando elementos de um array  */  
 

 /*  let soma = 0;
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let index = 0; index < numbers.length; index +=1) {
     soma += numbers[index];
  }
  console.log(soma) */

   /* exemplo 3 somando total de um array dividido pela média aritmética  */ 

/*   let soma = 0;
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let index = 0; index < numbers.length; index +=1) {
     soma += numbers[index];
  }
  console.log(soma ) */

 /* exemplo 4 somando total de um array de divido por 10 condição if */  


/*   let soma = 0;
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let index = 0; index < numbers.length; index +=1) {
     soma += numbers[index];
  }
  if (soma / 10 > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20") 
}
 */


  /* exemplo 5 for/if encontrado maior numero de uma arry juntando dentro de um novo array */

  /* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 100, 27, 100, 100];
  let resultado = numbers[0];
  let sim2 = 0;

  for ( let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > resultado) {
      resultado = numbers[index];
      sim2 = 1
    } else if ( resultado === numbers[index]) {
      sim2 += 1
    }
  }



console.log(resultado)
console.log(sim2) */

       
 /* exemplo 6 for/if encontrado menor numero de uma arry */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = numbers[0];
for ( let index = 1; index < numbers.length; index++) {
if (numbers[index] < resultado) {
  resultado = numbers[index]
}
}
console.log(resultado) */

/* exemplo 6 for/if encontrado menor palavra de uma arry */

/* let numbers = ["java", "javascript", "python", "html", "css"];
let resultado = numbers[0];
for ( let index = 1; index < numbers.length; index++) {
if (numbers[index] < resultado) {
  resultado = numbers[index]
}
}
console.log(resultado) */


  /* exemplo 6 for/if encontrado numeros par é imprimindo total */

/*  let par = [];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (var index = 0; index < numbers.length; index +=1) {
   if ( numbers[index] % 2 === 0) {
     par.push(numbers[index])
   }  
}
console.log(par.length) */


/* exemplo 7 for/if encontrado numeros impar é imprimindo total */


/* let impar = [];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (var index = 0; index < numbers.length; index +=1) {
   if ( numbers[index] % 2 === 0) {
     
   }  else {
    impar.push(numbers[index])
   }
}
console.log(impar.length) */


/* exemplo 8 for criando uma array apos imprimir o resultado */

/* let numero = [];
for (let index = 1; index <= 25; index += 1) {
  numero.push(index)
}
console.log(numero) */

/* exemplo 8 dividindo array por 2 */


/* let resultado = [];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index +=1) {
  resultado += " "
  resultado += numbers[index] / 2
}
console.log(resultado) */




/* let word = 'tryber';
 let resultado = [];
for (var index = 6; index <= word.length -1; index -= 1 ) {
    console.log(word[index])
}

console.log(resultado) */


/* exemplo 9 fazer porcentagem 

 Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
let preco = 60;
let aVista = 54;
let em3x = 20

*/


/* let preco = 100;
let taixaDesconto = 10;
let em3x = 0;
let valorDavista = preco - ((taixaDesconto / 100) * preco);
em3x = Math.round(preco / 3);
console.log(`valor do produto = ${preco},00`)
console.log(`valor do produto com desconto = ${valorDavista},00`)
console.log(`valor do produto divido em 3x = ${em3x},00`) */


/* exemplo 10 somandos valores de um array */

/* let array = [1, 2, 3, 4, 5,];
let resultado = 0;
for( let index =0; index < array.length; index +=1) {
  resultado += array[index]
}
console.log(resultado) */

/* exemplo 11 encontrando uma posição no array */

/* let array = [1, 2, 3, 4, 5,];
let resultado = 0;
for(index =0; index < array.length; index +=1) {
  resultado = array[3]
}

console.log(resultado) */


/* exemplo 12 vai pega o numeros da diagonal direita soma apos pega os numeros da diagonal esquerda tb soma apos diminui os valores entre se 
[1, 2, 3] 
[4, 5, 6]
[7, 8, 9]
*/

/* function diagonalDiferente(arr) {
  let linhas = 0;
  let colunas = 0;
 for(let index = 0; index < arr.length; index += 1) {
  linhas += arr[index][index]
  colunas += arr[index] [arr.length - 1 - [index]]

 }
  return Math.abs(linhas - colunas);
}

console.log(diagonalDiferente([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); */


/* exercio 13 linha é colunas de as asteriscos  */


/* function piramende(n) {
  let linhas = '';
  let simbolo = '#';
  for (let indexlinha = 0; indexlinha < n; indexlinha += 1) {
      linhas += simbolo }
      for(let index = 0; index < n; index += 1){
        console.log(linhas)
  }
  console.log(linhas)
}
piramende(5) */