import React, { Component } from 'react'




class ShowWords extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }
  }

  handleChange (val) {
    this.setState({ userInput: val })
    console.log(val)
  }


  render () {
    return (
      <section>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <span> {this.state.userInput} </span> 
      </section>
    )
  }
}

export default ShowWords


