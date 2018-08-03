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
            :class="{selected: currentType === item.type}"
            @click="switchType(item)">
            {{item.name}}
          </li>
        </ul>
      </aside>
      <div class="right">
        <section class="recommend">
          <ul class="content">
            <li v-for="(item, index) in dataList[currentType]" :key="index">
              <h5>{{item.title}}</h5>
              <ul class="items">
                <li v-for="(value, key) in item.data" :key="key">
                  <a :href="`${link}?q=${value.title}`">
                    <div class="tab-img">
                      <img :src="value.src" alt="">
                    </div>
                    <p>{{value.title}}</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable semi */
/* eslint-disable comma-dangle */
export default {
  name: 'constructure',
  data () {
    return {
      currentType: 'recommend',
      link: 'infoone.html',
      classify: [],
      dataList: [],
    }
  },
  created () {
    let that = this;
    that.$ajax.get('static/data.json')
      .then(res => {
        console.log(res.data);
        this.classify = res.data.data.classify;
        that.dataList = res.data.data.list;
      })
      .catch(err => {
        console.log(err);
      })
  },
  mounted () {
  },
  methods: {
    switchType: function (item) {
      const type = item.type
      this.currentType = type
    }
  },
  watch: {
    $route () {
    }
  }
}
</script>

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
    top: pr(87);
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
      .recommend {
        h5 {
          padding: pr(30) 0;
          color: #9b9b9b;
        }
        .items {
          li {
            float: left;
            width: pr(166);
            margin: pr(10) 0;
            text-align: center;
            color: #5d5d5d;
            font-size: pr(24);
            .tab-img {
              width: 76%;
              margin: 0 auto;
              img {
                width: 100%;
              }
            }
          }
          &:after {
            display: table;
            clear: both;
            content: "";
          }
        }
      }
    }
  }
}
</style>
