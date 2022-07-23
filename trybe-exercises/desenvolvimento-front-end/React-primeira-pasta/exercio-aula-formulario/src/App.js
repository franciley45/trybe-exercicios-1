import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <fieldset>
          <div>
            <label htmlFor='nome' className='form-label' >Nome</label>
            <input type='text' className='form-control' name='name' id='nome' ></input>
          </div>
          <div>
            <label htmlFor='email' className='form-label' >Email</label>
            <input type='text' className='form-control' name='email' id='email' ></input>
          </div>
          <div>
            <label htmlFor='cpf' className='form-label' >CPF </label>
            <input type='text' className='form-control' name='cpf' id='cpf' ></input>
          </div>
          <div>
            <label htmlFor='endereco' className='form-label' >Endereço</label>
            <input type='text' className='form-control' name='endereco' id='endereco' ></input>
          </div>
          <div>
            <label htmlFor='cidade' className='form-label' >Cidade</label>
            <input type='text' className='form-control' name='cidade' id='cidade' ></input>
          </div>
          <br></br>
          <label className='form-label' >Estado</label>
          <select>
            <option>Maranhão</option>
            <option>Ciara</option>
            <option>Goias</option>
            <option>Pernanbuco</option>
            <option>Paraiba</option>
          </select>
          <br></br><br></br>
          
          <div id='residencia'>
          <label htmlFor='apartamento' >Apartamento</label>
          <input id='apartamento' type="radio" name="contact" ></input>
          </div>
          <div id='residencia'>
          <label htmlFor='casa' >Casa</label>
          <input id='casa' type="radio"name="contact"></input>
          </div>
          
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor='experiencia' className='form-label'>Resumo do currìculo</label>
            <textarea id='experiencia' className='form-control'></textarea>
          </div>
          <div>
            <label htmlFor='cargo' className='form-label'>Cargo</label>
            <textarea id='cargo' className='form-control'></textarea>
          </div>

        </fieldset>

      </div>
    );
  }

}

export default App;
