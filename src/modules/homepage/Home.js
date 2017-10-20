import React from 'react'
import { Link } from 'react-router-dom'
import LeftBar from '../common/LeftBar'

class Home extends React.Component{
  render(){
    return(
      <div className='container'>
        <LeftBar />
        <div className='main'>
          This is home.
          <br/>
          <Link to="/pageA/main"> Page A </Link>
          <br/>
          <Link to="/pageB/main"> Page B </Link>
          <br/>
        </div>
        <div className='sidebar-right'>
        </div>
      </div>
    )
  }
}

export default Home
