import axios from 'axios'

function getBlogList(){
  let address =`https://raw.githubusercontent.com/zhaozhuoboy/my-app-blog/master/index.json?${Math.random()}`
  return axios.get(address)
              .then( (res) => ({
                data:res.data
              }) )
}

function getMarkDown(filename){
  let address =`https://raw.githubusercontent.com/zhaozhuoboy/my-app-blog/master/blog/${filename}.md?${Math.random()}`
  return axios.get(address)
              .then( (res) => ({
                data:res.data
              }) )
}

export { getBlogList , getMarkDown }
