import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        return (
        <h1> 
            Welcome {this.props.name} a.k.a {this.props.heroName} 
            </h1>
        )
    }
}

export default Welcome

//check gallery for ways to destruct props and states
 