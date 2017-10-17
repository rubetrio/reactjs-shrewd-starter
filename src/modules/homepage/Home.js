import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div>
        This is home.
        <br/>
        <Link to="/pageA/main"> Page A </Link>
        <br/>
        <Link to="/pageB/main"> Page B </Link>
        <br/>
      </div>
    )
  }
}

export default Home
