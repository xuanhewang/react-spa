import React, {
  PropTypes
} from 'react'
import {
  Link
} from 'react-router'
class NavFooter extends React.Component {
  render() {
    return (
      <div className='footer'>
        <Link activeClassName='active' to='/'onlyActiveOnIndex={true}><span className='glyphicon glyphicon-home' aria-hidden="true"></span><br />首页</Link>
        <Link activeClassName='active' to='blog'><span className='glyphicon glyphicon-book' aria-hidden="true"></span><br />博客</Link>
        <Link activeClassName='active' to='work'><span className='glyphicon glyphicon-tasks
' aria-hidden="true"></span><br />作品</Link>
        <Link activeClassName='active' to='about'><span className='glyphicon glyphicon-user' aria-hidden="true"></span><br />我</Link>
      </div>
    )
  }
}

export default NavFooter;