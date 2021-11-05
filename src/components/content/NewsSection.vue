<template>
  <section class="news-mode">
    <h3>我们最新的动态</h3>
    <displayimg v-if="items.length > 0" :setcss="style" :images='items' :size='size'></displayimg>
    <news :newsdata="news"></news>
    <span class="get-more"><router-link v-if="isShowMore" to="/news_list">&gt; 更多 &lt;</router-link></span>
  </section>
</template>

<script>
import Displayimg from 'components/content/Displayimg'
import News from 'components/content/News'
import Path from '@js/path.js'
import Json from '@js/json_data.js'
import {saveSession} from '@js/tool.js'
export default {
  name: 'main-content',
  data () {
    return {
      style: {
        'margin-top': '10px'
      },
      size: {
        'width': '980px',
        'height': '400px'
      },
      items: [],
      news: [],
      isShowMore: true // 当前新闻总数
    }
  },
  created () {
    const _url = Path.newsPAGE
    let vm = this
    let _images = []
    // 获取新闻总数据
    const _newsInfo = `${Path.webControl}getNewsTotal`
    vm.$http.get(_newsInfo).then((res) => {
      if (parseInt(res.body) > 6) {
        this.isShowMore = true
      }
    }, () => {
      console.error('获取新闻数据出现错误')
    })
    vm.$http.get(Path.dataURL + 'news.json').then((res) => {
      let data = Json(res.body)
      // 重组新闻中图片数据
      for (let n of data) {
        _images.push({
          url: _url + n.id,
          imgurl: n.poster.url,
          desc: n.poster.desc
        })
      }
      vm.items = _images
      vm.news = data
      // 设置临时储存
      saveSession('newsImageItems', vm.items)
      saveSession('newsData', vm.news)
    }, () => {
      console.error('获取新闻数据出现错误：请检查配置信息是否正确或者网络故障')
    })
  },
  components: {
    Displayimg, News
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../sass/_base.scss';
  .news-mode{
    width: 1000px;
    position: relative;
    margin: 40px auto;
    border: 1px solid #dadada;
    h3 {
      box-shadow:0 0 1px 1px  rgba(0,0,0,0.2);
      border-radius: 5px;
    }
    .get-more {
      display: block;
      font-size: 16px;
      margin: 0 auto;
      padding: 6px;
      width: 200px;
      background-color: rgba(39,226,233,0.8);
      border-radius: 10px 10px 0 0;
      text-align: center;
      a {color: rgb(99, 97, 97); text-decoration: none;}
      a:hover {color: $hovercolor;}
    }
  }
</style>
