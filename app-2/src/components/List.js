import React, { Component } from 'react'


class List extends Component {

  constructor() {
    super();

    this.state = {
      arr:['1','2','3','4']
    }
  }


  

  
  
render ()   {
return(  
  <section> 
    <h2>{this.state.arr[0]}</h2>
    <h2>{this.state.arr[1]}</h2>
    <h2>{this.state.arr[2]}</h2>
    <h2>{this.state.arr[3]}</h2>
  </section>
)
}
}

export default List