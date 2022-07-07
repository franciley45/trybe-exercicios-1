/* const numbers = [1, 2, 3];
 
const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ] */

// exemplo 2 spread 

/* const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); */

// exemplo 3 spread 

/* const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76 */

// exemplo 4 ### Math.max #### Math.min ### procura o maior numero o de baixo procura  o menor numero 

/* const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5 */

// exemplo 5  spread 

/* const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer);  */

// exxemplo 5  Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread. 
  // Faça uma lista com as suas frutas favoritas

/* const specialFruit = ['maçã', 'uva', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mamao', 'pera', 'cebola'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};
console.log(fruitSalad(specialFruit, additionalItens));
 */
// exxemplo 6  spread  dentro de uma função

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// exemplo 7  spread  dentro de uma função

 /*  const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 12)); // 88 */

// exemplo 8 ##### Object Destructuring  ###### esssa propiedade como vemos abaixo faz com q consiga acessar as chaves de um objeto individualmente como bem intender 

/* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  const valor =  Object.values(product)
  console.log(valor)

  const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); */

// exemplo 9 ##### Object Destructuring  ###### usando um objeto dentro de outro objeto 
// Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(), para isso, vamos utilizar a desestruturação de objetos:

const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

  // desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`nome ${name}, idade ${age} planeta ${planetName} é jei ? ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);