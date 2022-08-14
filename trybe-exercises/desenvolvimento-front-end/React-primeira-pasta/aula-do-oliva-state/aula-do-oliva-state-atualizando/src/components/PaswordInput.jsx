import React, { Component } from 'react'

 class PaswordInput extends Component {

  render() {
    const { handleChange } =this.props;
    return (
      <label>
        Senha
        <br></br>
       <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="Digite sua Senha"
        onChange={handleChange}
        />
      </label>
  
    )
  }
}
export default PaswordInput;