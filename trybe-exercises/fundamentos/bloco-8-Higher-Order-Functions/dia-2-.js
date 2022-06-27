//#### FOREACH ()

const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

// exemplo 1  forEach() Para ser aprovado, ele precisa obter uma nota acima de 60 utilizando 
/*   const aprovadoReprovado = () => {
   students.forEach((elemento, index) => {
   if(elemento.grade > 60){
    students[index].approved = 'Aprovado'
   } else {
    students[index].approved = 'Recuperação'
   }
});
}
aprovadoReprovado()
console.log(students) */

// abaixo utilizando operador ternário

/* const aprovReprov = () => {
 students.forEach((element, index) => (element.grade >= 60) ? students[index].approved = 'Aprovado' : students[index].approved = 'Recuperação')
}
aprovReprov()
console.log(students) */

// exemplo 2 find() encontrar o primeiro número que seja divisível por 5 em uma lista de números.
/* const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const encontadoDivisivel = numbers.find((element) => element % 5 === 0)
console.log(encontadoDivisivel)
 */

// exemplo 3 forEach() passando por elemento, index é array

/* const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
}); */

// exemplo 4 forEach() NESSE CASO DA PARA V Q A FUNÇÃO FOI CRIADA FORA IMDEPEDENTE, APOS CHAMA O FOREACH É JOGA A FUNÇÃO DENTRO DO PARAMENTRO APROVEITANDO O TAMANHO DO ARRAY PARA EXECUÇÃO DA FUNÇÃO POR MESMO NUMERO DE VEZ DA QUANTIDA DE ELEMENTO DO ARRAY UM POUCO TONTO MAS VOU ACOMPANHA DEVAGA ESSES MOVIMENTOS DE MALABARISMO

/* const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
 */
// exemplo 4 forEach() MAS UM EXEMPLO ABAIXO

/* const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ] */

// EXEMPLO 5 EXERCICIO 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

/* const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  // Adicione seu código aqui
 emailListInData.forEach(showEmailList) */

// EXEMPLO 5 EXERCICIO 1 - Use o método find() encontrando divisivel por 2 

/*  const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True */


// EXEMPLO 5 EXERCICIO 2 Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((element) =>(element % 3 === 0 && element % 5 === 0))
}

console.log(findDivisibleBy3And5()) */


// EXEMPLO 5 EXERCICIO 2 Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((element) => element.length === 5)
}
console.log(findNameWithFiveLetters()); */

// exemplo 6 exercio 3 Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

/* const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
 return musicas.find(element => element.id === id)
}

console.log(findMusic('31031685'))
 */
// exemplo 7 exercio 4 para verificar se possui algum nome que começa com a letra desejada:

/* const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false */

/* #######exemplo 7  MUITO IMPORTATE COMO PERCORE OBJETOS EM FORMA DE ARRAy */

/* const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades)); */
//  exemplo 8 soma() - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;

/* const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((element) => element === name)
}

console.log(hasName(names, 'Ana')) */

// exemplo 9 every() - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
/* 
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((element) => element.age >= minimumAge)
}

console.log(verifyAges(people, 15)); */

// exemplo 10 usando o sort()

/* const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((a,b) => a.age - b.age)
console.log(people); */

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// exemplo 11 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

/* function authorBornIn1947() {
  // escreva aqui o seu código
   return  books.find((element) => element.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947()) */

// exemplo 11 forEach() 2 - Retorne o nome do livro de menor nome.


/* function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length ) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
 console.log(smallerName()) */


// exemplo 12 find() 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

/* const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((element) => element.name.length === 26)
}
console.log(getNamedBook()) */

// exemplo 13  4 - Ordene os livros por data de lançamento em ordem decrescente.

/* function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
    return books.sort((a, b) => b.releaseYear - a.releaseYear)
}

console.log(booksOrderedByReleaseYearDesc()) */

// exemplo 14 every ()🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

/* const anodeNascimento = books.every((element) =>(element.author.birthYear > 1900 && element.author.birthYear <= 2000))
console.log(anodeNascimento) */

// exemplo 14  soma() 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false

/* function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1989)
}
console.log(someBookWasReleaseOnThe80s()) */

// exemplo 15 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  
  return books.every((element) => element.author.birthYear)
}