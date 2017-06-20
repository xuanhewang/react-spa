import React, { PropTypes } from 'react'
import {  Link  } from 'react-router'

class LeftNav extends React.Component {
  render () {
    return(
      <div className="left-nav">
        <h3>王煊赫@{this.props.title}</h3>
        <Link activeClassName='active' onlyActiveOnIndex={true} to='/'><span className='glyphicon glyphicon-home' aria-hidden="true"></span>&nbsp;&nbsp;这是主页</Link>
        <Link activeClassName='active' to='blog'><span className='glyphicon glyphicon-book' aria-hidden="true"></span>&nbsp;&nbsp;技术分享</Link>
        <Link activeClassName='active' to='work'><span className='glyphicon glyphicon-tasks' aria-hidden="true"></span>&nbsp;&nbsp;曾经作品</Link>
        <Link activeClassName='active' to='about'><span className='glyphicon glyphicon-user' aria-hidden="true"></span>&nbsp;&nbsp;我的简介</Link>
      </div>
    )
  }
}

export default LeftNav;
