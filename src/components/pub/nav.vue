<template>
  <div class="nav">
    <nav class="border-bottom">
      <div class="uk-container">
        <div data-uk-navbar>
          <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo uk-text-small" href="/">{{title}}</a>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-visible@m">
              <li class="uk-active"><a href="/">Home</a></li>
              <li><a href="tags.html">Tags</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="contact.html">About Me</a></li>
            </ul>

            <div class="uk-navbar-item uk-visible@m">
              <a href="#" class="uk-button uk-button-primary">Get Started</a>
            </div>
            <a class="uk-navbar-toggle uk-hidden@m"
               href="#offcanvas" data-uk-navbar-toggle-icon data-uk-toggle></a>
          </div>
        </div>
      </div>
    </nav>

    <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" data-uk-close></button>
        <ul class="uk-nav uk-nav-primary uk-nav-offcanvas">
          <li class="uk-nav-header uk-logo uk-margin-bottom">{{title}}</li>
          <li><a href="/">Home</a></li>
          <li><a href="faq.html">Faq</a></li>
          <li><a href="changelog.html">Changelog</a></li>
          <li><a href="download.html">Download</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Nav',
    data() {
      return {
        title: '简单笔记'
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>
