<template>
  <div>
    <Header title="全景" icon="search" url="search" acolor="black"/>
    <div style="width: 100%;height: 57px;">
    </div>
<!--    头部大图-->
    vr入口

    <div class="vrImg">
      <router-link to="/">
      <img src="../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg">
      </router-link>
    </div>
<!--    导航-->
    <van-tabs v-model="active" animated>
      <van-tab v-for="(zpTag,index1) in zpTags" :title="zpTag.name" :key="index1">
        <div style="width: 100vw;min-height: 70vh;background-color: rgba(0,0,0,0.1)">
          <div class="zpBox">
            <div class="zpIt" v-for="(li,index2) in zpTag.list" :key="index2">
              <router-link to="/echDet">
              <img :src="li.url">
              <div>{{ li.name }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import CardDemo from "@/components/CardDemo.vue";

export default {
  name: "Vr",
  components: {CardDemo, Footer,Header},
  data() {
    return {
      active: '',
      cqs: [
        {name: '南宋龙泉窑青釉琮式瓷瓶', url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg')},
        {name: '南宋龙泉窑青釉琮式瓷瓶', url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg')},
      ],
      tqs: [
        {name: '南宋龙泉窑青釉琮式瓷瓶', url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg')},
        {name: '南宋龙泉窑青釉琮式瓷瓶', url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg')},
        {name: '南宋龙泉窑青釉琮式瓷瓶', url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg')},
        {name: '南宋龙泉窑青釉琮式瓷瓶', url:require('../assets/img/南宋龙泉窑青釉琮式瓷瓶.jpg')},
      ],
    }
  },
  computed: {
    zpTags(){
      return [
        {
          name: '全部',
          list: this.cqs.concat(this.tqs)
        },
        {
          name: '瓷器',
          list: this.cqs
        },
        {
          name: '陶器',
          list: this.tqs
        }
      ]
    }
  }
}
</script>

<style scoped>
.vrImg{
  height: 150px;
  padding: 0 10px;
  overflow: hidden;
}
.vrImg img{
  width: 100%;
  height: 150px;
  border-radius: 15px;
  object-fit: cover;
}

.zpBox {
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
}


.zpIt {
  background-color: white;
  width: calc((100vw - 70px)/2);
  padding: 10px;
  margin: 10px 5px 0;
  border-radius: 15px;
}
.zpIt img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;

}
.zpIt div {
  font-size: 15px;
  margin-top: 5px;
  color: black;
}
</style>