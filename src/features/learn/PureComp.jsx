import React, {  PureComponent } from "react";

export class PureComp extends PureComponent{
  render(){
    console.log('Pure render');
    return(
      <div>pure comp: {this.props.name}</div>
    )
  }
}