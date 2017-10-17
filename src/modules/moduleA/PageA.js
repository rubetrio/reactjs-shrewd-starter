import React from 'react'
import { Link } from 'react-router-dom'

class PageA extends React.Component{
  render(){
    return(
      <div>
        This is Page A.
        <br/>
        <Link to="/pageA/pageA1">PageA1 (New Page)</Link>
        <br/>
        <Link to="/pageA/pageA2">PageA2 (To be rendered in the same page)</Link>
      </div>
    )
  }
}

export default PageA
