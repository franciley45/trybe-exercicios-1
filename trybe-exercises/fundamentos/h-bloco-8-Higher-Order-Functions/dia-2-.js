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

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((element) => element.length === 5)
}
console.log(findNameWithFiveLetters());

// Utilize o find para encontrar a música com id igual a 31031685, caso ela exista: