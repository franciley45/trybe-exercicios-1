/* esssa for abaixo é o modo de utilizar variavas dentro de class sem parametro detro do setState() */

/* import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
   
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState({
      numeroDeCliques: 1
    })
  }

  render() {
  
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App; */






/* esse modo abaixa é modo correto utilizar é vento de clicck dinamico o setState(param1, param2) precisa de paramentro para funcionar corretamente */
import React from 'react';
import './App.css';
import Formurario from './componets/fomulario' 

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      teste1: 0
    }

  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,

    }))


  }

  buntao2 = () => {
    this.setState((estadoDeInicio, _props) => ({
      teste1: estadoDeInicio.teste1 + 1
    }))
  }

  render() {
    return (
      <div >
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>

        <button className='btn' style={{ backgroundColor: 'red'}}onClick={this.buntao2}>{this.state.teste1}</button>

        <Formurario />
      </div>


    )
  }
}

export default App;