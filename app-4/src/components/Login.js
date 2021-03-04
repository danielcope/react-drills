import React, { Component } from 'react'


class Login extends Component {

  constructor (){
    super()

    this.state = {
    usernameInput: '',
    passwordInput: ''      
    }
  }

  usernameChange (val){
    this.setState({ usernameInput:val })
  }
  
  passwordChange (val){
    this.setState({ passwordInput:val })
  }

  submitLogin () {
    alert ( `Username: ${this.state.usernameInput} Password: ${this.state.passwordInput}`  )
  }


  render(){
    return(
      <div>
        <input onChange={(val) => this.usernameChange(val.target.value)}/>
        <input onChange={(val) => this.passwordChange(val.target.value) }/>
        <button onClick={() => this.submitLogin()}>Login</button>
      </div>
    )
  }
}


export default Login