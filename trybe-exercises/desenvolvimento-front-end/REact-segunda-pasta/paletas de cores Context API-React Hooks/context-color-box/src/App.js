// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import CocaTest from './components/CocaTest';
class App extends React.Component {
  render() {
    return (
      <>
      <ColorBox />
      <CocaTest />
      </>
      
    );
  }
}
export default App;