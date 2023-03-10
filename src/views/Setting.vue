<template>
  <div>
    <xx-top-bar title="设置" share-x="x"></xx-top-bar>
    <GnList :gns="gns"></GnList>
<!--    功能-->
    <div class="selfGn">
      <div class="selfGn-li" @click="clearCache">
        <div style="margin-left: 10px;font-size: 20px">
          <van-icon name="search" size="20"/>
          <span style="margin-left: 10px">
                  清除缓存
                </span>
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div style="background-color: white">
        <div class="gnFgx"></div>
      </div>
<!--        -->
      <div class="selfGn-li" @click="checkUpdate">
        <div style="margin-left: 10px;font-size: 20px">
          <van-icon name="search" size="20"/>
          <span style="margin-left: 10px">
                  检查更新
                </span>
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div style="background-color: white">
        <div class="gnFgx"></div>
      </div>
    </div>
<!--    -->
    <div class="outBox">
      <van-button class="signOut" color="red" size="large">
        退出登录
      </van-button>
    </div>
    </div>

</template>

<script>
import GnList from "@/components/GnList.vue";
import XxTopBar from "@/components/XxTopBar.vue";

export default {
  name: "Setting",
  components: {XxTopBar, GnList},
  data() {
    return {
      gns: [
        {icon: 'search',name: '个人资料',tolink: '/setting/selfInfo'},
        {icon: 'search',name: '安全管理',tolink: '/setting/safe'},
        // {icon: 'search',name: '隐私设置',tolink: '/setting/papa'},
      ],
    }
  },
  methods: {
    clearCache() {
      console.log('clearCache')
    },
    checkUpdate() {
      console.log('CheckUpdate')
    },

  }
}
</script>

<style scoped>
.outBox{
  position: fixed;
  bottom: 40px;
  width: 100%;
}
.signOut {
  width: 80%;
  margin-left: 10%;
  font-size: 20px;
}
.selfGn {
  width: 100%;
  margin: 0 auto ;
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
a:active .selfGn-li{
  color: black;
  background-color: rgba(0,0,0,0.05);
}
</style>