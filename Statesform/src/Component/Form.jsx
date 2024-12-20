import React from 'react'

export default class Form extends React.Component
{
    
  constructor()
  {
    super()
    this.state={
      name:"",
      email:"",
      contact:""
    }
  }

    updateName=(e)=>
    {
      this.setState({name:e.target.value});
    }

    updateEmail=(e)=>
    {
      this.setState({email:e.target.value})
    }
    updateContact =(e)=>
    {
      this.setState({contact:e.target.value})
    }


  render()
  {
    console.log("App Component");
    return(
      <>
     <input type='Text' name='name' placeholder='Name' value={this.state.name} style={{padding:"20px"}} onChange={(e)=>this.updateName(e)}></input> <br/><br/>
     <input type='email' name='email' placeholder='abc@gmail.com' onChange={(e)=>this.updateEmail(e)} value={this.state.email} style={{padding:"20px"}}></input><br/><br/>
     <input type="text" name='contact' placeholder='8899223344' onChange={(e)=>this.updateContact(e)} value={this.state.contact} style={{padding:"20px"}}></input><br/><br/>
     <input type='button' name='submit' value="Register" style={{padding:"20px"}}></input>


      </>
    )
  }
}