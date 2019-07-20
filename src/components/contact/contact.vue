<template>
  <div class="contact">
    <nav class="border-bottom">
      <Nav></Nav>
    </nav>
    <section class="uk-section">
      <div class="uk-text-center uk-container uk-container-xsmall">
        <h1 class="uk-article-title">留言O(∩_∩)O</h1>
        <p class="uk-text-lead"></p>
      </div>
      <div class="uk-container">
        <hr class="uk-margin-large-top uk-margin-large-bottom">
        <div class="uk-grid-large" data-uk-grid>
          <div class="uk-width-2-3@m">
            <form class="uk-form-stacked" data-uk-grid>
              <div class="uk-width-1-1">
                <label class="uk-form-label" for="form-name">姓名</label>
                <div class="uk-form-controls">
                  <input class="uk-input uk-form-large" id="form-name" type="text" placeholder="姓名">
                </div>
              </div>
              <div class="uk-width-1-2">
                <label class="uk-form-label" for="form-email">邮箱</label>
                <div class="uk-form-controls">
                  <input class="uk-input uk-form-large" id="form-email" type="email" placeholder="zs@163.com">
                </div>
              </div>
              <div class="uk-width-1-2">
                <label class="uk-form-label" for="form-phone">手机号</label>
                <div class="uk-form-controls">
                  <input class="uk-input uk-form-large" id="form-phone" type="text" placeholder="手机号">
                </div>
              </div>
              <div class="uk-width-1-1">
                <label class="uk-form-label" for="form-message">留言</label>
                <div class="uk-form-controls">
                  <textarea class="uk-textarea uk-form-large" id="form-message" rows="6"></textarea>
                </div>
              </div>
              <div class="uk-width-1-1">
                <input class="uk-button uk-button-large uk-button-primary" id="form-submit" type="submit" name="send"
                       value="提交">
              </div>
            </form>
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
    name: 'Contact',
    components: {Footer, Nav},
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
