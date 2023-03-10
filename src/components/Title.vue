<template>
  <div>
    <input v-model="city" type="text" />
    <button @click="xx">获取天气</button>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      city: '',
    }
  },
  methods:{
    xx() {
      // axios回调函数中的this已经改变，无法访问到data中数据
      // 可以var that = this； 回调函数中用that访问data中数据
      var that = this;
      this.$axios({
        url: "https://www.yiketianqi.com/free/day?appid=92919846&appsecret=PT0J1oiF&unescape=1&city=" + this.city,
        methods: "get"
      }).then(
          function (response) {
            console.log(response.data);
          },
      );
    },
  },
}
</script>

<style scoped>

</style>