import React from 'react';
import './App.css';
import Copia from './copia1';

const h2 = React.createElement('h2', { className: 'titulo' }, 'vamos que vamos')

const h1 = <h1 className='titulo'>outra forma de criar elemento com react</h1>


class App extends React.Component {
  render() {
    return (
      <>
      <h1 className='titulo'>franciley rodrigues </h1>

      <p>esse é meu primeiro teste</p>
      {h2}
      {h1}
      <Copia />

    </>

    );
  }
}


export default App;
