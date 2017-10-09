import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div>
        This is home.
        <br/>
        <Link to="/pageA"> Page A </Link>
        <br/>
        <Link to="/pageB"> Page B </Link>
        <br/>
      </div>
    )
  }
}

export default Home
