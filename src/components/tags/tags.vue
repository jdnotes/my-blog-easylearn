<template>
  <div class="tags">
    <nav class="uk-background-muted">
      <div class="uk-container">
        <div data-uk-navbar>
          <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo uk-text-small" href="index.html">SOUTIEN</a>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-visible@m">
              <li class="uk-active"><a href="index.html">Home</a></li>
              <li><a href="faq.html">Faq</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="changelog.html">Changelog</a></li>
              <li><a href="download.html">Download</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>

            <div class="uk-navbar-item uk-visible@m">
              <a href="#" class="uk-button uk-button-primary">Get Started</a>
            </div>

            <a class="uk-navbar-toggle uk-hidden@m" href="#offcanvas" data-uk-navbar-toggle-icon data-uk-toggle></a>
          </div>
        </div>
      </div>
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
            data-uk-scrollspy="cls: uk-animation-slide-bottom-medium;">How can we help?</h1>

        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-match uk-text-center"
          data-uk-grid data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 80">
          <div>
            <a href="category.html" class="uk-card card-box uk-card-body uk-border-rounded">
              <span data-uk-icon="icon: cog; ratio: 3"></span>
              <p class="uk-margin-medium-top">Getting Started</p>
            </a>
          </div>
          <div>
            <a href="category.html" class="uk-card card-box uk-card-body uk-border-rounded">
              <span data-uk-icon="icon: sign-in; ratio: 3"></span>
              <p class="uk-margin-medium-top">User Login</p>
            </a>
          </div>
          <div>
            <a href="category.html" class="uk-card card-box uk-card-body uk-border-rounded">
              <span data-uk-icon="icon: user; ratio: 3"></span>
              <p class="uk-margin-medium-top">My Account</p>
            </a>
          </div>
          <div>
            <a href="category.html" class="uk-card card-box uk-card-body uk-border-rounded">
              <span data-uk-icon="icon: lock; ratio: 3"></span>
              <p class="uk-margin-medium-top">Security</p>
            </a>
          </div>
          <div>
            <a href="category.html" class="uk-card card-box uk-card-body uk-border-rounded">
              <span data-uk-icon="icon: cart; ratio: 3"></span>
              <p class="uk-margin-medium-top">Ecommerce</p>
            </a>
          </div>
          <div>
            <a href="category.html" class="uk-card card-box uk-card-body uk-border-rounded">
              <span data-uk-icon="icon: comments; ratio: 3"></span>
              <p class="uk-margin-medium-top">Communication</p>
            </a>
          </div>
          <div>
            <a href="category.html" class="uk-card card-box uk-card-body uk-border-rounded">
              <span data-uk-icon="icon: settings; ratio: 3"></span>
              <p class="uk-margin-medium-top">Settings Options</p>
            </a>
          </div>
          <div>
            <a href="category.html" class="uk-card card-box uk-card-body uk-border-rounded">
              <span data-uk-icon="icon: code; ratio: 3"></span>
              <p class="uk-margin-medium-top">Customization</p>
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
                <span data-uk-icon="icon: mail; ratio: 2"></span>
              </div>
              <div class="uk-width-4-5">
                <h5 class="margin-xsmall-bottom">Need more help?</h5>
                <p class="uk-margin-remove uk-link-reset">Get in touch with us, support is provided daily <a
                  class="button-link" href="contact.html">contact us</a></p>
              </div>
            </div>
          </div>

          <div>
            <div class="uk-flex uk-flex-middle" data-uk-grid>
              <div class="uk-width-auto uk-text-primary">
                <span data-uk-icon="icon: receiver; ratio: 2"></span>
              </div>
              <div class="uk-width-4-5">
                <h5 class="margin-xsmall-bottom">Interested in our products?</h5>
                <p class="uk-margin-remove">Our sales representatives can help you chose <a class="button-link"
                                                                                            href="contact.html">call
                  us</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <footer class="uk-section uk-section-muted">
      <div class="uk-container">
        <div class="uk-grid-large uk-child-width-expand@m" data-uk-grid>

          <div>
            <div class="uk-margin">
              <a class="uk-logo" href="#">SOUTIEN</a>
            </div>
          </div>
          <div>
            <ul class="uk-list uk-list-large">
              <li><h5>Company</h5></li>
              <li><a class="uk-link-text" href="#">About Us</a></li>
              <li><a class="uk-link-text" href="#">Our Mission</a></li>
              <li><a class="uk-link-text" href="#">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <ul class="uk-list uk-list-large">
              <li><h5>Services</h5></li>
              <li><a class="uk-link-text" href="#">Products & Services</a></li>
              <li><a class="uk-link-text" href="#">Customer Stories</a></li>
              <li><a class="uk-link-text" href="#">Download Apps</a></li>
            </ul>
          </div>
          <div>
            <ul class="uk-list uk-list-large">
              <li><h5>Information</h5></li>
              <li><a class="uk-link-text" href="#">Privacy Policy</a></li>
              <li><a class="uk-link-text" href="#">Terms & Conditions</a></li>
              <li><a class="uk-link-text" href="#">Join Us</a></li>
            </ul>
          </div>

        </div>

        <div class="uk-grid-large uk-margin-large-top uk-flex uk-flex-middle" data-uk-grid>

          <div class="uk-width-1-4@m"></div>
          <div class="uk-width-expand@m">
            <div class="uk-width-auto@m uk-margin-medium uk-text-small">
              <p class="uk-display-inline-block uk-margin-medium-right uk-margin-remove-bottom">Created in 2019 by a <a
                class="uk-link-text" href="https://ivanchromjak.com/" target="_blank"><u>drifter</u></a> in the city of
                Cleveland</p>
            </div>
          </div>
          <div class="uk-width-auto@m">
            <div class="uk-width-auto@m uk-margin-medium uk-text-small">
              <a href="https://twitter.com/" data-uk-icon="icon: twitter; ratio:0.8" class="uk-icon-link"></a>
              <a href="https://www.instagram.com/" data-uk-icon="icon: instagram; ratio:0.8"
                 class="uk-margin-left uk-icon-link"></a>
              <a href="https://www.facebook.com/" data-uk-icon="icon: facebook; ratio:0.8"
                 class="uk-margin-left uk-icon-link"></a>
              <a href="http://www.17sucai.com/" data-uk-icon="icon: youtube; ratio:0.8"
                 class="uk-margin-left uk-icon-link"></a>
            </div>
          </div>

        </div>
      </div>
    </footer>

    <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" data-uk-close></button>
        <ul class="uk-nav uk-nav-primary uk-nav-offcanvas">
          <li class="uk-nav-header uk-logo uk-margin-bottom">SOUTIEN</li>
          <li class="uk-active"><a href="index.html">Home</a></li>
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
    name: 'tags',
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
