<template>
  <div class="tags">
    <nav class="border-bottom">
      <div class="uk-container">
        <div data-uk-navbar>
          <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo uk-text-small" href="index.html">SOUTIEN</a>
          </div>
          <div class="uk-navbar-right">

            <ul class="uk-navbar-nav uk-visible@m">
              <li><a href="index.html">Home</a></li>
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

    <div class="uk-container">
      <div class="uk-section uk-section-xsmall border-bottom">
        <div data-uk-grid>
          <div class="uk-width-2-3@m uk-flex uk-flex-middle">
            <ul class="uk-breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><span>Getting Started</span></li>

            </ul>
          </div>
          <div class="uk-width-1-3@m">
            <form class="uk-search uk-search-default uk-width-1-1 awesomplete">
              <a href="" class="uk-search-icon-flip" data-uk-search-icon></a>
              <input id="search" class="uk-search-input uk-search-default uk-width-1-1 uk-form-large" type="search"
                     placeholder="Search" autocomplete="off" data-minchars="1" data-maxitems="30">
            </form>
          </div>
        </div>
      </div>
    </div>

    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large" data-uk-grid>

          <div class="uk-width-expand@m padding-right@m padding-large-right@l">

            <article class="uk-article">
              <h2 class="uk-h3 uk-margin-bottom"><a href="article.html">How do I enable payment gateway?</a></h2>
              <div class="article-content">
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus asperiores repellat.</p>
              </div>
              <div>
                <a class="button-link uk-text-small" href="article.html">Read more</a>
              </div>
            </article>

            <article class="uk-article">
              <h2 class="uk-h3 uk-margin-bottom"><a href="article.html">What happens if I clear cache?</a></h2>
              <div class="article-content">
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus asperiores repellat.</p>
              </div>
              <div>
                <a class="button-link uk-text-small" href="article.html">Read more</a>
              </div>
            </article>
          </div>

          <div class="uk-width-1-4@m uk-visible@m">
            <div data-uk-sticky="offset: 100; media: @m; bottom: true">
              <div class="uk-position-relative">
                <div class="divider-left">
                  <ul class="uk-nav uk-nav-default">
                    <li class="uk-nav-header">Categories</li>
                    <li class="uk-active"><a href="category.html">Getting Started</a></li>
                    <li><a href="category.html">Social Share</a></li>
                    <li><a href="category.html">User Login</a></li>
                    <li><a href="category.html">Header Options</a></li>
                    <li><a href="category.html">Shopping Cart</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="uk-container">
      <!-- pager -->
      <ul class="uk-pagination uk-flex-center uk-margin-large-top">
        <li><a href="#"><span data-uk-pagination-previous></span></a></li>
        <li class="uk-active"><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#"><span data-uk-pagination-next></span></a></li>
      </ul>

      <div class="uk-grid-large uk-flex-middle uk-margin-large-top uk-margin-large-bottom"
           data-uk-grid data-uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
        <div class="uk-width-auto@m">
        </div>
      </div>
    </div>

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
          <li><a href="index.html">Home</a></li>
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
