import { Reducer } from "redux";


/* const Redux = require('redux');



const ESTADO_INICIAL = {
    login: false,
    email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL) => {
    return state;
  };
  
  const store = Redux.createStore(reducer);
  
  console.log(store.getState());
  
  //{ login: false, email: '' } */

//PRIMEIRO PASSO INSTALAR 

// npm init -y
// npm install redux

// SEGUNDO PASSO CRIAR CONST REDEUX

 const Redux = require('redux')

//TERCEIRO PASSO CRIAR O ESTADO INICIAL

 const ESTADO_INICIAL = {
  login: false,
  email: "",
  
};

//QUARTO PASSO CRIAR O REDUCER NELE VAI CHEGA O ESTADO É AS ACTIONS

 const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
        passoword: action.passoword,
      };
  }
  switch (action.type) {
    case "LOGIN1":
      return {
        ...state,
        numeros: action.numeros,
        nomes: action.nomes,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

// QUINTO PASSO ENVIA O REDUCER PARA REDUX Q NO CASO É O ESTADO GROBAL 

 const store = Redux.createStore(reducer);

  //SEXTO PASSO FAZER SUAR ACTIONS

  const fazerLogin = (email, passoword) => ({
    type: "LOGIN",
    email,
    passoword,
});
const fazerLogin1 = (param, param2) => ({
  type: "LOGIN1",
  nomes: param,
  numeros: param2,
});

//SETIMO PASSO USAR O DISPATCH PARA ENVIAR SUAS E ACTIONS PARA O REDUCER

  store.dispatch(fazerLogin("alguem@email.com", 1233));
   store.dispatch(fazerLogin1('franciley', [11,2,223,44]));
  
  console.log(store.getState());
  
  // { login: true, email: 'alguem@email.com' }