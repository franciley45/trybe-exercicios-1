

/* exemplo 1 HOF É CALLBACK  */

/* const q1 = () => 'Acordando!!'
const q2 = () => 'Bora tomar café!!'
const q3 = () => 'Partiu dormir!!'
const doingThings = (callback) => {
return callback() 
}
 
console.log(doingThings(q3)) */

/* exemplo 2 HOF É CALLBACK   criando email */

/* const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'), 
    id3: callback('Carla Paiva'), 
  }
  return employees
}
function criaEmail(emailname){
  const email = emailname.toLowerCase().split(' ').join('_');
  return { emailname, email:  `${email}@trybe.com`};
}
console.log(newEmployees(criaEmail)) */

/* exemplo 3 HOF É CALLBACK   criando email com ponto é com underline */

/* const listaNomes = ['bruno prado', 'mayane foster', 'lara cobawsky'];

const emailComPonto = (nome) => {
  let email = `${nome.toLowerCase().replace(' ', '.')}@trybe.com`
  return email;
}
const emailComUnderline = (nome) => {
  let email = `${nome.toLowerCase().replace(' ', '_')}@trybe.com`
  return email;
}

const geraEmail = (callback) => {
  let resultado = [];
  for (let index = 0; index < listaNomes.length; index += 1) {
    resultado.push(callback(listaNomes[index]))
  }

  return resultado;
}

console.log(emailComPonto('Franciley Rodrigues'))
console.log(emailComUnderline('Franciley Rodrigues'))
console.log(geraEmail(emailComPonto))
console.log(geraEmail(emailComUnderline)) */

/* exemplo 4  Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

/* let geraNumeroApostado = () => {
  let numeroApostado = Math.floor(5* Math.random() + 1);
  console.log(`resultado da funcão numero apostado = ${numeroApostado}`)
  return numeroApostado;
}

let resultado = (callback) => {
  let numero = Math.floor(5* Math.random() + 1);
  console.log(`resultado da funcão numero sortiado = ${numero}`)
  let numeroApostado = callback()
  return numero === numeroApostado ? 'Parabéns você ganhou' : 'Tente novamente'
}
console.log(resultado(geraNumeroApostado)) */

/* modelo 2 exemplo 4 abaixo do course  bem mas enchuto mas um dia chego la */

/* const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker)); */

/* exemplo 5 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)

e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.


Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
 */

/* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (array1, array2) => {
  let resultado = 0;
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] === array2[index]) {
      resultado += 1;
    } else if (array2[index] === 'N.A') {
      resultado += 0;
    } else {
      resultado -= 0.5
    }
  };
  return resultado;
}

function hof(p, b, callback) {
  return callback(p, b)
}
console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers)) */