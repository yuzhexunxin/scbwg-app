<template>
  <div class="bkImg">
    <xx-top-bar :title="city" share-x="setting"></xx-top-bar>
<!--    <img style="z-index: 5;width: 100%;height: 100vh;object-fit: cover;" src="../assets/img/背景1.jpg">-->
    <div class="wthTop">
      <div class="wthOther">
        {{ tqDate.date }}
        {{ tqDate.update_time }}
        {{ tqDate.week }}
      </div>
      <div  class="wthNum">
        <span>{{ tqDate.tem }}<span style="font-size: 40px;font-weight: bold;top: -45px;left: 10px;position: relative">°C</span></span>
        <span style="font-size: 25px;margin-left: 20px">
          {{ tqDate.wea }}
        </span>
      </div>
      <div  class="wthOther">白天温度：{{ tqDate.tem_day }}°C | 夜间温度：{{ tqDate.tem_night }}°C </div>
    </div>
<!--    <button @click="xx">按钮</button>-->
<!--    数据卡片-->
<!--    边距-->
    <div style="padding: 0 10px; color: white">
      <div class="wthData">
        <div class="wthDataLine">
          <div class="wthDataIt">
            <van-icon size="40" name="guide-o" />
            <div class="wthDataText">
              <div class="wthDataItTop">体感温度</div>
              <div>{{ parseInt(tqDate.tem) - 0.05*parseInt(tqDate.humidity)}}°C</div>
            </div>
          </div>
  <!--        分割线-->
          <div class="fgx"></div>
  <!--        分割线-->
          <div class="wthDataIt">
            <van-icon size="40" name="guide-o" />
            <div class="wthDataText">
              <div class="wthDataItTop">空气质量</div>
              <div>{{ tqDate.air }}</div>
            </div>
          </div>
        </div>

        <div class="wthDataLine">
          <div class="wthDataIt">
            <van-icon size="40" name="guide-o" />
            <div class="wthDataText">
              <div class="wthDataItTop">气压</div>
              <div>{{ tqDate.pressure }}hPa</div>
            </div>
          </div>
          <!--        分割线-->
          <div class="fgx"></div>
          <!--        分割线-->
          <div class="wthDataIt">
            <van-icon size="40" name="guide-o" />
            <div class="wthDataText">
              <div class="wthDataItTop">湿度</div>
              <div>{{ tqDate.humidity }}</div>
            </div>
          </div>
        </div>

        <div class="wthDataLine">
          <div class="wthDataIt">
            <van-icon size="40" name="guide-o" />
            <div class="wthDataText">
              <div class="wthDataItTop">风向风力</div>
              <div>{{ tqDate.win }} {{ tqDate.win_speed }}</div>
            </div>
          </div>
          <!--        分割线-->
          <div class="fgx"></div>
          <!--        分割线-->
          <div class="wthDataIt">
            <van-icon size="40" name="guide-o" />
            <div class="wthDataText">
              <div class="wthDataItTop">风速</div>
              <div>{{ tqDate.win_meter }}</div>
            </div>
          </div>
        </div>

      </div>
  <!--    未来天气-->
      <div class="wlCard">
        <div style="display: flex;padding: 10px;font-size: 15px;margin: 5px " v-for="(tq,index) in tqs" :key="index">
          <div style="width: 50%;display: flex;justify-content: space-between;align-items: center;">
            <van-icon size="25" :name="tq.tqIcon" />
            <span>{{ tq.time }}</span>
            <span>{{ tq.tq }}</span>
          </div>
          <div style="width: 30%;display: flex;align-items: center;justify-content: space-between;padding: 0 30px">
            <van-icon size="25" :name="tq.kqIcon" />
            <span style="margin-right: -30px">{{ tq.wd }}</span>
          </div>
        </div>
        <div style="display: flex;justify-content: center;margin: 10px 0">
          <van-button type="primary" size="large" style="border-radius: 25px;width: 90%">查看近7天天气</van-button>
        </div>
    </div>
    </div>
  </div>

</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";

export default {
  name: "Weather",
  components: {XxTopBar},
  data() {
    return {
      tqDate: '',
      city: '天府新区',
      tqs: [
        {
          tqIcon: 'like-o',
          time: '今天',
          tq: '多云转小雨',
          kqIcon: 'like-o',
          wd: '23°C/25°C'
        },
        {
          tqIcon: 'like-o',
          time: '明天',
          tq: '多云转小雨',
          kqIcon: 'like-o',
          wd: '23°C/25°C'
        },
        {
          tqIcon: 'like-o',
          time: '后天',
          tq: '多云转小雨',
          kqIcon: 'like-o',
          wd: '23°C/25°C'
        }
      ]
    }
  },
  methods: {
    xx() {
      // axios回调函数中的this已经改变，无法访问到data中数据
      // 可以var that = this； 回调函数中用that访问data中数据
      var that = this;
      this.$axios({
        url: "https://www.yiketianqi.com/free/week?unescape=1&appid=92919846&appsecret=PT0J1oiF&city=" + this.cityX,
        methods: "get"
      }).then(
          function (response) {
            that.tqDate = response.data;
          },
      );
      console.log(typeof this.tqDate)
    }
  },
  mounted() {
    this.$axios({
      url: "https://www.yiketianqi.com/free/day?appid=92919846&appsecret=PT0J1oiF&unescape=1&city=" + this.cityX,
      methods: "get"
    }).then( response => {
      this.tqDate = response.data
      console.log(this.tqDate)
    })
  },
  watch: {
    city(){
      this.$axios({
        url: "https://www.yiketianqi.com/free/day?appid=92919846&appsecret=PT0J1oiF&unescape=1&city=" + this.cityX,
        methods: "get"
      }).then( response => {
        this.tqDate = response.data
        console.log(this.tqDate)
      })
    }
  },
  computed: {
    cityX() {
      // let x = this.city.replace("区","")
      // x = this.city.replace("县","")
      // x = this.city.replace("市","")
      let x = this.city.substring(0,this.city.length-1)
      return x
    }
  }
}
</script>

<style scoped>
.bkImg {
  background-image: url('../assets/img/背景2.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.wthTop {
  padding: 0 10px;
  color: white;
  margin-bottom: 20px;
}
.wthOther {
  font-size: 15px;
  margin-top: 20px;
}
.wthNum {
  font-size: 100px;
  margin-top: 70px;
}

.fgx {
  width: 2px;
  background-color: rgba(238,238,238,0.58);
  height: 80%;
  margin: 5px 0;
}
.wthData {
  /*background-color: white;*/
  padding: 0;
  border-radius: 15px;
  position: relative;
  margin-top: 80px;
}
.wthDataLine {
  display: flex;
  justify-content: space-between;
  height: 70px;
}
.wthDataIt {
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-left: 20px;
}
.wthDataItTop {
  font-weight: bold;
}
.wthDataText {
  margin-left: 10px;
}

.wlCard {
  /*background-color: white;*/
  position: relative;
  border-radius: 15px;
  width: calc(100vw - 20px);
  padding: 10px 0;
  margin-top: 10px;
}
</style>