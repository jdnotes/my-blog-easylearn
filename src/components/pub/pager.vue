<template>
  <div class="pager">
    <ul class="uk-pagination uk-flex-center uk-margin-large-top">
      <li>
        <a href="javascript: void(0)" @click="setCurrent(current - 1)">
          <span data-uk-pagination-previous></span>
        </a>
      </li>
      <span v-for="p in grouplist">
        <li>
          <a href="javascript: void(0)" @click="setCurrent(p.val)" :class="{'uk-active': current == p.val}">
            {{ p.text }}
          </a>
        </li>
      </span>
      <li>
        <a href="javascript: void(0)" v-show="nextPage" @click="setCurrent(current + 1)">
          <span data-uk-pagination-next></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Pager',
    data() {
      return {
        homePage: true,
        nextPage: true,
        current: this.currentPage
      }
    },
    props: {
      totalRecords: {// 数据总条数
        type: Number,
        default: 0
      },
      pageRow: {// 每页显示条数
        type: Number,
        default: 10
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page: function () {
        // 总页数
        return Math.ceil(this.totalRecords / this.pageRow);
      },
      grouplist: function () {
        // 获取分页页码
        let len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        let idx = temp.indexOf(center);
        (idx < count) && (center = center + count - idx);
        (this.current > this.page - count) && (center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          let t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pageChange', this.current);
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/font.css";
  @import "../../assets/css/main.css";

  .uk-active {
    color: #4DC29E;
    font-weight: 600;
  }
</style>
