<template>
	<div class="home-page">
		<header-show/>
		<news-section/>
    <hb-huizhan :time="huizhan_a.time" :dataName="huizhan_a.file"/>
    <hb-huizhan :time="huizhan_b.time" :dataName="huizhan_b.file"/>
    <hb-hotel 
      :setTitle="hotel_a.title" 
      :dataName="hotel_a.file" 
      :pagePath="hotel_a.page"
      :isShow="hotel_a.isShow"
    />
    <hb-hotel 
      :setTitle="hotel_b.title" 
      :dataName="hotel_b.file" 
      :pagePath="hotel_b.page"
      :isShow="hotel_b.isShow"
    />
	</div>
</template>

<script>
import NewsSection from 'components/content/NewsSection.vue'
import HeaderShow from 'components/header/Headershow.vue'
import Hotel from 'components/content/HotelMode.vue'
import Huizhan from 'components/content/HuizhanMode.vue'
import Json from '@js/json_data.js'
import Path from '@js/path.js'
export default {
  name: 'tjhzs_home',
  data () {
    return {
      huizhan_a: {
        time: '春糖',
        file: 'huizhan_chun.json'
      },
      huizhan_b: {
        time: '秋糖',
        file: 'huizhan_qiu.json'
      },
      hotel_a: {
        title: '春糖',
        file: 'hotel.json',
        page: Path.hotelPAGE,
        isShow: true
      },
      hotel_b: {
        title: '秋糖',
        file: 'hotel_autumn.json',
        page: Path.autumnHotelPAGE,
        isShow: true
      }
    }
  },
  created () {
    let vm = this
    // 获取模块显示配置信息
    vm.$http.get(Path.dataURL + 'display_config.json').then(function (res) {
      // tjhzs服务器返回的json字符串
      let data = Json(res.body)
      vm.hotel_a.isShow = Boolean(data['display_spring_hotel'])
      vm.hotel_b.isShow = Boolean(data['display_autumn_hotel'])
    }, function () {
      console.error('显示配置模块读取失败')
    })
  },
  components: {
    'header-show': HeaderShow,
    'news-section': NewsSection,
    'hb-hotel': Hotel,
    'hb-huizhan': Huizhan
  }
}
</script>

<style scoped lang="scss"></style>
