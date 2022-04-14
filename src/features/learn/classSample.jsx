import React, { Component } from 'react'
import { PureComp } from './PureComp';
import { ReguComp } from './ReguComp';

export class ParentComp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'ngoc'
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'ngoc' })
    }, 2000);
  }

  render() {
    console.log('******Parent render************');
    return (<div>
      <ReguComp name={this.state.name} />
      <PureComp name={this.state.name} />
    </div>);
  }
}