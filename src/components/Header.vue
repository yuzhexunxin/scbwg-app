<template>
  <div style="position: relative;overflow: hidden">
    <div class="top">
      <div class="topBox">
        <span :style="{color: acolor}">{{title}}</span>
        <van-icon :name="icon" size="30" @click="search" :color="acolor"/>
      </div>
    </div>
    <div v-show="showZw" style="width: 100vw;height: 57px;background-color: white"></div>
  </div>
</template>

<script>
import search from "@/views/Search.vue";

export default {
  name: "Header",
  data() {
    return {
    }
  },
  props: {
    title:String,
    icon:String,
    url:String,
    acolor:String,
    showZw:{
      type:Boolean,
      default: false
    }
  },
  methods: {
    search() {
      this.$router.push("/"+this.url)
    }
  }
}
</script>

<style scoped>
.top {
  position:fixed;
  width: 100%;
  top: 0;
}
.topBox{
  font-size: 28px;
  font-weight: bold;
  padding: 10px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

}
</style>