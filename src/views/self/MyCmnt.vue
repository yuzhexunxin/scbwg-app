<template>
  <div style="height: 100vh;background-color: rgba(0,0,0,0.05)">
    <xx-top-bar title="我的评论" :share-x="false"></xx-top-bar>
    <div v-for="(pl,index) in pls" :key="index">
      <van-swipe-cell>
        <div style="padding: 20px;
              background-color: white ;
              font-size: 18px;
              margin: 10px 0" >
          <div style="display: flex;justify-content: space-between;align-items: center">
            <div>{{ pl.pldate }}</div>
            <div>| {{ pl.stat }}</div>
          </div>
          <div style="border-bottom: 1px solid darkcyan;margin-top: 10px"></div>
          <div style="margin: 10px 0;font-size: 15px">{{ pl.comtText}}</div>
<!--          评论的展览或展品-->
          <div style="background-color: rgba(0,0,0,0.03);padding: 10px">
            <search-list :srchlists="pl.zl" button-show="3"></search-list>
          </div>
        </div>
        <template #right>
          <van-button style="width: 50px;height: 100%;font-size: 15px;" square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";
import SearchList from "@/components/SearchList.vue";

export default {
  name: "MyCmnt",
  components: {SearchList, XxTopBar},
  data() {
    return {
      pls:[
        {
          pldate: '2022-02-20 18:88:88',
          stat: '审核中',
          comtText: '说的太好了！！',
          zl:[
            {
              url:require("../../../src/assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
              exhName:"南宋龙泉窑青釉琮式瓷瓶",
              aLink: "/echDet",
              p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
                  "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
                  "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
            }
          ]
        },
        {
          pldate: '2022-02-20 18:88:88',
          stat: '审核中',
          comtText: '说的太好了！！说的太好了！！说的太好了！！说的太好了！！说的太好了！！说的太好了！！',
          zl:[
            {
              url:require("../../../src/assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
              exhName:"南宋龙泉窑青釉琮式瓷瓶",
              aLink: "/echDet",
              p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
                  "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
                  "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>