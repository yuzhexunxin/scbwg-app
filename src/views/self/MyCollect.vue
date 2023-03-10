<template>
  <div style="height: 100vh;background-color: rgba(0,0,0,0.05)">
    <xx-top-bar title="我的收藏" :share-x="false"></xx-top-bar>
    <van-tabs v-model="active" animated >
      <van-tab style="background-color:white;" v-for="(title,index) in titles" :key="index" :title="title.name + '（' + title.num + '）'">
        <search-list button-show="0" :srchlists="title.list" style="margin-top: 10px"></search-list>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";
import SearchList from "@/components/SearchList.vue";

export default {
  name: "MyCollect",
  components: {SearchList, XxTopBar},
  data() {
    return {
      active: '',
      srchZl:[
        {
          url:require("../../../src/assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
          exhName:"南宋龙泉窑青釉琮式瓷瓶",
          aLink: "/echDet",
          p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
              "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
              "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
        },
      ],
      srchZp:[
        {
          url:require("../../../src/assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
          exhName:"南宋龙泉窑青釉琮式瓷瓶",
          aLink: "/echDet",
          p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
              "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
              "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
        },
        {
          url:require("../../../src/assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
          exhName:"南宋龙泉窑青釉琮式瓷瓶",
          aLink: "/echDet",
          p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
              "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
              "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
        },
      ],
      titles: []
    }
  },
  created() {
    console.log('sssss')
    this.titles = [
      {name: '展览', num: this.srchZl.length,list: this.srchZl},
      {name: '展品', num: this.srchZp.length,list: this.srchZp}
    ]
  }
}
</script>

<style scoped>

</style>