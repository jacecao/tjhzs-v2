<template>
  <section v-if="show_the_model" class="huizhan-box">
    <div class="huizhan-logo">
      <h3><span class="red">{{time}}-</span>会展中心介绍</h3>
      <span class="title">{{huizhanName}}</span>
    </div>
    <div class="huizhan-content">
      <play-img v-if="imageItems.length > 0" :images='imageItems' :size='imgStyle' :isLink='false' />
      <div v-else class="huizhan-img-box">
        <app-img :src="poster.img_url" :css="imgStyle" />
      </div>
      <div style="padding: 10px;" v-html="getHtml(content)"></div>
    </div>  
  </section>
</template>

<script>
import AppImg from 'components/img/ResponseImg'
import Displayimg from 'components/content/Displayimg'
import Path from '@js/path.js'
import Json from '@js/json_data.js'
import {replaceStr} from '@js/tool.js'
export default {
  name: 'huizhanMode',
  data () {
    return {
      imageItems: [],
      huizhanName: 'Jun\'s Fun',
      show_the_model: false,
      content: '',
      poster: {},
      imgStyle: {
        'width': '960px',
        'height': '400px'
      }
    }
  },
  props: {
    time: {
      type: String,
      default: ''
    },
    dataName: {
      type: String,
      default: ''
    }
  },
  created () {
    let vm = this
    vm.$http.get(Path.dataURL + vm.dataName).then(function (res) {
      // tjhzs服务器返回的json字符串
      let data = Json(res.body)
      // 获取图片数据
      vm.imageItems = data.images
      vm.huizhanName = data.name
      vm.show_the_model = data.display
      vm.content = data.content
      vm.poster = data.poster
      // 将封面图片加入图片数组前面
      if (vm.imageItems instanceof Array) {
        vm.imageItems.unshift(data.poster)
      } else {
        vm.imageItems[0] = data.poster
      }
      // 重组新闻中图片数据
      let _images = []
      for (let n of vm.imageItems) {
        _images.push({
          imgurl: n.img_url,
          desc: n.img_desc
        })
      }
      vm.imageItems = _images
    }, function () {
      // 如果读取失败则不显示此模块
      vm.show_the_model = false
      console.error('获取会展信息出现错误')
    })
  },
  methods: {
    getHtml (value) {
      let reg = new RegExp(/\\/, 'g')
      return replaceStr(value, reg)
    }
  },
  components: {'play-img': Displayimg, 'app-img': AppImg}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 注意当复合组件例如这里的app-img组件需要用到这里content.css时那么这里就需要style变为全局样式才能生效 -->
<!-- 这里可以尝试加与不加scoped属性对样式到底有什么影响 -->
<style lang="scss">
@import '../../sass/content.scss';
.huizhan-box{
  position: relative;
  width: 1000px;
  margin: 40px auto;
  border: 1px solid #dadada;
}
.huizhan-content{
  padding: 10px;
}
.huizhan-img-box{
  width: 960px;
  height: 400px;
  text-align: center;
  margin: 0 auto;
  border: 3px solid rgba(65,225,189,0.7);
}
</style>
