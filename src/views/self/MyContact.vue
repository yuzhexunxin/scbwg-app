<template>
  <div>
    <xx-top-bar title="联系我们" share-x="x"></xx-top-bar>
    <div class="selfGn">
<!--      -->
      <div class="selfGn-li">
        <div style="margin-left: 10px;font-size: 20px">
          <van-icon  name="search" size="20"/>
          <span style="margin-left: 10px">
            客服微信
          </span>
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div style="background-color: white">
        <div class="gnFgx"></div>
      </div>
<!---->
      <div class="selfGn-li">
        <div style="margin-left: 10px;font-size: 20px">
          <van-icon  name="search" size="20"/>
          <span style="margin-left: 10px">
            电子邮件
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
  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";
import GnList from "@/components/GnList.vue";

export default {
  name: "MyContact",
  components: {GnList, XxTopBar},
  data() {
    return {
      gns: [
        {icon: 'search',name: '客服微信',tolink: ''},
        {icon: 'search',name: '电子邮件',tolink: ''},
      ],
    }
  },
}
</script>

<style scoped>
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
a:active .selfGn-li{
  color: black;
  background-color: rgba(0,0,0,0.05);
}
</style>