<template>
  <div class="editor">
    <header>
      <h1></h1>
    </header>
    <nav>
      <div>
        <div>
          <strong>标题:<br></strong><input v-model="title" placeholder="请输入标题">
          <br>
          <strong>二级标题:<br></strong><input v-model="secondTitle" placeholder="请输入二级标题">
        </div>
        <div>
          <strong>标签:<br></strong><span v-for="firstTag in tags">
          <input type="radio" :value="firstTag.code" v-model="tagValue">
          <label>{{firstTag.tagName}}</label>
        </span>
        </div>
        <div>
          <strong>级别:<br></strong><span v-for="at in levelArr">
          <input type="radio" :value="at.id" v-model="level">
          <label>{{at.name}}</label>
        </span>
        </div>
        <div>
          <strong>热门类型:<br></strong><span v-for="at in hotArr">
          <input type="radio" :value="at.id" v-model="hot">
          <label>{{at.name}}</label>
        </span>
        </div>
        <div>
          <strong>优质类型:<br></strong><span v-for="at in qualityArr">
          <input type="radio" :value="at.id" v-model="quality">
          <label>{{at.name}}</label>
        </span>
        </div>
        <div>
          <strong>口令:</strong><input v-model="publishWord" placeholder="请输入口令">
        </div>
      </div>
      <div>
        <h3></h3>
        <span>{{otherCode}}</span><br>
        <a href="#"></a>
      </div>
    </nav>
    <section>
      <mavon-editor ref="editor" v-model="mdText" :toolbars="toolbars" @save="save" @change="change"/>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Editor',
    components: {},
    data() {
      return {
        title: "",
        publishWord: "",
        otherCode: "",
        secondTitle: "",
        logo: "",
        level: "",
        quality: "",
        hot: "",
        mdText: "# 简单笔记",
        tags: [],
        tagValue: '',
        levelArr: [
          {id: 1, name: '一级'},
          {id: 2, name: '二级'},
          {id: 3, name: '三级'},
          {id: 4, name: '四级'},
          {id: 5, name: '五级'}
        ],
        hotArr: [
          {id: 1, name: '热门'},
          {id: 2, name: '非热门'}
        ],
        qualityArr: [
          {id: 1, name: '优质'},
          {id: 2, name: '基础'}
        ],
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          undo: true, // 上一步
          redo: true, // 下一步
          trash: false, // 清空
          save: true, // 保存（触发events中的save事件）
          navigation: true, // 导航目录
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          subfield: true, // 单双栏模式
          preview: false, // 预览
        }
      };
    },
    mounted() {
      this.loadAll();
    },
    methods: {
      loadAll() {
        this.setFullScreen();

        this.otherCode = this.randomString(10);

        this.http.post(this.ports.tag.cloud, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.tags = datas;
          } else {
            this.tags = [];
          }
        })
        let code = this.getUrlKey("id");
        if (code) {
          this.http.post(this.ports.articleBack.get, {
            code: this.getUrlKey("id")
          }, res => {
            if (res.success) {
              let datas = res.data.results;
              if (datas != null) {
                this.title = datas.title;
                this.secondTitle = datas.secondTitle;
                this.level = datas.level;
                this.mdText = datas.articleMarkdown;
                this.tagValue = datas.tag;
              }
            }
          })
        }
      },
      save(value, render) {
        this.http.post(this.ports.articleBack.save, {
          code: this.getUrlKey("id"),
          title: this.title,
          secondTitle: this.secondTitle,
          logo: this.logo,
          tags: this.tagValue,
          level: this.level,
          articleMarkdown: value,
          articleHtml: render,
          quality: this.quality,
          hot: this.hot,
          publishWord: this.publishWord
        }, res => {
          if (res.success) {
            //let datas = res.data.results;
            //console.log(datas);
          } else {
            //console.log(res.message);
            alert(res.message);
          }
        })
      },
      change(value, render) {

      },
      getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href)
          || [, ""])[1].replace(/\+/g, '%20')) || null;
      },
      setFullScreen() {
        //markdown全部值
        //console.log(this.$refs.editor);
        //let markdown = this.$refs.editor.d_value;
        //console.log(markdown);
        //设置全屏
        //let fullScreen = this.$refs.editor.s_fullScreen;
        //console.log(fullScreen);
        this.$refs.editor.s_fullScreen = true;
      },
      randomString(len) {
        len = len || 32;
        let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        var maxPos = chars.length;
        var randomStr = "";
        for (let i = 0; i < len; i++) {
          randomStr += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return randomStr;
      }
    }
  }
</script>

<style scoped>
  /*header {
    background-color: black;
    color: white;
    text-align: center;
    padding: 15px;
  }*/

  nav {
    line-height: 40px;
    background-color: #eeeeee;
    height: 900px;
    width: 20%;
    float: right;
    padding: 10px;
  }

  section {
    width: 75%;
    height: 100%;
    float: left;
    padding: 10px;
  }
</style>
