<template>
  <div class="app">
    <article>
      <aside class="l_box">
      </aside>
      <main class="r_box">
        <div>
          <div class="notfound">404</div>
          <div class="remark">{{noDataText}}</div>
        </div>
      </main>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'notFound',
    data() {
      return {
        noDataText: '您访问的页面不存在',
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
      },
      search(curPage, tags, keyword) {
        this.$router.push({name: 'home', params: {currentPage: curPage, tags: tags, keywords: keyword}});
      }
    }
  }
</script>

<style scoped>

  .notfound {
    text-align: center;
    margin-top: 25px;
    height: 100px;
    font-size: 100px;
    color: #f79b3b;
    font-family: '方正舒体'
  }

  .remark {
    text-align: center;
    margin-top: 25px;
    height: 150px;
    font-size: 30px;
    color: #26bc50;
    font-family: '方正舒体'
  }
</style>
