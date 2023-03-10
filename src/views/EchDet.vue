<template>
  <div style="background-color: rgba(0,0,0,0.15)">
<!--    头部-->
    <XxTopBar title="展品详情"></XxTopBar>
<!--    轮播图-->
    <div class="exhImg">
      <img src="../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg">
    </div>
<!--    语音信息收藏-->
<!--    边距调整-->
    <div class="exhBox" style="margin-top: -5px">
      <div class="exhTitle">
        <p style="font-weight: bold; margin-top: 10px">南宋龙泉窑青釉琮式瓷瓶</p>
        <collect></collect>
      </div>

      <div class="exhPar">
        <p>高：26.8厘米</p>
        <p>口径：7.7厘米</p>
        <p>足径：7.8厘米</p>
        <p>腹径：10.1厘米</p>
        <p>xx展厅</p>
      </div>
    </div>
<!--    展品简介-->
    <div class="exhBox" style="padding: 30px 10px">
      <div class="exhText">南宋龙泉窑青釉琮式瓷瓶，瓶体为长方形，四壁模印四组相同的凸条纹，
        每组均由8节长短线条相间的条纹组成。除圈足底部以外通体内外施梅子青釉，
        釉色莹润。琮式瓶是仿玉琮造型制作的礼器，内圆外方的造型，象征了天圆地方，
        体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮
        的端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵
        的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。
      </div>
      <div class="exhText">南宋龙泉窑青釉琮式瓷瓶，瓶体为长方形，四壁模印四组相同的凸条纹，
        每组均由8节长短线条相间的条纹组成。除圈足底部以外通体内外施梅子青釉，
        釉色莹润。琮式瓶是仿玉琮造型制作的礼器，内圆外方的造型，象征了天圆地方，
        体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮
        的端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵
        的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。

      </div>
    </div>
<!--    视频-->
    <div class="exhBox">
      <p style="font-weight: bold; font-size: 20px; margin-top: 10px">展品视频</p>
    </div>
<!--    评论-->
    <div class="exhBox">
      <p style="font-weight: bold; font-size: 20px; margin-top: 10px">评论留言 （{{ pls.length }}）</p>
      <Comment :pls="pls"></Comment>
    </div>
<!--    <div class="exhBox">-->
<!--      <p style="font-weight: bold; font-size: 20px; margin-top: 10px">评论留言 （5）</p>-->
<!--      <div class="plBox" v-for="(pl,index) in pls" :key="index">-->
<!--&lt;!&ndash;        <img src="../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg">&ndash;&gt;-->
<!--        <van-image-->
<!--            round-->
<!--            width="4rem"-->
<!--            height="4rem"-->
<!--            :src="pl.url"-->
<!--            fit="cover"-->
<!--        />-->
<!--        <div style="margin-left: 10px;width: calc(100vw - 94px)">-->
<!--          <div class="plBoxName">{{ pl.nickname }}</div>-->
<!--          <div class="plBoxTime ">{{ pl.cmntDate }}</div>-->
<!--          <div class="plBoxText">{{ pl.cmntText }}</div>-->
<!--          <div class="plBoxX"></div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    底部功能-->
    <xx-bot-bar></xx-bot-bar>
<!--    占位置-->
    <div class="echZw">
      已经到底啦~
    </div>
  </div>
</template>

<script>
import {Toast} from "vant";
import XxTopBar from "@/components/XxTopBar.vue";
import XxBotBar from "@/components/XxBotBar.vue";
import Collect from "@/components/Collect.vue";
import Comment from "@/components/Comment.vue";

export default {
  name: "EchDet",
  components: {Comment, Collect, XxBotBar, XxTopBar},
  data() {
    return {
      value: '',
      pls: [
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！"},
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！深！！！！"},
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精深中国文化博大精深！！！！中国文化博大精深！！！！！！！！"},
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精中国文化博大精深！！！！！！！！深！！！！"},
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精中国文化博大精深！！！！中国文化博大精深！！！！深！！！！"}
      ]
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
    srchClear() {
      console.log("sadasd")
    }
  },
}
</script>

<style scoped>

.exhImg img{
  width: 100vw;
  height: 50%;
}
.exhBox {
  background-color: white;
  margin-top: 8px;
  padding: 10px;
}
.exhTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
.exhPar {
  color: rgba(0,0,0,0.56);
  font-size: 15px;
  margin-top: 2px;
}
.exhPar p {
  margin-top: -5px;
}
.exhText {
  font-size: 15px;
  line-height: 23px;
  text-indent: 2rem;
  display: flex;
  text-align: justify;
}

.echZw {
  width: 100%;
  height: 150px;
  background-color: white;
  text-align: center;
  padding: 20px 0;
}
</style>