<template>
  <div style="background-color: rgba(0,0,0,0.05);">
<!--导航栏-->
    <van-nav-bar
        title="四川宋瓷博物馆"
        @click-left=""
        @click-right="search"
        :fixed=true
        :placeholder=true
    >
      <template #left>
        <van-icon name="location-o" size="30" color="black"/>
      </template>
      <template #right>
        <van-icon name="search" size="30" @click="search" color="black"/>
      </template>
    </van-nav-bar>
<!--    刷新-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
<!--    轮播图-->
    <van-swipe class="swipeBox" :autoplay="3000" >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swipeImg"/>
      </van-swipe-item>
    </van-swipe>
<!--    新闻通知栏-->
    <van-notice-bar left-icon="volume-o" :scrollable="false" color="#1989fa" background="#ecf9ff">
      <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"

      >
        <router-link to="/self" style="color: #1989fa">
          <van-swipe-item>四川宋瓷博物馆恢复开放的通告</van-swipe-item>
        </router-link>
        <router-link to="/self" style="color: #1989fa">
          <van-swipe-item>四川宋瓷博物馆国庆期间重要通知</van-swipe-item>
        </router-link>
        <router-link to="/self" style="color: #1989fa">
          <van-swipe-item>四川宋瓷博物馆五一重要公告</van-swipe-item>
        </router-link>
      </van-swipe>
    </van-notice-bar>
<!--    功能区-->
    <van-grid style="padding: -5px">
      <van-grid-item url="https://www.baidu.com/" to="/shuKw">
        <van-icon name="chat-o" size="40" />
        <p style="margin-top: 5px;height: 5px;font-size: 12px">游览须知</p>
      </van-grid-item>
      <van-grid-item icon-size="100" icon="photo-o" text="便民服务" to="/cove"/>
      <van-grid-item icon-size="100" icon="photo-o" text="博物馆全景" />
      <van-grid-item icon-size="100" icon="photo-o" text="展品全景" />
      <van-grid-item icon-size="100" icon="photo-o" text="展品查询" to="/search" />
<!--      <van-grid-item icon-size="100" icon="photo-o" text="路线推荐" />-->
      <van-grid-item icon-size="100" icon="photo-o" text="博物馆地图" />
      <van-grid-item icon-size="100" icon="photo-o" text="今日天气" to="/weather" />
      <van-grid-item icon-size="100" icon="photo-o" text="宋瓷好课" />
<!--      <van-grid-item icon-size="100" icon="photo-o" text="在线预约" />-->
    </van-grid>
<!--    展览推荐-->
    <div style="margin-top: 8px; background-color: white;padding: 0 10px">
      <div style="display: flex; justify-content:space-between; align-items: center">
        <p style="font-size: 22px;font-weight: bold">| 展览推荐</p>
        <a style="color: black" href="https://www.baidu.com/">全部 ></a>
      </div>
      <van-swipe :loop="false" :width="130"  height="200px">
        <van-swipe-item v-for="(zlSwipe,index) in zlSwipes" :key="index">
          <router-link to="/zlDet">
            <div class="zlSwipe">
              <img :src="zlSwipe.url" alt="" />
              <p>{{ zlSwipe.exhName }}</p>
            </div>
          </router-link>
        </van-swipe-item>
        <template #indicator>
          <div></div>
        </template>
      </van-swipe>
    </div>
<!--    最新新闻-->
    <div style="margin-top: 8px; background-color: white;padding: 10px">
      <div style="display: flex; justify-content:space-between; align-items: center">
        <p style="font-size: 22px;font-weight: bold">| 最新新闻</p>
        <a style="color: black" href="https://www.baidu.com/">全部 ></a>
      </div>
      <van-swipe  style="height: 200px;" vertical autoplay="2000">
        <van-swipe-item v-for="(inew ,index) in inews" :key="index" class="newsSwipe">
          <router-link to="/newsDet" style="display: flex; color: black">
          <img :src="inew.url" alt="" />
          <div class="newsText">
            <h3>{{ inew.title }}</h3>
            <p>{{ inew.text }}</p>
            <div class="newsDate" style="margin-bottom: 10px">{{ inew.date }}</div>
          </div>
          </router-link>
        </van-swipe-item>
        <template #indicator>
          <div></div>
        </template>
      </van-swipe>

    </div>
<!--    展品推荐-->
    <div style="margin-top: 8px; background-color: white;padding: 0 10px">
      <div style="display: flex; justify-content:space-between; align-items: center">
        <p style="font-size: 22px;font-weight: bold">| 展品推荐</p>
        <a style="color: black" href="https://www.baidu.com/">全部 ></a>
      </div>

      <van-swipe :loop="false" :width="150"  height="200px">
        <van-swipe-item v-for="(zpSwipe,index) in zpSwipes" :key="index">
          <router-link to="/echDet">
          <div class="zpSwipe">
            <img :src="zpSwipe.url" alt="" />
            <p>{{ zpSwipe.exhName }}</p>
          </div>
          </router-link>
        </van-swipe-item>
        <template #indicator>
          <div></div>
        </template>
      </van-swipe>
    </div>
    </van-pull-refresh>
  </div>

</template>

<script>
import {Toast} from "vant";
import DefBkGug from "@/components/DefBkGug.vue";

export default {
  name: "Home",
  components: {DefBkGug},
  data() {
    return {
      count: 0,
      isLoading: false,
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      zlSwipes: [
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")}

      ],
      zpSwipes: [
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")},
        {exhName: "青釉荷叶形盖罐", url: require("../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg")}
      ],
      inews: [
        {title: '乌克兰危机的中国立场',
          text: '一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该\n' +
              '              得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。\n' +
              '              国家不分大小、强弱、贫富一律平等，各方要共同维护国际关系基本\n' +
              '              准则，捍卫国际公平正义。国际法应当得到平等统一适用，不应采取\n' +
              '              双重标准。',
          url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),
          date: '2022/2/5'
        },
        {title: '乌克兰危机的中国立场',
          text: '一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该\n' +
              '              得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。\n' +
              '              国家不分大小、强弱、贫富一律平等，各方要共同维护国际关系基本\n' +
              '              准则，捍卫国际公平正义。国际法应当得到平等统一适用，不应采取\n' +
              '              双重标准。',
          url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),
          date: '2022/2/5'
        },
        {title: '乌克兰危机的中国立场',
          text: '一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该\n' +
              '              得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。\n' +
              '              国家不分大小、强弱、贫富一律平等，各方要共同维护国际关系基本\n' +
              '              准则，捍卫国际公平正义。国际法应当得到平等统一适用，不应采取\n' +
              '              双重标准。',
          url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),
          date: '2022/2/5'
        },{title: '乌克兰危机的中国立场',
          text: '一、尊重各国主权。公认的国际法，包括联合国宪章宗旨和原则应该\n' +
              '              得到严格遵守，各国主权、独立和领土完整都应该得到切实保障。\n' +
              '              国家不分大小、强弱、贫富一律平等，各方要共同维护国际关系基本\n' +
              '              准则，捍卫国际公平正义。国际法应当得到平等统一适用，不应采取\n' +
              '              双重标准。',
          url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg'),
          date: '2022/2/5'
        },
      ]
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    search() {
      this.$router.push("/search")
    },
  },
}
</script>

<style scoped>
.swipeBox{
  width: 100%;
  height: 200px;
  background-color: white;
}
.swipeImg{
  width: 100%;
  object-fit: cover;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.funcArea van-image{
  height: 40px;
}
.funcArea p{
  height: 0px;
}
/*展览推荐*/
.zlSwipe img{
  width: 120px;
  height: 180px;
  object-fit: cover;
  margin-right: 10px;
  /*background-color: red;*/
}
.zlSwipe p{
  font-size: 12px;
  margin-top: 5px;
  color: black;
}
/*展品推荐*/
.zpSwipe img{
  width: 135px;
  height: 150px;
  object-fit: cover;
}
.zpSwipe p{
  font-size: 12px;
  margin-top: 5px;
  color: black;
}
/*新闻*/
.newsSwipe {
  display: flex;
  /*background: red;*/
  height: 100px;
}
.newsSwipe img {
  width: 130px;
  height: 170px;
  margin-top: 5px;
  object-fit: cover;
}
.newsText {
  margin-left: 5px;

}
.newsText h3 {
  margin-top: 0px;
  font-size: 18px;
  /*height: 10px;*/
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
  width:12em;
}
.newsText p {
  margin-top: -10px;
  font-size: 12px;
  line-height: 19px;
  text-indent: 2rem;
  height: 130px;
  padding: 5px;
}
.newsDate {
  font-size: 15px;
  margin-top: -3px;
  float: right;
  margin-right: 10px;
}
</style>