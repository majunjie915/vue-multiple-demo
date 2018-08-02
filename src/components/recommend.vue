<template>
  <section class="recommend">
    <h5>类目</h5>
    <ul>
      <li v-for="(item, index) in recommendList" :key="index">
        <a :href="`${link}?q=${item.title}`">
          <div class="tab-img">
            <img :src="item.src" alt="">
          </div>
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
/* eslint-disable semi */
export default {
  name: 'recommend',
  data () {
    return {
      link: 'infoone.html',
      recommendList: [
        {
          src: '//img.alicdn.com/tfs/TB1N3YXeACWBuNjy0FaXXXUlXXa-124-124.png_210x210Q50s50.jpg_.webp',
          title: '果冻布丁',
          id: 1
        },
        {
          src: '//img.alicdn.com/tps/i2/TB1eP8xHpXXXXbIapXXvye07pXX-124-124.jpg_210x210Q50s50.jpg_.webp',
          title: '巧克力',
          id: 2
        },
        {
          src: '//img.alicdn.com/tps/i3/TB1J0WFHpXXXXXpapXXvye07pXX-124-124.jpg_210x210Q50s50.jpg_.webp',
          title: '传统糕点',
          id: 3
        },
        {
          src: '//img.alicdn.com/tps/i4/TB160gLHXXXXXbwapXXvye07pXX-124-124.jpg_210x210Q50s50.jpg_.webp',
          title: '纯牛奶',
          id: 4
        },
        {
          src: '//img.alicdn.com/tps/i4/TB1NVCPHpXXXXXXXFXXvye07pXX-124-124.jpg_210x210Q50s50.jpg_.webp',
          title: '膨化食品',
          id: 5
        },
        {
          src: '//img.alicdn.com/tps/TB1DX61NFXXXXXvXFXXXXXXXXXX-124-124.jpg_210x210Q50s50.jpg_.webp',
          title: '饼干',
          id: 6
        },
        {
          src: '//img.alicdn.com/tps/i1/TB1JNqPHpXXXXb0XpXXvye07pXX-124-124.jpg_210x210Q50s50.jpg_.webp',
          title: '果味饮料',
          id: 7
        },
        {
          src: '//img.alicdn.com/tps/i3/TB1fbecHpXXXXaDapXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '碳酸饮料',
          id: 8
        },
        {
          src: '//img.alicdn.com/tps/i2/TB1NbyJHpXXXXXSXXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '牛肉干',
          id: 9
        },
        {
          src: '//img.alicdn.com/tps/i2/TB1hZVhHpXXXXbtapXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '火腿肠',
          id: 10
        },
        {
          src: '//img.alicdn.com/tps/i4/TB1lKJFHpXXXXXRapXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '果冻布丁',
          id: 11
        },
        {
          src: '//img.alicdn.com/tps/i3/TB1gHWJHpXXXXbtXVXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '方便速食',
          id: 12
        },
        {
          src: '//img.alicdn.com/tps/i1/TB1Pm9OHpXXXXc9XpXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '豆干制品',
          id: 13
        },
        {
          src: '//img.alicdn.com/tps/i1/TB1NA1PHpXXXXceXpXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '酸奶',
          id: 14
        },
        {
          src: '//img.alicdn.com/imgextra/i3/1709193846/TB2OXwoemKI.eBjy1zcXXXIOpXa_!!1709193846.jpg_140x140Q50s50.jpg_.webp',
          title: '大米',
          id: 15
        },
        {
          src: '//img.alicdn.com/tps/i3/TB1djypHpXXXXXHapXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '白酒',
          id: 16
        },
        {
          src: '//img.alicdn.com/tps/i4/TB1.ENdHpXXXXahaXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '酱油',
          id: 17
        },
        {
          src: '//img.alicdn.com/tps/i1/TB1HZIxHXXXXXchaXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '抽纸',
          id: 18
        },
        {
          src: '//img.alicdn.com/tps/i2/TB1.aN3HpXXXXbZaXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '纸尿裤',
          id: 19
        },
        {
          src: '//img.alicdn.com/tps/i4/TB1fV0NHpXXXXc6XVXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '卷纸',
          id: 20
        },
        {
          src: '//img.alicdn.com/tps/i3/TB1NypMHpXXXXcyaXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '洗发水',
          id: 21
        },
        {
          src: '//img.alicdn.com/tps/i3/TB177ueHpXXXXbPaXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '洗衣液',
          id: 22
        },
        {
          src: '//img.alicdn.com/tps/i2/TB199FMHpXXXXbfaXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '婴儿奶粉',
          id: 23
        },
        {
          src: '//img.alicdn.com/tps/i2/TB1dNXMHpXXXXXGaXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '手帕纸',
          id: 24
        },
        {
          src: '//img.alicdn.com/tps/i4/TB1FE8WHpXXXXc_aXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '牙膏',
          id: 25
        },
        {
          src: '//img.alicdn.com/tps/i3/TB1LCU6HXXXXXbGapXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '卫生巾',
          id: 26
        },
        {
          src: '//img.alicdn.com/tps/i4/TB1BIuhHpXXXXb0aXXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '湿巾',
          id: 27
        },
        {
          src: '//img.alicdn.com/tps/i4/TB1b3hkHpXXXXaOaFXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '洁厕灵',
          id: 28
        },
        {
          src: '//img.alicdn.com/tps/i1/TB1xNNqHpXXXXXaapXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '牙膏',
          id: 29
        },
        {
          src: '//img.alicdn.com/tps/i2/TB1VA9hHpXXXXXFapXXvye07pXX-124-124.jpg_140x140Q50s50.jpg_.webp',
          title: '婴儿湿巾',
          id: 30
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// px转rem
@function pr($px, $base: 32) {
  @return ($px / $base) * 1rem;
}
.recommend {
  h5 {
    color: #9b9b9b;
  }
  ul {
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
  }
}
</style>
