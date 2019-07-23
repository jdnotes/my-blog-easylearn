export default {
  user: {
    register: '/blog/user/register', // 注册接口
    login: '/blog/user/login', // 登录
    logout: '/blog/user/loginOut' // // 退出
  },
  article: {
    quality: '/blog/article/getQuality',
    recentList: '/blog/article/getRecentList', //最新列表
    qualityList: '/blog/article/getQualityList', //优质列表
    hotList: '/blog/article/getHotList', //热门列表
    search: '/blog/article/search', //分页列表
    details: '/blog/article/details' //详情
  },
  articleBack: {
    save: '/blog/articleBack/save',
    get: '/blog/articleBack/getByCode'
  },
  tag: {
    cloud: '/blog/tag/cloud',
    tags: '/blog/tag/tags'
  }
}
