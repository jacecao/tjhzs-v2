<template>
  <section v-if="isShow" class="hotel-content">
    <div class="hot-logo">
        <h3>
            <span class="red">{{setTitle}}-</span><span class="red">HOT</span><span>EL</span>
        </h3>
      <span class="title">热点商务洽谈酒店介绍</span>
    </div>
    <ul v-if="show_the_model" class="hotel-list">
      <li v-for="item in items">
        <router-link class="hot_img_box" :to="pagePath + item.id">
          <app-img :src="item.poster.url" size="small"/>
          <div class="img_info">{{item.name}}</div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import AppImg from 'components/img/AppImg'
import Path from '@js/path.js'
import Json from '@js/json_data.js'
export default {
  name: 'hotels',
  data () {
    return {
      items: [],
      show_the_model: true
    }
  },
  props: {
    setTitle: {
      type: String,
      default: ''
    },
    dataName: {
      type: String,
      default: 'hotel.json'
    },
    pagePath: {
      type: String,
      default: 'hotels/'
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  created () {
    let vm = this
    vm.$http.get(Path.dataURL + vm.dataName).then(function (res) {
      // tjhzs服务器返回的json字符串
      let data = Json(res.body)
      vm.items = data
    }, function () {
      // 如果读取失败则不显示此模块
      vm.show_the_model = false
      console.error('获取酒店信息出现错误：请检查配置信息是否正确或者网络故障')
    })
  },
  components: {AppImg}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 注意当复合组件例如这里的app-img组件需要用到这里content.css时那么这里就需要style变为全局样式才能生效 -->
<!-- 这里可以尝试加与不加scoped属性对样式到底有什么影响 -->
<style lang="scss">
@import '../../sass/content.scss';
.hotel-content{
  position: relative;
  width: 1000px;
  margin: 40px auto;
  border: 1px solid #dadada;
}
</style>
