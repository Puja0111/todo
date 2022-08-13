import React, { Component } from 'react'

export default class ClssComponent extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div>this is message={this.props.name}</div>
    )
  }
}
