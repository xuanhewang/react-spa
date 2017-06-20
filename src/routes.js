import React, { PropTypes } from 'react'
import { Router, Route, hashHistory ,browserHistory, IndexRoute} from 'react-router'


import App from './App'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Work from './components/Work/Work'
import About from './components/About/About'
class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='blog' component={Blog} />
          <Route path='work' component={Work} />
          <Route path='about' component={About} />
        </Route>
      </Router>
    )
  }
}

export default Routers;
