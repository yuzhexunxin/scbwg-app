<template>
  <div>
    <van-button @click="collect" color="#7232dd" size="small" style="font-size: 18px">
      <div v-show="collectShow">
        <van-icon name="star-o" size="18"/>
        <span>收藏</span>
      </div>
      <div v-show="!collectShow">
        <van-icon color="red" name="star-o" size="18"/>
        <span style="color: red">收藏</span>
      </div>
    </van-button>
  </div>
</template>

<script>
export default {
  name: "Collect",
  data() {
    return {
      collectShow :true
    }
  },
  methods: {
    collect() {
      this.collectShow = !this.collectShow
    }
  }
}
</script>

<style scoped>

</style>