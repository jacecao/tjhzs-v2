<template>
  <transition name="main-fade" mode="out-in">
    <header>
      <div class="header-show" key="show">
        <!-- 头部图片显示模块 -->
        <repeat-img 
          :isLink = 'isLink'
          :size = 'size'
          :images = 'images_arr'
        />
      </div>
      <!-- 绑定data数据到组件的props -->
      <header-title
        v-if = "headerinfo.showtime"
        :headerinfo = 'headerinfo'
      />
      <meeting-info  :headerinfo='headerinfo' />

    </header>
  </transition>
</template>

<script>
import Headertitle from './Headertitle'
import MeetingInfo from './MeetingInfo'
import Loading from 'components/loading/Loadingdiv'
import RepeatImg from 'components/content/RepeatImg'
import Path from '@js/path.js'
import Json from '@js/json_data.js'

export default {
  name: 'tjhzs-header',
  data () {
    return {
      headerinfo: {},
      header_img: [],
      size: {
        height: '640px',
        width: '1200px'
      },
      isLink: false
      // ready: false
    }
  },
  created () {
    let vm = this
    vm.$http.get(Path.dataURL + 'headerinfo.json').then((res) => {
      // 这里一定要注意如果data中headerinfo:{},那么这里的数据是没办法得到响应的
      // 类似mongodb中的schema一样需要预先定义headerinfo，然后再通过这里获取变更传到子组件
      // tjhzs服务端需要JSON.parse()使用此步骤
      let data = Json(res.body)
      vm.headerinfo = data
      // 在头部图片加载完成后关闭掉loding画面
      // let img = new window.Image()
      // img.src = vm.headerinfo.bgimg.img_url
      // img.onload = () => { vm.ready = true }
      vm.header_img = vm.headerinfo.bgimg
    }, () => {
      console.error('获取头部信息出现错误：请检查配置信息是否正确或者网络故障')
    })
  },
  computed: {
    images_arr () {
      if (this.header_img instanceof Array) {
        return this.header_img
      } else {
        let _arr = new Array(1)
        let _ele = this.header_img
        _arr[0] = _ele
        return _arr
      }
    }
  },
  components: {
    'header-title': Headertitle,
    'meeting-info': MeetingInfo,
    'repeat-img': RepeatImg,
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../sass/_base.scss';
.header-info, .header-show{
  box-sizing: border-box;
  width: 1220px;
  margin: 0 auto;
}
$radius: 6px;
.header-show {
  position: relative;
  box-sizing: border-box;
  border: solid 10px #fff;
  height: $headerheight;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
}
</style>
