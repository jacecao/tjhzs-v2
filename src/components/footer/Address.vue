<template>
  <div class="footer-address">
    <p>成都和容兴邦广告有限公司</p>
    <p>{{webinfo.name}}</p>
    <p>地址：{{webinfo.address}}</p>
<!--     <p>备案号：{{webinfo.number}}</p> -->
  </div>
</template>

<script>
export default {
  name: 'tjhzs-address',
  props: {
    webinfo: Object
  },
  data () {
    return {}
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../sass/footer.scss';
  .footer-address{
    // position: absolute;
  }
</style>
