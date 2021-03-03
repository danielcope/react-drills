import React, { Component } from 'react'



class Picture extends Component {


  render(){  

    return(
      <body>
        <img src={this.props.url} alt={'Cats fighting'} />

      </body>
    )
  }

}



export default Picture