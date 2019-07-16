<template>
  <div class="about">
    <nav class="border-bottom">
      <Nav></Nav>
    </nav>
    <Search></Search>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large" data-uk-grid>
          <div class="uk-width-expand@m padding-right@m padding-large-right@l">
            <article class="uk-article">
              <div>
                <p>
                  一个90后对未来迷茫的中年人！我是从14年入坑,到现在为止，就这样平平淡淡的度过4年时光。
                </p>
                <p>
                  从事互联网也已经有4年了，也做了不少的业务，但感觉自己的水平没有多大提升。有些无奈，更多的是困惑。
                  <br/>
                </p>
                <p>
                  回顾之前的经历，找工作，入职，租房等等，和其他人一样，努力的在城市生活着，追逐自己的梦想。
                  <br/>
                </p>
                <p>
                  我最近思考过，和别人的差距。也请教了一些前辈大牛，询问学习方法，怎么提升自我。
                  他们给我的一些建议，我觉得对我而言很有启发性。
                  <br/>
                </p>
                <p>
                  &nbsp;&nbsp; 1.知识系统化学习(基础)<br/><br/>
                  &nbsp;&nbsp; 2.利用零碎时间学习(时间片段)<br/><br/>
                  &nbsp;&nbsp; 3.对知识点多实践(多敲代码)<br/><br/>
                  &nbsp;&nbsp; 4.对知识点拓展深入(延伸性)<br/>
                </p>
                <p>
                  之前也在CSDN上发表过一些博客，断断续续的，没有坚持下来。之前的时间算是荒废了,所以我需要从零开始，打造自己的博客，强化自己的知识体系。
                  <br/>
                </p>
                <p>
                  对于我而言，以前的时光过去了，就算了，后悔都没有用了。现在给自己一点信心，定制自己的目标，提升自己。
                  <br/>
                </p>
                <p>
                  最后，一花一世界，是我新起的博客花名，开始付诸行动。
                </p>
                <br/>
                <h2>关注Me</h2>
                <br/>
                <p>扫一扫我的微信号或者公众号。</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "../pub/footer";
  import Search from "../pub/search";
  import Nav from "../pub/nav";

  export default {
    name: 'tags',
    components: {Nav, Search, Footer},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>
