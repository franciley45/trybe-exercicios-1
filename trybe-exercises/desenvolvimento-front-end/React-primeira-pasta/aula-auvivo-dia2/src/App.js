
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import VideoGameList from './components/VideoGameList';
import games from './data'

class App extends React.Component {
  render() {
    /* console.log(games[1]) */

    return (
      <main className="container">
        < VideoGameList gamess={games} />
        <Footer title="Melhores jogos dos ultimos tempos" year={2022} />

      </main>
    );
  }
}

export default App;
