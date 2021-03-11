import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.textInput = React.createRef();
  }

  handleSubmit(e){
    e.preventDefault();
    alert(this.state.value);
  }

  handleChange(e){
    const eventTarget = e.target.value;
    this.setState({
      value: eventTarget
    });
  }

  handleReset(){
    this.setState({
      value: ""
    });
    this.textInput.current.focus();
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            ref={this.textInput}
          />
          <Button variant="primary" onClick={this.handleSubmit} type="submit" size="sm">Submit</Button>
        </form>
        <Button variant="info" onClick={this.handleReset}>Reset</Button>
      </>
    );
  }
}

export default Form;
