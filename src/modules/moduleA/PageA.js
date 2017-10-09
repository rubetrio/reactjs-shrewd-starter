import React from 'react'
import { Link,Switch,Route } from 'react-router-dom'
import PageA1 from './PageA1'
import PageA2 from './PageA2'

class PageA extends React.Component{
  render(){
    return(
      <div>
        This is Page A.
        <br/>
        <Link to="/pageAB/pageA1">PageA1 (New Page)</Link>
        <br/>
        <Link to="/pageA/pageA2">PageA2 (To be rendered in the same page)</Link>
        <Switch>
          <Route path='/pageA/pageA2' component={PageA2} />
        </Switch>
      </div>
    )
  }
}

export default PageA
