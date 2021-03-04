import React, { Component } from 'react'


class List extends Component {
  constructor () {
    super();

    this.state = {
      arr: ['1','2','3','4','5'],
    }
  }
  
  handleChange (event) {
    let arrInner = []

    for (let i = 0; i < this.state.arr.length; i++)
      if (event === this.state.arr[i]){
        arrInner.push(this.state.arr[i])
      }
    
    this.setState({ arr:arrInner } 
     
      )
  }

  render () {
    return (
      <section>
        <input onChange={(event) => this.handleChange(event.target.value)}/>
        <h2>{this.state.arr[0]}</h2>
        <h2>{this.state.arr[1]}</h2>
        <h2>{this.state.arr[2]}</h2>
        <h2>{this.state.arr[3]}</h2>
        <h2>{this.state.arr[4]}</h2>


      </section>
    )
  }




}


export default List