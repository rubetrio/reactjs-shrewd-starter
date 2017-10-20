import React from 'react'
import { Link } from 'react-router-dom'
import WhiteSpace from './WhiteSpace'

class LeftBar extends React.Component{
  render(){
    return(
      <div className='sidebar-left'>
        <div className='sidebar-left-header'>
          Brand Name
          <WhiteSpace size="md" />
          <Link to="/pageA/pageA1">Module A1</Link>
          <WhiteSpace size="xs" />
          <Link to="/pageA/pageA2">Module A2</Link>
          <WhiteSpace size="xs" />
          <Link to="/pageB/main">Module B</Link>
        </div>
      </div>
    )
  }
}

export default LeftBar
