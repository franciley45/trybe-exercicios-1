
/* exercio 1  for/ if  somando array é imprimindo se for maior que 15 */

/* let fruits = [3, 4, 10, 1, 12];
let resultado = 0;
for (let index = 0; index < fruits.length; index +=1) {
    resultado = fruits[index] + resultado
}
if (resultado > 15) {
    console.log(resultado)
} else if (resultado <= 15) {
    console.log("valor menor que 16")
} */

/* exercio 2 for / if se variavel for maior q 1 imprimir um quadrado de ***** no valor de n */

/* let n = 5; 
let linhas = "";
let simpolo = "*";

if (n > 1) {
    for (let index = 0; index <= n; index +=1) {
        linhas = linhas + simpolo;  
        }
        for( let index2 = 0; index2 <= n; index2 +=1) {
            console.log(linhas)
        }
    } */

  /* exercio 3 ataque da rainha */


  /*  let linhaRainha = 0;
   let colunaRainha = 0;

   let linhaBispo = 10;
   let colunaBispo = 10;
   let podeAtacar = false;
  
    if (linhaRainha === linhaBispo || colunaRainha === colunaBispo) {
      podeAtacar = true;
      console.log('Ataque bem sucedido na linha ou na coluna');
    } 

    let linhaRainhaClone = 10;
    let colunaRainhaClone = 10;

    for (let passos = 1; passos <=7; passos +=1) {
        linhaRainhaClone = passos;
        colunaRainhaClone = passos;
        console.log (linhaRainhaClone, colunaRainhaClone)
        if (colunaRainhaClone > 7 || linhaRainhaClone > 7) {
            break;
        }
        if (linhaRainhaClone === linhaBispo && colunaRainhaClone === colunaBispo) {
            podeAtacar = true;
           console.log("ataque bem sucedido na diagonal inferior direita")
           break;
        }
    }

    console.log(podeAtacar)
 */


  /*   let dados = {
        nome: "luis",
        sobreNome:"fernando",
        endereco: {
            rua: "jalma dutra",
            numero: 480,
        } 
    };
    /* console.log([dados]) */
   /*  console.log(dados.nome + dados.sobreNome + dados.endereco.numero)

    console.log(dados["nome"] + dados["sobreNome"] + dados["endereco"]["numero"])

    dados ["carros"] = "gol";
    
    console.log(dados) */ 

  /*   let moradores = [
        {
          nome: 'Luiza',
          sobrenome: 'Guimarães',
          andar: 10,
          apartamento: 1005,
        },
        {
          nome: 'William',
          sobrenome: 'Albuquerque',
          andar: 5,
          apartamento: 502,
        },
        {
          nome: 'Murilo',
          sobrenome: 'Ferraz',
          andar: 8,
          apartamento: 804,
        },
        {
          nome: 'Zoey',
          sobrenome: 'Brooks',
          andar: 1,
          apartamento: 101,
        },
      ];
      
 /*      let primeiroMorador = moradores[0];
      console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
      console.log(primeiroMorador['andar']); // 10
      
      let ultimoMorador = moradores[moradores.length - 1];
      console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
      console.log(ultimoMorador.nome); // Zoey
      console.log(primeiroMorador[]) */


/*       let code = moradores[moradores.length - 2];
console.log(code) */


/* Crie um objeto player contendo as variáveis listadas abaixo. */
/*  Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade". */
/* Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo. */

/* let player = {
    name:'Marta',
lastName:'Silva',
age:34,

bestInTheWorld: [
    2006, 2007, 2008, 2009, 2010, 2018 ],

medals: {
     golden: 2,
      silver: 3,
      
     },
        
     
}
 

console.log(  "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes  " + player.bestInTheWorld)

console.log( "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata" + "  " + player.medals.golden + "  " + "  " + player.medals.silver) */



/* let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
} */

/* let cars = ['Saab', 'Volvo', 'BMW'];

for (let index of cars) {
  console.log(index);
} */
/* 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. */

/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for ( let index in names) {
    console.log("ola   " +  names[index])
} */

/* 
2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto. */


/* let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for ( let index in car) {
      console.log(car[index])
  } */


  /* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: */


 /*  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  for (let index  in info) {
      console.log(info.personagem) 
  } */

 /*  let carros = ["vamo", "que", "q"];
   let foi = [];
   foi.push(carros[0]);
   foi.push(carros[carros.length-1])
  
  console.log(foi)
  console.log(carros) */
 /* let concatName = ["vamo", "que", "q"];
  let foi = [];
  let nao =[];
  foi.push(concatName[concatName.length - 1])
   nao.push(concatName[0])
   let resultado = foi + "," + nao

  console.log(resultado) */

  let fizzBuzz = [3, 5, 7];
let fizz = [];
  for (let index = 0; index < fizzBuzz.length; index += 1) {
    if (fizzBuzz[index] % 3 === 0) {
      fizz.push("fizz");
    } else if (fizzBuzz[index] % 5 === 0) {
       fizz.push("buzz");
    } else {
      fizz.push("bug!");
    }
     if (fizz.length > "fizz") {
      fizz.push("fizzBuzz");
    }
  }
  console.log(fizz)