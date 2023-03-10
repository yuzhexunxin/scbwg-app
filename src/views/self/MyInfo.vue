<template>
  <div style="height: 100vh;background-color: rgba(0,0,0,0.03);padding: 0 10px">
    <xx-top-bar title="消息通知" :share-x="false"></xx-top-bar>
    <div v-for="(info,index) in infos" :key="index">
      <div class="infoDate">{{ info.date }}</div>
      <div style="padding: 10px;background-color: white">
        <div style="font-size: 18px;font-weight: bold">{{ info.title }}</div>
        <div class="infoP">
          {{ info.text }}
        </div>
        <div style="margin: 10px 0 5px;border-bottom: 2px solid rgba(0,0,0,0.03)"></div>
        <router-link to="/">
          <div class="infoBut">
            <div>查看详情</div>
            <van-icon name="arrow" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";

export default {
  name: "MyInfo",
  components: {XxTopBar},
  data() {
    return {
      infos: [
        {
          date: '2020-02-02',
          title: '四川宋瓷博物馆2023年“元旦”假期开放的通知',
          text: '四川宋瓷博物馆2023年“元旦”假期开放的通知四川宋瓷博物馆20232023年“元旦”假期开放的通知假期开放的通知'
        },
        {
          date: '2020-02-02',
          title: '四川宋瓷博物馆2023年“元旦”假期开放的通知',
          text: '四川宋瓷博物馆2023年“元旦”假期开放的通知四川宋瓷博物馆20232023年“元旦”假期开放的通知假期开放的通知'
        },
        {
          date: '2020-02-02',
          title: '四川宋瓷博物馆2023年“元旦”假期开放的通知',
          text: '四川宋瓷博物馆2023年“元旦”假期开放的通知四川宋瓷博物馆20232023年“元旦”假期开放的通知假期开放的通知'
        }
      ]
    }
  }
}
</script>

<style scoped>
.infoDate {
  text-align: center;
  font-size: 15px;
  color: rgba(0,0,0,0.56);
  margin: 20px 0;
}
.infoP {
  text-indent: 2rem;
  font-size: 15px;
  overflow: hidden;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 10px;
}
.infoBut {
  display: flex;
  justify-content: space-between;
  color: #1989fa;
  padding: 5px 5px 0;
}
</style>