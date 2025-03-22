<template>
  <div class="temp_div"> 
    <!-- 重新调整框架，将公司图片单独显示在最前面 -->
    <!-- 讲微信显示到招聘之前 -->
    <img class="temp_img" src="/static/img/about.jpg" alt=""/>
    <div class="tjhzs_about tjhzs-main-content">
      <!-- <section v-for='item in info' class="about_list">
        <div class="head">
          <div class="title">{{item.title}}</div>
        </div>
        <div class="content" v-html="getHtml(item.content)">{{getHtml(item.content)}}
        </div>
      </section> 临时取消 2021-12-15 --> 
      <section class="about_list">
        <!--
        <div class="head">
          <div class="title">{{info[1].title}}</div>
        </div> 取消显示关于我们标题，2025-3-21
        -->
        <div class="content" v-html="getHtml(info[1].content)">{{getHtml(info[1].content)}}</div>
        <div class="head">
          <div class="title">{{info[0].title}}</div>
        </div>
        <div class="content" v-html="getHtml(info[0].content)">{{getHtml(info[0].content)}}</div>
      </section>

      <section class="about_list about_weal">
        <div class="head">
          <div class="title">我们的福利</div>
        </div>
        <div class="content">
          <div class="conrow">
            <div class="item">
              <span class="icon-house icons"></span>
              <span>提供工作住房</span>
            </div>
            <div class="item">
              <span class="icon-travel icons"></span>
              <span>一周团队旅行</span>
            </div>
            <div class="item">
              <span class="icon-film icons"></span>
              <span>工作娱乐两不误</span>
            </div>
          </div>
          <div class="conrow">
            <div class="item">
              <span class="icon-learn icons"></span>
              <span>学习+加薪</span>
            </div>
            <div class="item">
              <span class="icon-money icons"></span>
              <span>工龄福利丰厚</span>
            </div>
            <div class="item">
              <span class="icon-heart icons"></span>
              <span>超越年假的探亲假</span>
            </div>
          </div>
        </div>
      </section>

      <div class="weixin">
        <img src="/static/img/weixin.02fbb77.png" alt="weixin"/>
        <p>我们的公众号</p>
      </div>

      <job-head :contact="contact"/>
      <!-- <Works :Jobs="jobs"/> 临时取消2021—12-15 -->
    </div>
    <img class="job_img" src="http://www.tjhzs.com/images/tjhzs_2021_12_15_2.jpg"/>
    <!-- 临时节点 -->
  </div>
</template>

<script>
import JobHead from 'components/job/Jobheader'
// import Works from 'components/job/works'
import Path from '@js/path.js'
import Json from '@js/json_data.js'
import {replaceStr} from '@js/tool.js'
export default {
  name: 'tjhzs_about',
  data () {
    return {
      info: [],
      // 这里的数据将传给工作子组件
      jobs: [],
      contact: {
        email: 'hrxbvip@163.com'
      }
    }
  },
  created () {
    let vm = this

    vm.$http.get(Path.dataURL + 'about.json').then((res) => {
      let data = Json(res.body)
      vm.info = data.tjhzs
    }, () => {
      console.log('about数据出错，网络链接不成功或未找到文件')
    })

    vm.$http.get(Path.dataURL + 'jobs.json').then((res) => {
      let data = res.body
      vm.jobs = data.jobs
    }, () => {
      console.log('jobs数据出错，网络链接不成功或未找到文件')
    })

    vm.$http.get(Path.dataURL + 'email.json').then((res) => {
      let data = res.body
      vm.contact = data
    }, () => {
      console.log('email数据出错，网络链接不成功或未找到文件')
    })
  },
  methods: {
    getHtml (value) {
      let reg = new RegExp(/\\/, 'g')
      return replaceStr(value, reg)
    }
  },
  // components: {JobHead, Works}
  components: {JobHead} // 临时修改
}
</script>

<style lang="scss">
@import '../../sass/about.scss';
.tjhzs_about{
	@extend %middlewidth;
  padding-top: 30px;
}
.weixin {
  @extend %middlewidth;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    border: 2px solid #3eb812;
  }
}
.temp_img {
  display: block;
  width: 1200px;
  height: auto;
  margin: 40px auto;
  border-radius: 6px;
}
.job_img {
  display: block;
  width: 1080px;
  margin: 0 auto 40px auto;
  border-radius: 2px;
}
</style>
