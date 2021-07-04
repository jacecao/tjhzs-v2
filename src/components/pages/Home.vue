<template>
	<div class="home-page">
		<header-show/>
		<news-section/>
    <hb-huizhan :time="huizhan_a.time" :dataName="huizhan_a.file"/>
    <hb-huizhan :time="huizhan_b.time" :dataName="huizhan_b.file"/>
    <hb-hotel :setTitle="hotel_a.title" :dataName="hotel_a.file" :pagePath="hotel_a.page"/>
    <hb-hotel :setTitle="hotel_b.title" :dataName="hotel_b.file" :pagePath="hotel_b.page"/>
	</div>
</template>

<script>
import NewsSection from 'components/content/NewsSection.vue'
import HeaderShow from 'components/header/Headershow.vue'
import Hotel from 'components/content/HotelMode.vue'
import Huizhan from 'components/content/HuizhanMode.vue'
import Path from '@js/path.js'
export default {
  name: 'tjhzs_home',
  data () {
    return {
      huizhan_a: {
        time: '春季',
        file: 'huizhan_chun.json'
      },
      huizhan_b: {
        time: '秋季',
        file: 'huizhan_qiu.json'
      },
      hotel_a: {
        title: '春季',
        file: 'hotel.json',
        page: Path.hotelPAGE
      },
      hotel_b: {
        title: '秋季',
        file: 'hotel_autumn.json',
        page: Path.autumnHotelPAGE
      }
    }
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
