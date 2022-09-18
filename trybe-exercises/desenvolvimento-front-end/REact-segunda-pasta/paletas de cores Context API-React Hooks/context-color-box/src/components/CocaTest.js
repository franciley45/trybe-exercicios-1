import React, { Component } from 'react'
import ColorsContext from '../context/ColorsContext';

class CocaTest extends Component {
  render() {
    const { colors, colorIndex } = this.context;
    console.log(colors)
    console.log(colorIndex)
    return (
      <div>cocaTest
        <h1>aqui vai mas um componente para pra testa ver se conseguindo colocar dentro do provider </h1>
      </div>
    )
  }
}
CocaTest.contextType = ColorsContext;
export default CocaTest;