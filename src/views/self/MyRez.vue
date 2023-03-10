<template>
  <div style="height: 100vh;background-color: rgba(0,0,0,0.05)">
    <xx-top-bar title="我的预约" :share-x="false"></xx-top-bar>
    <van-tabs v-model="active" animated >

      <van-tab  style="padding: 0 10px" v-for="(title,index) in titles" :key="index" :title="title.name + '（' + title.num + '）'">
        <div v-for="(srchlist,index) in title.list" :key="index" >
          <van-swipe-cell>
            <router-link :to="srchlist.aLink">
              <div style="padding: 20px;background-color: rgb(0,0,0,0.4);font-size: 20px;color: white;border-radius: 15px;margin: 10px 0" >
                <div>预约票</div>
                <div style="margin-top: 5px">2022年3月25日 周三</div>
                <div class="yycard">
                  <div>预约码：6561156156156</div>
                  <div>小米，小红</div>
                  <div>预约认识：2人</div>
                  <div style="border-bottom: 1.5px solid white;margin-top: 15px"></div>
                </div>

              </div>
            </router-link>
            <template #right>
              <van-button style="width: 50px;height: 100%;font-size: 15px;border-radius: 15px" square type="primary" text="取消" />
              <van-button style="width: 50px;height: 100%;font-size: 15px;border-radius: 15px" square type="danger" text="删除" />
            </template>
          </van-swipe-cell>

        </div>
      </van-tab>
    </van-tabs>


  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";
import SearchList from "@/components/SearchList.vue";

export default {
  name: "MyRez",
  components: {SearchList, XxTopBar},
  data() {
    return {
      active: '',
      rezSuccess:[
        {
          url:require("../../../src/assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
          exhName:"南宋龙泉窑青釉琮式瓷瓶",
          aLink: "/echDet",
          p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
              "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
              "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
        },
      ],
      rezCancel:[
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
  computed:{
    rezAll() {
      return this.rezSuccess.concat(this.rezCancel)
    }
  },
  created() {
    this.titles = [
      {
        name: '全部',
        num: this.rezAll.length,
        list: this.rezAll
      },
      {
        name: '预约成功',
        num: this.rezSuccess.length,
        list: this.rezSuccess
      },
      {
        name: '预约取消',
        num: this.rezCancel.length,
        list: this.rezCancel
      },
    ]
  }
}
</script>

<style scoped>
.yycard {
  font-size: 15px;
  margin-top: 15px;
}
.yycard div{
  margin-top: 5px;
}
</style>