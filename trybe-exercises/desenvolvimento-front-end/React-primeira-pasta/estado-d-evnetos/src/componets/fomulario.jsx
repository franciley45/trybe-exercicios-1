import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
    };
  }

/* essa função abaixo faz com q ela capiture todos os eventos da pagina é mande seus valores diversos para os locas correto  */
  handleChange({target}) {
    /* const {name, value} = target */ //ficaria assim se o formulario n tivesse um checkbox.mas como tem vai muda para abaixo
    const {name} = target
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  eventoIput = () => {
    this.setState()
  }


  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            value={this.state.inputs}
            onChange={this.handleChange}
            name="idade"
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.comparecimento}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;