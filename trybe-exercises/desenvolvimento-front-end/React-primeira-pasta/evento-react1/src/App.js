import React from 'react';
import './App.css';

function btn() {
  console.log('deu certo')
} 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={btn}>clink aqui logo</button>
      </div>
    );
  }

}

export default App;