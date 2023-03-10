<template>
  <van-tabbar v-model="active" route :fixed="true" :placeholder="zw">
    <van-tabbar-item to="/home" size="50" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item to="/vr" icon="search">全景</van-tabbar-item>
    <van-tabbar-item to="/tour" icon="friends-o">导览</van-tabbar-item>
    <van-tabbar-item to="/self" icon="setting-o">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      active: 0,
    }
  },
  props: {
    zw:{
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>