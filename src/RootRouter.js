import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default class RootRouter extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          {this.props.routes()}
        </div>
      </BrowserRouter>
    )
  }
}
