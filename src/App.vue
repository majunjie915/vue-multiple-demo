<template>
  <div id="structure">
    <header>
      <h1>全部分类</h1>
    </header>
    <section class="container">
      <aside class="left">
        <ul>
          <li v-for="(item, index) in classify"
            :key="index"
            :class="{selected: currentPage === item.path}"
            @click="switchPage(item)">
            {{item.name}}
          </li>
        </ul>
      </aside>
      <div class="right">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
// px转rem
@function pr($px, $base: 32) {
  @return ($px / $base) * 1rem;
}
* {margin: 0;padding: 0;}
ul, li{list-style: none;}
a {list-style: none;color: #7c7c7c;text-decoration: none;}
#structure {
  font: 16px/1 "PingFang SC", Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", STHeiTi, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  header {
    height: pr(86);
    background: #eee;
    border-bottom: solid pr(1) #e1e1e1;
    h1 {
      float: left;
      width: 23%;
      text-align: center;
      line-height: pr(88);
      font-size: pr(28);
      font-weight: 400;
    }
  }
  .container {
    position: absolute;
    top: pr(88);
    bottom: 0;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    &::after {
      clear: both;
      content: '';
      display: block;
    }
    .left {
      float: left;
      width: 23%;
      height: 100%;
      font-size: pr(28);
      color: #9b9b9b;
      text-align: center;
      background: #eee;
      overflow-x: hidden;
      overflow-y: auto;
      ul {
        li {
          height: pr(118);
          line-height: pr(118);
          cursor: pointer;
          &.selected{
            color: #2e68d6;
            background: #e6f7ff;
            border-right: solid pr(4) #2e68d6;
          }
        }
      }
    }
    .right {
      float: left;
      width: 77%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: pr(20) 4%;
      box-sizing: border-box;
    }
  }
}
</style>

<script>
/* eslint-disable semi */
/* eslint-disable comma-dangle */
export default {
  name: 'constructure',
  data () {
    return {
      triangleAside: require('../static/images/triangleGray.png'),
      triangleAsideSel: require('../static/images/triangleRight.png'),
      currentPage: '/',
      classify: [
        {name: '热门推荐', path: '/'},
        {name: '生鲜水果', path: 'keywordrelated'},
        {name: '进口食品', path: 'seriesanalysis'},
        {name: '休闲零食', path: 'brandanalysis'},
        {name: '酒水乳饮', path: ''},
        {name: '粮油副食', path: ''},
        {name: '美妆个护', path: ''},
        {name: '家具用品', path: ''},
        {name: '家庭清洁', path: ''},
        {name: '母婴玩具', path: ''},
        {name: '家用电器', path: ''},
        {name: '保健品', path: ''},
        {name: '厨房用品', path: ''},
      ]
    }
  },
  created () {
    this.currentPage = location.hash !== '#/' ? location.hash.split('#/')[1] : '/';
    let that = this;
    that.$ajax.get('static/data.json')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  },
  methods: {
    switchPage: function (item) {
      const path = item.path
      this.currentPage = path
      this.$router.push(path)
    }
  },
  watch: {
    $route () {
      this.currentPage = location.hash !== '#/' ? location.hash.split('#/')[1] : '/'
    }
  }
}
</script>
