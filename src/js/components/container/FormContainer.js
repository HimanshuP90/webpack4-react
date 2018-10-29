import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Paragraph from "../presentational/Paragraph";
import ErrorBoundary from "./ErrorBoundary";
import style from "../../../../src/main.css";
import InfiniteScroll from './InfiniteSrcoll';

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      react_title: '',
      customer_name: 'Himanshu Pandey',
      jsonData:'',
      status: '',
      author: '',
      newsData: ''
    };
  }
  
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.setState({jsonData: json}))
  }

  componentDidMount(){
    fetch('https://newsapi.org/v1/articles?source=techcrunch&apiKey=03ad4cda66c547818f091bfa57522413')
      .then((res) => {
        res.json().then((data) => {
          this.setState({ newsData: data })
        })
      })
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const { react_title, customer_name, jsonData, newsData } = this.state;
    const obj = jsonData && jsonData.map((obj) => { return obj.title })
    const p = `When we create event handler method, we always need to add this to constructor,
    to bind this. Quite tiresome. To be honest, there is no sense to create constructor
    method only for binding your method ${customer_name}`

    const news = newsData && newsData.articles.map((val) => { return val})
    console.log(news);
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
      <NumberList numbers={numbers} />
      <ErrorBoundary>
        <Paragraph p={p}/>
      </ErrorBoundary>
      </>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<InfiniteScroll />, wrapper) : false;