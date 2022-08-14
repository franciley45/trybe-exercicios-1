
import React from 'react';
import EmailInput from './EmailInput';
import PaswordInput from './PaswordInput'

class LoginForm extends React.Component {

   state = {
    email: '',
    password: '',
    buttonDisabled: true
  }

  handleChange =(event) => {
  this.setState({[event.target.name]: event.target.value}, () =>{
    const { email, password } = this.state;
    const ValorDoEstadoAtualDoButao = email.length === 0 || password.length === 0;

    this.setState({
      buttonDisabled: ValorDoEstadoAtualDoButao
    })

  }) 
    
  }
  hadleSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    
     const { email, password, buttonDisabled } = this.state

    return (
      <section>
        <form onSubmit={this.hadleSubmit}>
            <h2>Login<h2/>
            <EmailInput 
             email={ email } 
              handleChange={this.handleChange}/>
            <PaswordInput
             password={ password }  
             handleChange={ this.handleChange } 
             />

            <button disabled={buttonDisabled}>Fazer Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;


