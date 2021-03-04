import React, { Component } from "react";
import List from './components/List'
import "./App.css";

class App extends Component {
  
  constructor() {
    super()

    this.state = {
      userInput:'',
      list: []
    }
  }


  handleChange(val) {
    this.setState ({ userInput:val })
  
    }

  submitToDo () {
    let list = []
    list.push(this.state.userInput)
    this.setState({ list:list })
    console.log(this.state.list)
  }

  render() {
    return (
      <div className="App">
        <h1>My To-do List:</h1>
        <input onChange={ (e) => this.handleChange(e.target.value)}/>
        <button onClick={() => this.submitToDo()} >Submit</button>   
        <List/>
      </div>
    );
  }
}

export default App;