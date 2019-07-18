<template>
  <div class="tags">
    <nav class="uk-background-muted">
      <Nav></Nav>
    </nav>
    <div class="uk-background-muted">
      <div class="uk-container">
        <div class="uk-margin">
          <form class="uk-search uk-search-default uk-width-1-1 awesomplete">
            <a href="" class="uk-search-icon-flip" data-uk-search-icon></a>
            <input id="search" class="uk-search-input uk-search-default uk-width-1-1 uk-form-large" type="search"
                   placeholder="Search" autocomplete="off" data-minchars="1" data-maxitems="30">
          </form>
        </div>
      </div>
    </div>
    <section class="uk-section uk-background-muted">
      <div class="uk-container uk-text-center">
        <h1 class="uk-heading-primary uk-margin-medium-bottom"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium;">We can learn ...</h1>
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-match uk-text-center"
          data-uk-grid data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 80">
          <div v-for="item in tags">
            <a href="javascript: void(0)" @click="goList(item.id)"
               class="uk-card card-box uk-card-body uk-border-rounded">
              <img :src="item.icon">
              <p class="uk-margin-medium-top">{{item.name}}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-divider uk-grid-large uk-child-width-1-2@m" data-uk-grid>
          <div>
            <div class="uk-flex uk-flex-middle" data-uk-grid>
              <div class="uk-width-auto uk-text-primary">
                <span data-uk-icon=""></span>
              </div>
              <div class="uk-width-4-5">
                <h4 class="margin-xsmall-bottom">待续 ...</h4>
                <p class="uk-margin-remove uk-link-reset">
                  <a class="button-link" href="contact.html">联系me</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Nav from "../pub/nav";
  import Footer from "../pub/footer";

  export default {
    name: 'tags',
    components: {
      Footer,
      Nav
    },
    data() {
      return {
        tags: [
          {'id': '1001', 'name': 'JAVA', 'icon': 'static/images/java.png'},
          {'id': '1001', 'name': 'Spring', 'icon': 'static/images/spring.png'},
          {'id': '1001', 'name': 'Mybatis', 'icon': 'static/images/mybatis.png'},
          {'id': '1001', 'name': 'MYSQL', 'icon': 'static/images/mysql.png'},
          {'id': '1001', 'name': 'Redis', 'icon': 'static/images/redis.png'},
          {'id': '1001', 'name': 'RabbitMQ', 'icon': 'static/images/rabbitmq.png'},
          {'id': '1001', 'name': 'JVM', 'icon': 'static/images/jvm.png'},
          {'id': '1001', 'name': 'ES', 'icon': 'static/images/elasticsearch.png'},
          {'id': '1001', 'name': 'Nginx', 'icon': 'static/images/nginx.png'},
          {'id': '1001', 'name': 'Docker', 'icon': 'static/images/docker.png'},
          {'id': '1001', 'name': 'Dubbo', 'icon': 'static/images/dubbo.png'},
          {'id': '1001', 'name': 'Zookeeper', 'icon': 'static/images/zookeeper.png'},
          {'id': '1001', 'name': 'git', 'icon': 'static/images/git.png'},
          {'id': '1001', 'name': '多线程', 'icon': 'static/images/multi_thread.png'},
          {'id': '1001', 'name': '实战', 'icon': 'static/images/actual_combat.png'},
          {'id': '1001', 'name': 'IDEA', 'icon': 'static/images/idea.png'},
          {'id': '1001', 'name': '推荐', 'icon': 'static/images/recommend.png'}
        ]
      }
    },
    methods: {
      goList(id) {
        console.log('tags id:' + id);
        this.$router.push({name: 'taglist', params: {currentPage: 1, tags: id}});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>
