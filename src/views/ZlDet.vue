<template>
  <div style="background-color: rgba(0,0,0,0.15)">
<!--    头部-->
    <XxTopBar title="展览详情"></XxTopBar>
<!--    介绍-->
    <div class="zlXx">
      <img src="../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg">
      <div class="zlXxText">
        <div class="zlName">四川宋瓷博物馆展览</div>
        <p style="margin-top: 20px;">2022年7月起对外展出</p>
        <p>xx展厅</p>
        <p>免费</p>
      </div>
    </div>

<!--    展览简介-->
    <div class="exhBox">
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
<!--    图片展示-->
    <div class="exhBox">
      <div class="exhTitle">
        <p style="font-weight: bold; margin-top: 10px">展厅实景</p>
      </div>
      <van-swipe @change="onChange" >
        <van-swipe-item v-for="(ztUrl,index) in ztUrls" :key="index">
          <img class="zlImg" :src="ztUrl.url" alt="">
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>

    </div>
<!--    评论-->
    <div class="exhBox">
      <p style="font-weight: bold; font-size: 20px; margin-top: 10px">评论留言 （{{ pls.length }}）</p>
      <comment :pls="pls"></comment>
    </div>
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
import Comment from "@/components/Comment.vue";

export default {
  name: "EchDet",
  components: {Comment, XxBotBar, XxTopBar},
  data() {
    return {
      value: '',
      pls: [
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！"},
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精中国文化博大精深！！！！中国文化博大精深！！！！中国文化博大精深！！！！深！！！！"},
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精深中国文化博大精深！！！！中国文化博大精深！！！！！！！！"},
        {url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),nickname:'悍匪',cmntDate:"2023-02-22 10:08:55",cmntText:"中国文化博大精中国文化博大精深！！！！！！！！深！！！！"},
      ],
      ztUrls: [
        {url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
      ],
      current: 0,
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
    },
    onChange(index) {
      this.current = index;
    },
  },
}
</script>

<style scoped>
.zlXx {
  display: flex;
  padding: 10px;
  background-color: white;
}
.zlXx img {
  object-fit: cover;
  width: 150px;
  height: 180px;
}
.zlXxText {
  margin-left: 20px;
}
.zlXxText p {
  margin-top: -5px;
  font-size: 15px;
  color: rgba(0,0,0,0.55);
}
.zlName {
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-top: 0;
}
.zlImg {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 15px;
  background: rgba(0, 0, 0, 0.1);
}


/*copy*/
.exhImg img{
  width: 100vw;
  height: 50%;
}
.exhBox {
  background-color: white;
  margin-top: 8px;
  padding: 10px ;
}
.exhTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
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

.echZw {
  width: 100%;
  height: 150px;
  background-color: white;
  text-align: center;
  padding: 20px 0;
}
</style>