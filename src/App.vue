<template>
  <div id="structure">
    <header>
      <img src="../static/images/logo.png" alt="">
      index page
    </header>
    <nav class="top-nav">
      <ul>
        <li v-for="(item, index) in classify"
          :key="index"
          :class="{selected: currentPage === item.path}"
          @click="switchPage(item)">
          {{item.name}}
        </li>
      </ul>
    </nav>
    <section class="container">
      <aside class="left">
        <h3>关键词分析</h3>
        <ul>
          <li v-for="(item, index) in classify"
            :key="index"
            :class="{selected: currentPage === item.path}"
            v-show="index < 2"
            @click="switchPage(item)">
            <template v-if="currentPage === item.path">
              <img :src="triangleAsideSel" alt="">
            </template>
            <template v-else>
              <img :src="triangleAside" alt="">
            </template>
            {{item.name}}
          </li>
        </ul>
        <h3>市场分析</h3>
        <ul>
          <li v-for="(item, index) in classify"
            :key="index"
            :class="{selected: currentPage === item.path}"
            v-show="index >= 2"
            @click="switchPage(item)">
            <template v-if="currentPage === item.path">
              <img :src="triangleAsideSel" alt="">
            </template>
            <template v-else>
              <img :src="triangleAside" alt="">
            </template>
            {{item.name}}
          </li>
        </ul>
      </aside>
      <div class="right">
        <router-view/>
      </div>
    </section>
    <footer></footer>
  </div>
</template>

<style lang="scss">
* {margin: 0;padding: 0;}
ul, li{list-style: none;}
a {list-style: none;color: #7c7c7c;text-decoration: none;}
#structure {
  font: 16px/1 "PingFang SC", Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", STHeiTi, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  header {
    margin: 12px auto;
    width: 1000px;
    img {
      vertical-align: bottom;
    }
  }
  .top-nav {
    height: 46px;
    line-height: 46px;
    color: #fff;
    background: #2e68d6;
    ul {
      display: flex;
      justify-content: space-between;
      width: 1000px;
      margin: 0 auto;
      padding-left: 168px;
      box-sizing: border-box;
      li {
        display: inline-block;
        padding: 0 49.5px;
        cursor: pointer;
        &.selected {
          background: #1e51b4;
        }
      }
    }
  }
  .container {
    $titleFontSize: 19px;
    $textFontSize: 14px;
    width: 1000px;
    margin: 0 auto;
    border: solid 1px #e3e3e3;
    border-top: none;
    box-sizing: border-box;
    &::after {
      clear: both;
      content: '';
      display: block;
    }
    .left {
      float: left;
      width: 176px;
      height: 100%;
      padding-top: 25px;
      box-sizing: border-box;
      h3 {
        padding-left: 42px;
        padding-top: 7px;
        font-size: $titleFontSize;
        color: #333;
        height: 37px;
        box-sizing: border-box;
      }
      ul {
        font-size: $textFontSize;
        li {
          padding-left: 42px;
          height: 38px;
          line-height: 38px;
          cursor: pointer;
          img {
            margin-right: 10px;
          }
          &.selected{
            color: #2e68d6;
            background: #e6f7ff;
            border-right: solid 2px #2e68d6;
          }
        }
      }
    }
    .right {
      float: left;
      padding: 28px 0 40px 43px;
      width: 779px;
      min-height: 251px;
      border-left: solid 1px #e3e3e3;
      box-sizing: border-box;
    }
  }
  footer {
    clear: both;
    width: 1000px;
    margin: 20px auto;
    padding: 0 40px;
    font-size: 12px;
    border-top: solid 3px #3b5998;
    box-sizing: border-box;
    .footer-link {
      display: flex;
      margin: 10px 0;
      line-height: 24px;
      li {
        &::after {
          content: "|";
          margin: 0 15px 0 16px;
          color: #bfbfbf;
        };
        &:last-child {
          &::after {
            content: "";
            margin: 0;
          }
        }
        a {
          margin-left: 19px;
          &:first-child {
            margin-left: 0;
          }
        }
        .footand, .footauto, .footios, .footphone, .footwp {
          display: inline-block;
          padding-left: 19px;
          background: url(//x.autoimg.cn/www/index/2016/images/index-bg_20160225.png) no-repeat;
        }
        .footios {
          background-position: -280px -282px;
        }
        .footand {
          background-position: -280px -312px;
        }
        .footwp {
          background-position: -280px -342px;
        }
        .footphone {
          background-position: -280px -372px;
        }
        .footauto {
          padding: 0 22px 0 21px;
          background-position: -200px -402px;
        }
      }
    }
    p {
      color: #7c7c7c;
      text-align: center;
    }
  }
}
</style>

<script>
export default {
  name: 'constructure',
  data () {
    return {
      triangleAside: require('../static/images/triangleGray.png'),
      triangleAsideSel: require('../static/images/triangleRight.png'),
      currentPage: '/',
      classify: [
        {name: '关键词类别', path: '/'},
        {name: '关键词关联', path: 'keywordrelated'},
        {name: '车系分析', path: 'seriesanalysis'},
        {name: '品牌分析', path: 'brandanalysis'}
      ]
    }
  },
  created () {
    this.currentPage = location.hash !== '#/' ? location.hash.split('#/')[1] : '/'
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
