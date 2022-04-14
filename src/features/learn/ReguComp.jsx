import React, { Component } from "react";

export class ReguComp extends Component{
  render(){
    console.log('ReguComp render');
    return(
      <div>regu comp: {this.props.name}</div>
    )
  }
}