<template>
  <div style="height: 100vh;overflow-y: scroll;background-color: rgba(0,0,0,0.02)" @scroll="scrollGet($event)">
    <Header title="个人" icon="setting-o"  url="setting" acolor="white"/>

    <div class="bkColor">
    <div class="bgImg">

    </div>
      <!--    个人信息-->
      <div class="selfBox">
        <img class="selfHeadImg" :src="user.url">
        <div class="selfName">{{user.nickname}}</div>
        <div class="selfTag">
          <span><van-icon name="location-o" />：{{user.ip}}</span>
          <span v-if="user.sex === 1"><van-icon name="../assets/img/背景2.jpg" /></span>
          <span v-if="user.sex === 0"><van-icon name="../assets/img/背景2.jpg" /></span>
          <span><van-icon name="phone-o" />：{{user.phone}}</span>
        </div>
        <div class="selfTag">
          <van-icon name="envelop-o" />：{{user.email}}
        </div>
        <p>欢迎来到四川宋瓷博物馆~</p>
      </div>
<!--    功能区-->

      <!--      一 -->
      <GnList :gns="gns1"></GnList>
      <!--     二 -->
      <GnList :gns="gns2"></GnList>
      <!--     三 -->
<!--      <GnList :gns="gns3"></GnList>-->
      <div class="selfGn">
        <router-link to="/self/myAbout">
        <div class="selfGn-li">
          <div style="margin-left: 10px;font-size: 20px">
            <van-icon name="search" size="20"/>
            <span style="margin-left: 10px">
              关于我们
            </span>
          </div>
          <div>
            <van-icon name="arrow" />
          </div>
        </div>
        <div style="background-color: white">
          <div class="gnFgx"></div>
        </div>
        </router-link>


        <div @click="shareApp" class="selfGn-li">
          <div style="margin-left: 10px;font-size: 20px">
            <van-icon name="search" size="20"/>
            <span style="margin-left: 10px">
                  分享此App
                </span>
          </div>
          <div>
            <van-icon name="arrow" />
          </div>
        </div>
        <div style="background-color: white">
          <div class="gnFgx"></div>
        </div>

        <router-link to="/self/myContact">
          <div class="selfGn-li" >
            <div style="margin-left: 10px;font-size: 20px">
              <van-icon name="search" size="20"/>
              <span style="margin-left: 10px">
                    联系我们
                  </span>
            </div>
            <div>
              <van-icon name="arrow" />
            </div>
          </div>
          <div style="background-color: white">
            <div class="gnFgx"></div>
          </div>
        </router-link>
      </div>
    </div>
    <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="xShare"
    />
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import GnList from "@/components/GnList.vue";

export default {
  name: "Self",
  data() {
    return {
      showShare: false,
      user: {
        url: require('../assets/img/头像.jpg'),
        nickname: '悍匪',
        ip: '四川',
        phone: '111512121',
        email: '1561563@gmilc.com',
        sex: 1,
      },
      gns1: [
        {icon: 'search',name: '我的预约',tolink: '/self/myRez'},
        {icon: 'search',name: '我的收藏',tolink: '/self/myCollect'},
        {icon: 'search',name: '我的评论',tolink: '/self/myCmnt'},
        {icon: 'search',name: '常用联系人',tolink: '/self/myCt'},
      ],
      gns2: [
        {icon: 'search',name: '消息通知',tolink: '/self/myInfo'},
        {icon: 'search',name: '意见反馈',tolink: '/self/myIdea'},
      ],
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    }
  },
  components: {GnList, Header, Footer},
  methods: {
    scrollGet(e){
      console.log(e.target.scrollTop)
      console.log(e.target.clientHeight)
      console.log(e.target.scrollHeight)
      console.log("----------------滑动------------------")
    },
    shareApp() {
      this.showShare = true
    },
    xShare(event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>
.bgImg{
  width: 100%;
  height: 280px;
  background-image: url("../assets/img/背景2.jpg");
  background-size: cover;
}
.bkColor {
  /*margin-top: 50px;*/
  width: 100%;
  /*height: 1500px;*/
  background-color: rgba(0,0,0,0.05);
}
.selfBox {
  width: calc(100vw - 20px);
  /*height: 150px;*/
  background-color: white;
  border-radius: 15px;
  /*border: 0.2px solid rgba(0,0,0,0.3);*/
  background-image: url("../assets/img/名片3.jpg");
  background-size: cover;
  text-align: center;
  margin: -50px auto 0;
  padding-bottom: 5px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.25) ;
}
.selfHeadImg{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -50px;
}
.selfName {
  font-size: 20px;
  font-weight: bold;
}
.selfTag {
  font-size: 15px;
  margin-top: 5px;
}
.selfTag span {
  margin-right: 20px;
}
.selfBox p {
  font-size: 15px;
  color: rgba(0,0,0,0.56);
  margin-top: 10px;
}



.selfGn {
  width: 100%;
  margin: 20px auto 0;
  overflow: hidden;
}
.selfGn-li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  color: black;
}
.gnFgx {
  width:90%;
  margin: -1px auto;
  border-bottom: 2px solid rgba(0,0,0,0.05);
  background-color: white;
}
a:hover .selfGn-li{
  color: black;
  background-color: rgba(0,0,0,0.05);
}
</style>