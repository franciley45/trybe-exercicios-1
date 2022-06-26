//#### FIND() MAP() FILTER()####//

/* exemplo 1 encontrando numeros pares com o filter() */

/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ] */

/* exemplo 2 pegando apenas pessoas que n tem idade para dirigir menores de 18 com a filter() */

 const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
  
 /*  const verifyAgeDrive = (callback) => (
    callback.filter((people) => (people.age < 18))
  );
  
  console.log(verifyAgeDrive(objPeople)); */
  // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]


/* exemplo 3 encontrando uma pessoa dentro do array retirando ela pelo nome  filter() */

/*   const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

  const removeStudentByName = (name, listStudents) =>
    listStudents.filter((student) => student !== name);
    // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
  
  const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
  console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ] */

  /* exemplo 4 comparando map() é for  */

/* for */
/*   const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = [];
  
  for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
  }
  
  console.log(fullNames); */

  /* map() */

  /* const map1 = persons.map((elemento) => ` ${elemento.firstName} ${elemento.lastName}`)

  console.log(map1) */


  // exemplo 4 map() transformando array em numeors negativos 


/*   const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ] */

/*  exemplo 5 colocando preços nos elementos com map()  */

/* 
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const juntado = (produtos, preco) => produtos.map((prod, index) =>({[prod]: preco[index]}))

const listProducts = juntado(products, prices);
console.log(listProducts); */

/* exemplo 6 usando forEach() pegando numero maior q 5 é par  */

/* const numeros = [1, 2, 3, 4, 5, 6];
const resultado = [];
 numeros.forEach((element) => {
  if(element < 5 && element % 2 === 0){
    resultado.push(element)}
  
 })

console.log(resultado) */

/* exemplo 7 procurando chaces de nome dentro do objeto com map() 
Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.*/


 const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];
/* // Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã filter() map(). 
const buscaNome = estudantes.filter((element) => 
(element.turno === 'Manhã')).map((elemento) => `${elemento.nome} ${elemento.sobrenome}`)

console.log(buscaNome)

//buscando pelo nome find() apos as materias com map() comparando maior menor nota nota

const reportStatus1 = (nome, array) => {
  const buscaNome = array.find((element) => (element.nome === nome));
  const resultado = buscaNome.materias.map((e) => `${e.name} ${(e.nota >= 60) ? 'Aprovado' : 'Reprovado'}`);
   return resultado;
}


console.log(reportStatus1('Natalia', estudantes)); */

/* exemplo 8  */
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

// exemplo 8 🚀 exercio 1 criando uma nomo array com nomes dos livros, genero é nome do author

/* function formatedBookNames(araaytodo) {
 const array = araaytodo.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`)
 return array
}
console.log(formatedBookNames(books)) */

// exemplo 9 🚀 exercio 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

/* const novoarray = () => {
  const selecaoDechave = books.map((elemento) => ({
    author: elemento.author.name,
    age: elemento.releaseYear - elemento.author.birthYear,
   })).sort((a, b)=> a.age - b.age) 

  return selecaoDechave
}
console.log(novoarray()) */

// exemplo 10 exercio 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

/* function fantasyOrScienceFiction() {
  // escreva seu código aqui
  const resultado = books.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia'))
  return resultado
}
console.log(fantasyOrScienceFiction()) */


// exemplo 11 exercio 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
/* function oldBooksOrdered1() {
  // escreva seu código aqui
  const livros = books.filter((elemento) => 2022 - elemento.releaseYear > 60).sort((a, b)=> a.releaseYear - b.releaseYear)
  return livros
}
console.log(oldBooksOrdered1()) */

// exemplo do course abaixo 🚀 4

/* function oldBooksOrdered() {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => (
    book.releaseYear < currentYear - 60
  )).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}
console.log(oldBooksOrdered())
console.log(new Date().getFullYear()) */

// exemplo 12 exercio 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

/* const nomesAutores = books.filter((elementos1) => elementos1.genre === 'Ficção Científica' || elementos1.genre === 'Fantasia').map((element) => `${element.author.name}`).sort()
console.log(nomesAutores) */

// exemplo do course abaixo 🚀 5

/* function fantasyOrScienceFictionAuthors() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book) => book.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors()) */


// exemplo 13  exercio 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
/* const livroMasDe60Anos = () => {
const DataAtual = new Date().getFullYear()
return resultado = books.filter((elementos) => (DataAtual - elementos.releaseYear) > 60).map((elemento) => elemento.name) 
}
console.log(livroMasDe60Anos()) */

// exemplo 14 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais
// Dica: cada inicial termina com um ponto.

/* const BuscaPorInicias = () => {
const resultado = books.filter((elemento) => (elemento.author.name[1] === '.' && elemento.author.name[4] === '.' && elemento.author.name[7] === '.'))[0].name;
return resultado;
}
console.log(BuscaPorInicias()) */

// abaixo exemplo do course 

/* function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName()) */

// calculadora de porcentagem abaixo 

/* const p100t = (porcento, valor) => porcento / 100 * valor;
console.log(p100t(15, 1000))
 */