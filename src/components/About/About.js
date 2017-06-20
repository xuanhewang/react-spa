import React, { PropTypes } from 'react'
import touxiang from '../../images/touxiang.jpg';

class About extends React.Component {
  render () {
    return(
      <div className="about">

          <div className='info'>
            <div className='left'>
              <h3>王煊赫</h3>
              <p>求职意向:web前端工程师</p>
            </div>
            <div className='avatar-img'>
              <img src={touxiang} alt=""/>
            </div>
            <div className="right">
              <ul>
                <li><i className="fa fa-phone" aria-hidden="true"></i><p>15369715076</p></li>
                <li><i className="fa fa-weixin" aria-hidden="true"></i><p>xuanhewang</p></li>
                <li><i className="fa fa-qq" aria-hidden="true"></i><p>811300735</p></li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i><p>811300735@qq.com</p></li>
              </ul>
            </div>
          </div>
          <div className='list'>
            <div className='base-info mb30'>
              <div className='tag'>基本信息</div>
              <ul>
                <li>
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  <p>个人信息: 王煊赫 | 男 | 1994年 | 河北科技师范学院 | 网络工程 | 2018年6月毕业 </p>
                </li>
                <li>
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  <p>技能 : React | HTML | CSS | JavaScript | JQuery | Ajax | </p>
                </li>
                <li>
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  <p> GitHub : <a href ='https://github.com/xuanhewang' target='_blank'>github.com/xuanhewang</a></p>
                </li>
              </ul>
            </div>

            <div className='skill-list mb30'>
              <div className='tag'>技能清单</div>
              <ul>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>React : 能够使用React构建组件式单页应用</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>JavaScript : 熟悉JavaScript，对ES5、ES6标准有一定的了解，且能在项目中使用</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>HTML/CSS : 能够编写语义化的HTML，模块化的CSS，实现比较复杂的布局和动画</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>JQuery : 能使用jQuery操作文档对象、制作动画效果、事件处理等</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>构建工具 : 能够简单使用webpack/npm进行前端工程的构建</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>预编译语言 : 能够使用Less高效编写CSS</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>Linux : 熟练使用linux系统进行开发, 在服务器进行代码部署</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>Git : 熟练使用Git工具</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>Photoshop : 熟练PS切片工具对网页效果图切片优化</p>
                </li>
              </ul>
            </div>
            <div className='project mb30'>
              <div className='tag'>项目经验</div>
              <ul>
                {/*
                <li>
                  <p>魔赞商城 &nbsp;<i className='fa fa-link' aria-hidden='true'></i>
                    <a target='_blank' href='http://morethan.cc/template/wap/default/index-n.html'>morethan.cc</a>
                  </p>
                  <div className="project-desc">
                    <p>kuakuakua</p>
                  </div>
                </li>
                <li>
                  <p>美国环球地产奥兰多地产投资 &nbsp;<i className='fa fa-link' aria-hidden='true'></i>
                    <a target='_blank' href='http://52.89.113.198/'>link</a>
                  </p>
                  <div className="project-desc">
                    <p>2016年7月-2016年8月 完成 美国环球地产奥兰多地产投资 的前端页面，使用react 技术完成前端组件的编写，实现可复用的组件，提高了开发效率。使用bootstrap栅格系统完成页面的响应式布局。使用react-bootstrap 实现首页轮播图的效果。使用react-router 实现路由控制，通过 axios 发 ajax 请求，实现页面内容呈现</p>
                  </div>
                </li>
                */}
                <li>
                  <p>个人网站 &nbsp;<i className='fa fa-link' aria-hidden='true'></i>
                    <a target='_blank' href='http://xuanhewang.github.io'>xuanhewang.github.io</a>
                  </p>
                  <div className="project-desc">
                    <p>利用react技术，结合webpack打包模块，运用组件化思想，结合组件库，通过react-router实现的单页面应用路由控制。通过 axios 发 ajax 请求，实现页面内容呈现。</p>
                  </div>
                </li>
              </ul>

            </div>
            <div className='project mb30'>
              <div className='tag'>在校实践/获奖</div>
              <ul>
                <li>
                  <i className='fa fa-star' aria-hidden='true'></i>
                  <p>2014年10月加入大学生自律委员会</p>
                </li>
                <li>
                  <i className='fa fa-star' aria-hidden='true'></i>
                  <p>2014年开始学习web前端开发</p>
                </li>
                <li>
                  <i className='fa fa-star' aria-hidden='true'></i>
                  <p>2015年5月申请为秦皇岛国际马拉松志愿者</p>
                </li>
                <li>
                  <i className='fa fa-star' aria-hidden='true'></i>
                  <p>2015年举办‘创译杯’网页设计大赛</p>
                </li>
                <li>
                  <i className='fa fa-star' aria-hidden='true'></i>
                  <p>2016年成为创译云端计算机爱好者俱乐部社长</p>
                </li>
              </ul>
            </div>

            <div className='mb30 about-me'>
              <div className='tag'>自我评价</div>
              <p style={{textIndent:"12px"}}><i className='fa fa-heart' aria-hidden='true'></i>
              本人性格随和乐观，乐观开朗，学习能力强，工作认真负责，善于在实践中积累学习，不断的完善自我。喜欢接触新事物新技术。</p>
            </div>


          </div>
      </div>
    )
  }
}

export default About;
