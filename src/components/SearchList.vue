<template>
  <div>
    <div v-for="(srchlist,index) in srchlists" :key="index" style="padding: 0 10px">
      <van-swipe-cell>
      <router-link :to="srchlist.aLink">
        <div style="display: flex;padding: 10px 0;width: 100%" >
          <img style="width: 100px; height: 100px" :src="srchlist.url"/>
          <div style="margin-top: -5px;margin-left: 10px;font-size: 18px;color: black">
            <div>{{srchlist.exhName }}</div>
            <div class="listP">{{srchlist.p }}</div>
          </div>
        </div>
      </router-link>
      <div style="border-bottom: 1px solid rgba(0,0,0,0.22);"></div>
        <template #right >
          <van-button v-show="buttonShow === '1'" style="margin-left: 2px;width: 50px;height: 100%;font-size: 15px" square type="primary" text="收藏" />
          <van-button v-show="buttonShow === '0'"  style="margin-left: 2px;width: 50px;height: 100%;font-size: 15px" square type="danger" text="取消收藏" />
        </template>
      </van-swipe-cell>
    </div>

  </div>
</template>

<script>
export default {
  name: "SearchList",
  data() {
    return {

    }
  },
  props: {
    srchlists:Array,
    buttonShow:String
  }
}
</script>

<style scoped>
.listP {
  font-size: 12px;
  color: rgba(0,0,0,0.56);
  line-height: 18px;
  overflow: hidden;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-top: 10px;
}
</style>