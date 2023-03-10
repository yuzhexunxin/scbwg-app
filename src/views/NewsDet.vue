<template>
  <div style="background-color: rgba(0,0,0,0.15)">
    <xx-top-bar title="新闻详情" share-x="share"></xx-top-bar>
    <div style="background-color: white;padding: 10px">
      <div class="newTitle">乌克兰危机的中国立场</div>
      <div class="newData">
        <div>
          悍匪
          <span style="font-size: 15px;color: rgba(0,0,0,0.5);margin-left: 5px">2022/2/5 14:55:55</span>
        </div>
      </div>
      <div class="newText">一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际重一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际关系基本准则，捍卫国际公平正义。国际法应当得到平等统一适用，
        不应采取双重标准。
      </div>
      <div class="newText">一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际重一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该
        得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际应该得到切实保障。国家不分大小、强弱、贫富一
        律平等，各方要共同维护国际关系基本准则，捍卫国际公平正义。国际法应当得到平等统一适用，
        不应采取双重标准。</div>
    </div>

<!--    评论-->
    <div class="plBox">
      <p style="font-weight: bold; font-size: 20px; margin-top: 10px">评论留言 （{{ pls.length }}）</p>
      <comment :pls="pls"></comment>
    </div>
    <xx-bot-bar></xx-bot-bar>
    <div class="echZw">
      已经到底啦~
    </div>
  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";
import XxBotBar from "@/components/XxBotBar.vue";
import Comment from "@/components/Comment.vue";

export default {
  name: "NewsDet",
  components: {Comment, XxBotBar, XxTopBar},
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
}
</script>

<style scoped>
.plBox {
  background-color: white;
  margin-top: 8px;
  padding: 10px;
}
.newTitle {
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
}
.newData {
  font-size: 18px;
  margin: 10px 0;
}
.newText {
  font-size: 15px;
  line-height: 23px;
  text-indent: 2rem;
  text-align: justify;
  margin-top: 10px;
}
.echZw {
  width: 100%;
  height: 150px;
  background-color: white;
  text-align: center;
  padding: 20px 0;
}
</style>