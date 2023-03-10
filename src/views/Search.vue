<template>
  <div style="height:100vh;background-color: white">
    <form action="/">
      <van-search
          v-model="value"
          show-action
          placeholder="搜索展览/展品"
          @search="onSearch"
          @cancel="onCancel"
      />
    </form>
<!--    搜索页面-->
    <div v-if="srchShow" style="background-color: white;padding: 0 10px">
      <!--    搜索历史-->
      <div style="display: flex; justify-content:space-between; align-items: center">
        <p class="srchTitle">搜索历史</p>
        <van-icon @click="srchClear" name="delete-o" size="18"/>
      </div>
      <div class="srchHis">
        <van-tag class="srchTag" v-for="(item, index) in items" :key="index" v-if="show" closeable size="medium" type="primary" @close="close(item)">
          <router-link :to="item.aLink" style="color: white">
            {{ item.srch }}
          </router-link>
        </van-tag>
      </div>
      <!--    热门推荐-->
      <div class="srchTitle">热门推荐</div>
      <div class="hotBox">
        <div class="hotCard" v-for="(zp,index) in hotZp" :key="index">
          <router-link :to="zp.aLink">
            <img :src="zp.url">
            <p>{{ zp.text }}</p>
          </router-link>
        </div>
      </div>
    </div>
<!--    搜索详情页-->
    <div v-if="!srchShow" style="background-color: white">
      <p style="font-size: 20px;font-weight: bold">| 展品</p>
      <search-list button-show="1" :srchlists="srchZp" style="margin-top: 10px"></search-list>
    </div>

  </div>

</template>
<script>
import {Toast} from "vant";
import Home from "@/views/Home.vue";
import index from "vuex";
import SearchList from "@/components/SearchList.vue";

export default {
  name: "Search",
  computed: {
    index() {
      return index
    }
  },
  components: {SearchList, Home},
  data() {
    return {
      value: '',
      show: true,
      items: [
        {id: 1,srch:"asdasdas",aLink: "/"},
        {id: 2,srch:"asdasd",aLink: "/"},
        {id: 3,srch:"asdasd",aLink: "/"},
        {id: 4,srch:"asdasdasd",aLink: "/"},
        {id: 5,srch:"asdasdasd",aLink: "/"},
        {id: 6,srch:"dasdasd",aLink: "/"},
        {id: 7,srch:"dassd",aLink: "/"},
        {id: 8,srch:"asd",aLink: "/"},
        {id: 9,srch:"asdasdasdas",aLink: "/"},
      ],
      hotZp: [
        {
          id:1 ,
          url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg") ,
          text: "南宋龙泉窑青釉琮式瓷瓶",
          aLink: "/"
        },
        {id:1 ,url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg") ,text: "南宋龙泉窑青釉琮式瓷瓶",aLink: "/echDet"},
        {id:1 ,url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg") ,text: "南宋龙泉窑青釉琮式瓷瓶",aLink: "/echDet"},
        {id:1 ,url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg") ,text: "南宋龙泉窑青釉琮式瓷瓶",aLink: "/echDet"},
      ],
      srchZp:[
        {
          url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
          exhName:"南宋龙泉窑青釉琮式瓷瓶",
          aLink: "/echDet",
          p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
              "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
              "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
        },
        {
          url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
          exhName:"南宋龙泉窑青釉琮式瓷瓶",
          aLink: "/echDet",
          p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
              "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
              "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
        },
        {
          url:require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg"),
          exhName:"南宋龙泉窑青釉琮式瓷瓶",
          aLink: "/echDet",
          p: "体现了古人借此沟通天地的朴素愿望。遂宁市博物馆的这一对龙泉窑琮式瓶把玉琮的" +
              "端庄古朴的造型与龙泉瓷温润含蓄的釉色完美结合，表现出冰清玉洁、典雅高贵" +
              "的气质，浓淡相宜，古韵迭起，在国内实属罕见。国家一级文物。"
        },
      ],
      srchShow: true,
    }
  },
  methods: {
    onSearch(val) {
      Toast(val);
      this.srchShow = false
    },
    onCancel() {
      this.$router.go(-1);
    },
    close(item) {
      this.items = this.items.filter( (i) => {
        return i.id !== item.id
      })
    },
    srchClear() {
      this.items = {}
    }
  },
}
</script>

<style scoped>
.srchTitle {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.srchHis {
  display: flex;
  justify-content: center;
  flex-wrap: wrap
}
.srchTag {
  margin-right: 10px;
  margin-top: 10px;
}
.hotBox {
  flex-wrap : wrap;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}
.hotCard {
  width: 108px;
  height: 150px;
  padding: 5px;
  /*border: 1px solid rgba(0,0,0,0.22);*/
  border-radius: 7px;
  margin-top: 10px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.2) ;
  margin-right: 5px;

}
.hotCard img {
  width: 108px;
  height: 108px;
  border-radius: 7px;
}
.hotCard p{
  font-size: 12px;
  margin-top: 0;
  color: black
}
</style>