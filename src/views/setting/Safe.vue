<template>
  <div>
    <xx-top-bar title="安全设置" share-x="x"></xx-top-bar>
    <GnList :gns="gns"></GnList>
  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";
import GnList from "@/components/GnList.vue";

export default {
  name: "Safe",
  components: {GnList, XxTopBar},
  data() {
    return {
      gns: [
        {icon: 'search',name: '更换手机号',tolink: '/setting/selfInfo'},
        {icon: 'search',name: '账号注销',tolink: '/setting/safe'},

      ],
    }
  },
}
</script>

<style scoped>

</style>