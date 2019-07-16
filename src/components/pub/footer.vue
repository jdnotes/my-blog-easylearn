<template>
  <div class="footer">
    <footer class="uk-section uk-section-muted">
      <div class="uk-container">
        <div class="uk-grid-large uk-child-width-expand@m" data-uk-grid>
          <div>
            <div class="uk-margin">
              <a class="uk-logo" href="/">简单笔记</a>
              <p>有时候，最困难的不是放手，而是学着如何开始。</p>
              <p>当梦醒的时候了，就该忘了，不要为了它伤心或是痛苦。等遇到下一个机遇，创造新的回忆，
                请你一定要接受开心的去生活，然后，你只要偶尔的去想起曾经的苦恼，这样就够了。</p>
              <p>生活如果不宠你，更要自己善待自己。这一生，风雨兼程，就是为了遇见最好的自己，如此而已。</p>
            </div>
          </div>
          <div>
            <ul class="uk-list uk-list-large">
              <li>欢迎关注我的微信</li>
              <li><img src="static/images/wx.jpg" alt="微信号"></li>
            </ul>
          </div>
          <div>
            <ul class="uk-list uk-list-large">
              <li>随时关注我的公众号</li>
              <li><img src="static/images/gzh.jpg" alt="公众号"></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>
