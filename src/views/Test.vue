<template>
  <div>
    <input type="button" name id value="获取笑话" @click="getJoke" />
    <p>{{joke}}</p>
    <div style="margin-top: 50px">
      <Title/>　　
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Title from "@/components/Title.vue";

export default {
  name: "Test",
  components: {Title},
  data: () => {
    return {
      joke: "很好笑的笑话",
    };
  },
  methods: {
    getJoke() {
      // axios回调函数中的this已经改变，无法访问到data中数据
      // 可以var that = this； 回调函数中用that访问data中数据
      var that = this;
      this.$axios({
        url: "https://autumnfish.cn/api/joke",
        methods: "get"
      }).then(
          function (response) {
            console.log(response.data);
            that.joke = response.data
          },
      );
    },
  },
  mounted(){
    //和风天气插件调用
    window.WIDGET = {CONFIG:{"modules":"20","background":5,"tmpColor":"ffffff","tmpSize":16,"cityColor":"ffffff","citySize":16,"aqiSize":16,"weatherIconSize":24,"alertIconSize":18,"padding":"10px 10px 10px 10px","shadow":"1","language":"auto","borderRadius":5,"fixed":"false","vertical":"middle","horizontal":"center","key":"aGh9gAMF5m"}}
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://apip.weatherdt.com/simple/static/js/weather-simple-common.js?v=2.0';
    document.getElementsByTagName('head')[0].appendChild(script);
  },
}
</script>

<style>

</style>