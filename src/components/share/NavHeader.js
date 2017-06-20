import React, { PropTypes } from 'react';
import {browserHistory} from 'react-router'

class NavHeader extends React.Component {
  reload(){
    location.reload();
  }
  goBack(){
    browserHistory.goBack();
  }
  render () {
    return(
      <div className="header">
        <span className="glyphicon glyphicon-menu-left" aria-hidden="true" onClick={this.goBack.bind(this)}></span>
        <h3>{this.props.title}</h3>
        <span className="glyphicon glyphicon-refresh" aria-hidden="true" onClick={this.reload.bind(this)}></span>
      </div>
    )
  }
}

export default NavHeader;
