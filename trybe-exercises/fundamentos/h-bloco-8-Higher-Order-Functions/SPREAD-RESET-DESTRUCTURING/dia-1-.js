//  ###spread operator###

/* const numeros =  [1, 2, 3]
const total = [...numeros, 4, 5, 6]
console.log(total) */

// exemplo 2 ##### spread operator##### usando os parametro de ferente para v como funciona  spread operator
/* 
const arrayDnumeros = [1.3, 2.6, 10, 5.9];
const funcaojunta = (x, y, z) => ` resultado do paramentro 3 = ${z}`
console.log(funcaojunta(...arrayDnumeros))  */

// exemplo 2 ##### reset + reduce## o reset ### essa função tem dois retorno aproveitaveis primeiro traforma os numeros usandos como paramentos em um array . segundo o reduce faz a soma total desses numeros. 

/* const  array2 =  [1, 2]
const total = (...paramentro) => {
    console.log(paramentro)
 return paramentro.reduce((crr, arr) =>  crr + arr ,0)
}
console.log(total(1, 2, 4, 5, 10)) */