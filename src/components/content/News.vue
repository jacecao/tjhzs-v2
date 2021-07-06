<template>
  <ul class="news-list">
    <li v-for="item in newsdata">
      <router-link v-bind:to="path+item.id" v-bind:title="item.title">
        <h4>{{item.title}}</h4><span>发布日期： {{item.date}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Path from '@js/path.js'
export default {
  name: 'news',
  props: {
    newsdata: {
      type: Array
    }
  },
  data () {
    return {
      path: Path.newsPAGE
    }
  },
  created () {},
  methods: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
