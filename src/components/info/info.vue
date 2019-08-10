<template>
  <div class="tags">
    <nav class="border-bottom">
      <Inav></Inav>
    </nav>
    <Search></Search>
    <section class="uk-section">
      <div class="uk-container">
        <div class="uk-grid-large" data-uk-grid>
          <div class="uk-width-expand@m padding-right@m padding-large-right@l">
            <article class="uk-article">
              <mavon-editor v-html="articleHtml"/>
            </article>
          </div>
          <div class="uk-width-1-4@m uk-visible@m">
            <div data-uk-sticky="offset: 100; media: @m; bottom: true">
              <div class="uk-position-relative">
                <div class="divider-left">
                  <div>
                    <ul class="uk-nav uk-nav-default">
                      <li v-for="item in recentList">
                        <a href="javascript: void(0)" @click="goInfo(item.id)">{{item.title}}</a>
                      </li>
                    </ul>
                  </div>
                </div>
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
  import Search from "../pub/search";
  import Footer from "../pub/footer";
  import Inav from "../pub/inav";
  import {Decrypt, Encrypt} from '../../script/cryptojs'

  export default {
    name: 'tags',
    inject: ['reload'],
    components: {Inav, Footer, Search},
    data() {
      return {
        title: '简单笔记',
        privateKey: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIov3Lw9lMUSlTHMrKLNQTBwiFJdNOWysAAHfkiut2fSvh/4haaZ5YfBi7dEQ1dtZ9xVb5YTUpgbbQuz5KEcPvuR91NDYH0Y8x/BrkVOD+Fpx00EV8g2W8gDsLYbJBql20lxuJsxRvBPrv2nvBbDW1yiHopxrswQumdwZER/2wA9AgMBAAECgYEAgDauYP3mNf/q69zS5O76qD4RThJrDSCBClXphviM9Ujk3PcS0qSCAjbDMpSkws6hCh8/PIjLHpR71drgq9dwW08trWnXfpNrOXCq1Xtj15IbMm+726EOc0sPE2IvIVelfXOCqeBi8zH0w/Y23+45aic57DBagklOCTzXTCiaQaUCQQDDIWV0aWRWc5PLULbnPx694DGYlwsUebvH2gTFWTqneguxRH6Ae7CVr9pe0Y5J1pSJDn112tvbiM7ra7/pfeozAkEAtUsb1r/+coZuRPc9LjkEoFBBPF0I+gN5Wxrl0hREM7eyvp8oen9thyotbDWpIsG2RANimiboON0QdKIw5ovbzwJBAJbwk3E8QUBagR3J3uH8QoRwEw1M8WYyUF5kuEIMJsH8N2U1bYFnrI3tjMbB5QYa9aUbT1NGK8GjDySuobI1E18CQDX26Y5/EAqfIWu9/KQprMrbmM+TEfz508Heu9JQ3gxW/gnn7nCoRb4aO/Md9f62kr6kE1G3iyCCDUfqj4vQzdkCQBDtHEta+cSHHxfOnBqaPE3oeKXoChVqJQ3kV2G6N2hHsDHsKnNPOklBIGWgC5PnwIg/83UTtV7tQEZiz6HzXZU=',
        publicKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCKL9y8PZTFEpUxzKyizUEwcIhSXTTlsrAAB35Irrdn0r4f+IWmmeWHwYu3RENXbWfcVW+WE1KYG20Ls+ShHD77kfdTQ2B9GPMfwa5FTg/hacdNBFfINlvIA7C2GyQapdtJcbibMUbwT679p7wWw1tcoh6Kca7MELpncGREf9sAPQIDAQAB',
        recentList: [],
        articleHtml: ''
      }
    },
    mounted() {
      this.getInitInfo();
    },
    methods: {
      getInitInfo() {
        this.loadRecentData();
        this.loadDetails();
      },
      loadDetails() {
        let id = this.$route.params.id;
        this.http.post(this.ports.article.details, {
          id: id
        }, res => {
          if (res.success) {
            let datas = res.data.results;
            if (datas != null) {
              this.articleHtml = this.aesDecryptData(datas.articleHtml);
            }
          } else {
            this.articleHtml = "暂无数据";
          }
        })
      },
      loadRecentData() {
        this.http.post(this.ports.article.recentList, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.recentList = datas;
          }
        })
      },
      search(curPage, tags, keyword) {
        this.$router.push({name: 'taglist', params: {tags: tags, keyword: keyword}});
      },
      goInfo(id) {
        if (id == null) {
          return;
        }
        this.reload();
        this.$router.push({path: '/info/' + id});
      },
      rsaDecryptData(encrypted) {
        //RSA解密
        let jse = new JSEncrypt();
        jse.setPrivateKey(this.privateKey);
        let decrypted = jse.decrypt(encrypted);
        return decrypted;
      },
      aesDecryptData(encryptStr) {
        // AES解密
        let decryptStr = Decrypt(encryptStr);
        return decryptStr;
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";
</style>
