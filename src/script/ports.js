export default {
  user: {
    register: '/blog/user/register', // 注册接口
    login: '/blog/user/login', // 登录
    logout: '/blog/user/loginOut' // // 退出
  },
  article: {
    search: '/blog/article/search',
    details: '/blog/article/details',
    recommends: '/blog/article/recommends'
  },
  articleBack: {
    save: '/blog/articleBack/save',
    get:'/blog/articleBack/getByCode'
  },
  tag: {
    cloud: '/blog/tag/cloud',
    tags: '/blog/tag/tags'
  }
}
