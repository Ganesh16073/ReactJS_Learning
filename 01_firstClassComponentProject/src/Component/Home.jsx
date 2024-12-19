import React from 'react'

export default class Home extends React.Component
{
    constructor()
    {
        super();
        this.state={
            count:0
        }
    }
    incValByOne =()=>
    {
        this.setState({count:this.state.count+1});
    }
    render()
    {
        console.log("component render");

	return(
        <>
            <h1>Count value is {this.state.count}  </h1>
            <input type='button' name='s' value='Increment Value By 1' onClick={this.incValByOne}/>
        </>
        );

    }
}