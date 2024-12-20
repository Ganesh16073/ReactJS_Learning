import React from 'react'

export default class FormOptimal extends React.Component
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

    uniHandle =(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    render()
    {
        console.log(`Name => ${this.state.name} Email => ${this.state.email} Contact => ${this.state.contact}`)
        return(
            <>
                <input type='Text' name='name' placeholder='Name' value={this.state.name} style={{padding:"20px"}} onChange={(e)=>this.uniHandle(e)}></input> <br/><br/>
                <input type='email' name='email' placeholder='abc@gmail.com' onChange={(e)=>this.uniHandle(e)} value={this.state.email} style={{padding:"20px"}}></input><br/><br/>
                <input type="text" name='contact' placeholder='8899223344' onChange={(e)=>this.uniHandle(e)} value={this.state.contact} style={{padding:"20px"}}></input><br/><br/>
                <input type='button' name='submit' value="Register" style={{padding:"20px"}}></input>
            </>
        )
    }
}