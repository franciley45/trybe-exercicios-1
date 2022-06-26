function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
/* ------------------------------------------------ */
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
/* -------------------------------------------------- */
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
/* -------------------------------------------------- */
function encode(str) {
  const possibleLetters = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  return str.replace(/[aeiou]/g, (match) => possibleLetters[match]);
}
/* -------------------------------------------------- */
function decode(str) {
  const possibleNumbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return str.replace(/[12345]/g, (match) => possibleNumbers[match]);
}
/* ------------------------------------------------------ */
const techList = (arrayTechnologies, name) => {

  if (arrayTechnologies.length === 0) return 'Vazio!';

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name
    });
  }
  return technologyList;
};
/* -------------------------------------------------------- */
const hydrate = (string) => {
  const splitString = string.split('');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);
    
    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
      console.log(glassesOfWater)
    }
  }
  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }
  return `${glassesOfWater} ${glass} de água`;
};

/* -------------------------------------------- */

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};

/* Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
let preco = 60;
let aVista = 54;
let em3x = 20
*/

let preco = 50;
let taixaDesconto = 50;
let em3x = 0;
let valorDavista = preco - ((taixaDesconto / 100) * preco);
em3x = preco / 3;
console.log(valorDavista)
console.log(em3x)

/* module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee}; */
