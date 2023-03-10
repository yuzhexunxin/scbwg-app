<template>
  <div  class="zlCardShow">
    <img class="zlCardImg" :src="zlCardOb.imgUrl">
    <div style="margin-left: 10px;font-size: 15px">
      <div style="font-size: 18px;font-weight: bold">
        {{ zlCardOb.title }}
        <van-icon @click="zlCardCancel" color="rgba(0,0,0,0.56)" style="float: right;margin: 3px 0 0 10px" name="cross" />
      </div>
      <div style="margin-top: 5px">
        {{ zlCardOb.seat }}
      </div>
      <div style="
               color: rgba(0,0,0,0.56);
               line-height: 18px;
               overflow: hidden;
               text-overflow:ellipsis;
               display: -webkit-box;
               -webkit-line-clamp: 2;
               -webkit-box-orient: vertical;
               margin-top: 5px;
               ">
        {{ zlCardOb.text }}
      </div>
      <!--            分割线-->
      <div style="width: 100%;height: 2px;background-color: rgba(0,0,0,0.3);margin: 5px 0 3px"></div>
      <router-link to="/zlDet">
        <div style="color: red;float: right;margin-right: 10px">查看详情</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZlCardImg",
  props:{
    zlCardOb: Object,
  },
  methods: {
    zlCardCancel() {
      this.$parent.showZlCard = false
    }
  }
}
</script>

<style scoped>
.zlCardShow {
  height: 120px;
  background-color: white;
  display: flex;
  padding: 10px;
}
.zlCardImg {
  width: 100px;
  height: 100%;
  object-fit: cover;
}
</style>