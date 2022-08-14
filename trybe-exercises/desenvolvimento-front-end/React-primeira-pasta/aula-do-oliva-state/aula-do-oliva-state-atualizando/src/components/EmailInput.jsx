import React, { Component } from 'react'

class EmailInput extends Component {
  

  render() {
const { handleChange } = this.props;

    return (
      <label>
        Email
        <br></br>
        <input 
        type="text" 
        name="email" 
        id="email" 
        placeholder='Digite seu Email'
        onChange={handleChange}
        />
      
      </label>
    )
  }
}
export default EmailInput;