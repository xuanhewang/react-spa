import React, { PropTypes } from 'react';
import marked from 'marked'
import hljs from 'highlight.js';
import '../../css/github.css';

import { getMarkDown } from '../../utils/ajax.js'

class Item extends React.Component {
  constructor(){
    super()
    this.state={
      md:'',
      wait:true
    }
  }
  componentDidMount(){
    let mdName = this.props.params.url;
    getMarkDown(mdName).then(
      (recData) => {
        this.setState({
          md:recData.data,
          wait:false
        })
      }
    )
  }
  printMark(){
    return {__html:marked(this.state.md)}
  }
  render () {
    return(
      <div style={{width:"100%"}}>
        {
          this.state.wait ?
           <p style={{textAlign:"center",fontSize:"18px",color:"#20B2AA",marginTop:"12%"}}>
              <i className="fa fa-spinner fa-lg fa-spin fa-2x"></i> <br /><br />
              正在加载...
          </p> :
          <div className="blog-item-content container" dangerouslySetInnerHTML={this.printMark()}/>
        }

      </div>
    )
  }
}

export default Item;
