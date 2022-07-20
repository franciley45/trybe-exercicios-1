import React from 'react';
import './App.css';
import Teste from './pratica';

class App extends React.Component {
  render() {
    const arrayy = [1, 2, 3, 4, 5];

    return (<div>
      <h1 className='titulo'>franciley rodrigues </h1>
      {arrayy.map((param, index) => {
        return (
          <section key={index}>
            {param} <Teste />
          </section>
        )
      })}

    </div >
    );
  }
}

export default App;

