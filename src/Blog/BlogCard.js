import React, { PropTypes } from 'react'

import { Link } from 'react-router';

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        position:"relative",
        // width:"100%",
        margin:"0 auto",
        marginBottom:"20px",
        borderRadius:"6px",
        boxShadow:"1px 1px 2px rgba(0,0,0,0.3)",
        backgroundColor:"#fff",
        transition:"all 0.2s"
      },
      index:{
        backgroundColor:"#333",
        color:"#fff",
        padding:"10px"
      },
      num:{
        display:"block",
        width:"40px",
        height:"40px",
        margin:"0 auto",
        borderRadius:"50%",
        border:"1px solid #fff",
        textAlign:"center",
        lineHeight:"40px",
        fontSize:"20px"
      },
      date:{
        fontSize:"14px",
        float:"right"
      },
      bookmark:{
        position:"absolute",
        left:"20px",
        top:"-6px",
        zIndex:"3",
        fontSize:"30px",
        color:"rgb(255,223,43)"
      }
    }
    let address = `blog/${this.props.url}`
    return(
      <div style={styles.root} className='blog-card'>
        <i className="fa fa-bookmark" aria-hidden="true" style={styles.bookmark}></i>
        <div style={styles.index}><i style={styles.num}>{this.props.index}</i></div>
        <div style={{padding:"16px"}}>
          <h4>{this.props.title}<i style={styles.date}>{this.props.date}</i></h4>
          <p>{this.props.desc}</p>

          <Link to={address} style={styles.readBtn} className='read-more-btn'>Read More</Link>
          <div style={{clear:"both"}}></div>
        </div>
      </div>
    )
  }
}
BlogCard.defaultProps={
  index:1,
  title:"这是标题",
  date:"2016年9月5日",
  desc:"这是描述"
}
BlogCard.propTypes={
  index:React.PropTypes.number.isRequired,
  title:React.PropTypes.string.isRequired,
  date:React.PropTypes.string.isRequired,
  desc:React.PropTypes.string.isRequired
}

export default BlogCard;
