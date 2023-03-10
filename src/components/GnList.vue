<template>
  <div>
    <div class="selfGn">
      <div v-for="(gn,index) in gns" :key="index">
        <router-link :to="gn.tolink" exact >
          <div class="selfGn-li">
            <div style="margin-left: 10px;font-size: 20px">
              <van-icon v-if="gn.icon" :name="gn.icon" size="20"/>
              <span style="margin-left: 10px">
                  {{ gn.name }}
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
  </div>
</template>

<script>
export default {
  name: "GnList",

  props: {
    gns:Array
  }
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