import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Paragraph from "../presentational/Paragraph";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      react_title: '',
      customer_name: 'Himanshu Pandey'
    };
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { react_title, customer_name } = this.state;
    const p = `When we create event handler method, we always need to add this to constructor,
    to bind this. Quite tiresome. To be honest, there is no sense to create constructor
    method only for binding your method ${customer_name}`
    return (
      <>
      <form id="article-form">
        <Input
          text="React title"
          label="react_webpack4"
          type="text"
          id="react_title"
          value={react_title}
          handleChange={(e) => this.handleChange(e)}
        />
      </form>
        <Paragraph p={p}/>
      </>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;