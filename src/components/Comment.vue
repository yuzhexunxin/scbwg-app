<template>
  <div>
    <div class="plBox" v-for="(pl,index) in pls" :key="index">
      <van-image
          round
          width="4rem"
          height="4rem"
          :src="pl.url"
          fit="cover"
      />
      <div style="margin-left: 10px;width: calc(100vw - 94px)">
        <div class="plBoxName">{{ pl.nickname }}</div>
        <div class="plBoxTime ">{{ pl.cmntDate }}</div>
        <div class="plBoxText">{{ pl.cmntText }}</div>
        <div class="plBoxX"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      // pls: [
      //   {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！"},
      //   {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！深！！！！"},
      //   {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精深中国文化博大精深！！！！中国文化博大精深！！！！！！！！"},
      //   {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精中国文化博大精深！！！！！！！！深！！！！"},
      //   {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精中国文化博大精深！！！！中国文化博大精深！！！！深！！！！"}
      // ]
    };
  },
  props: {
    pls: Array
  }
}
</script>

<style scoped>
.plBox {
  display: flex;
  /*align-items: center;*/
  margin-top: 10px;
}
.plBoxName {
  font-size: 15px;
}
.plBoxTime {
  font-size: 10px;
  color: rgba(0,0,0,0.56);
  margin-top: 7px;
}
.plBoxText {
  font-size: 15px;
  color: rgba(0,0,0,0.56);
  margin-top: 15px;
  line-height: 20px;
  display: flex;
  text-align: justify;
}
.plBoxX {
  position: relative;
  border-bottom: 1px solid rgba(0,0,0,0.26);
  width: 100%;
  margin-top: 10px
}
</style>