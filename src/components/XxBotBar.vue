<template>
  <div>
    <div class="exhBottom">
      <van-button @click="collect" style="font-size: 18px;border: 0px">
        <div v-show="collectShow">
          <van-icon name="star-o" size="25"/>
          <div>收藏</div>
        </div>
        <div v-show="!collectShow">
          <van-icon color="red" name="star-o" size="25"/>
          <div style="color: red">收藏</div>
        </div>
      </van-button>
      <div style="width: 170px;">
        <van-button to="/comment" color="#7232dd" style="font-size: 20px; width: 150px;height: 40px;" >
          <van-icon name="chat-o" size="20" style="margin-right: 10px"/>
          <span>评论</span>
        </van-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "XxBotBar",
  data() {
    return {
      collectShow: true
    }
  },
  methods: {
    collect() {
      this.collectShow = !this.collectShow
      console.log(this.collectShow)
    }
  }
}
</script>

<style scoped>
.exhBottom{
  height: 80px;
  background-color: white;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 999;
  border-top: 1px solid rgba(0,0,0,0.26);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>