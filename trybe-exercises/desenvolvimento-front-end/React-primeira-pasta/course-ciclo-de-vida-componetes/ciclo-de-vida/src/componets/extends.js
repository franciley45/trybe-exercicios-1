import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      console.log("construtor");
    }
  
    componentDidMount() {
      console.log("componentDidMount");
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate");
      return true;
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate");
    }
     gol = () =>[4, 5, 6]
    render() {
      console.log("render");
      return (
        <div>
          <p>Contador</p>
          <button
            onClick={() => this.setState((state) => ({ counter: state.counter + this.gol() }))}
          >
            Soma
          </button>
          <p>{this.state.counter}</p>
        </div>
      );
    }
  }
  export default Counter;