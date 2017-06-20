import React from 'react';
import NavHeader from './components/share/NavHeader';
import NavFooter from './components/share/NavFooter';
import LeftNav from './components/share/LeftNav';

import './css/main.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      navTitle:'Home'
    }
  }
  resetWindowWidth(){ //屏幕宽度改变时 改变state状态
    this.setState({
      showNav:window.innerWidth > 760 ? true : false
    })
  }
  componentDidMount(){
    this.resetWindowWidth()
    window.onresize = this.resetWindowWidth.bind(this)
  }
  setNavTitle(){
    this.setState({
      navTitle: this.context.router.isActive('/',true) ? 'Home' :
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Note'
    })
  }
  componentWillReceiveProps(){
    this.setNavTitle();
  }
  componentWillMount(){
    this.setNavTitle();

  }
  render () {
    return(
      <div className="content-wrap">
          { this.state.showNav ? <LeftNav title={this.state.navTitle}/> :<NavHeader title={this.state.navTitle}/> }
          <div className="content-main" style={{backgroundColor:"#eee"}}>
            {this.props.children}
          </div>

          { this.state.showNav ? '' :<NavFooter /> }
      </div>
    )
  }
}
App.contextTypes = {
  router: React.PropTypes.object.isRequired //哪里来的router
}
export default App;
