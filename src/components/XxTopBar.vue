<template>
  <div>
<!--    头部-->
    <van-nav-bar
        :title="title"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        :fixed="true"
        :placeholder="true"
    >
<!--      可变图标-->
      <template  #right>
        <van-icon v-if="shareX === 'share'" name="share-o" size="20" />
        <van-icon v-if="shareX === 'setting'" name="setting-o" size="20" />
      </template>
    </van-nav-bar>

<!--    分享页面-->
    <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="xShare"
    />

<!--    设置页面-->
    <van-popup v-model="showTop" position="top" :style="{height:'10%'}" >
      <div style="display: flex;justify-content: space-between;width: 60%;margin: 10px auto 0">
        <div style="text-align: center" @click="weatherShare">
          <van-icon name="share-o" size="40" /> <div>分享天气</div>
        </div>
        <div style="text-align: center" @click="weatherDx">
          <van-icon name="share-o" size="40" /> <div>设置短信</div>
        </div>
        <div style="text-align: center" @click="changeCity">
          <van-icon name="share-o" size="40" /> <div>更改地区</div>
        </div>
      </div>
    </van-popup>
<!--    设置功能：短信发送-->
    <van-popup round v-model="showDx" position="bottom" :style="{height:'auto'}" >
<!--      日历-->
      <van-field
            readonly
            clickable
            name="calendar"
            :value="valueDate"
            label="日历"
            placeholder="点击选择日期"
            @click="showDate = true"
            style="margin-top: 5px"
        />
      <van-calendar v-model="showDate" @confirm="changeDate" />
<!--      时间-->
      <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="valueTime"
            label="时间"
            placeholder="点击选择时间"
            @click="showTime = true"
        />
      <van-popup v-model="showTime" position="bottom">
        <van-datetime-picker
            type="time"
            @confirm="changeTime"
            @cancel="showTime = false"
        />
      </van-popup>
<!--      地址-->
      <van-field
          readonly
          clickable
          name="area"
          :value="valueCity"
          label="地区"
          disabled
      />
<!--      验证区域-->
      <Verify :date="inputData"/>
<!--      设置成功-->
    </van-popup>
<!--    设置功能：城市选择-->
    <van-popup round v-model="showCity" position="bottom" :style="{height:'310px'}" >
      <van-area value="220700" title="选择城市" :area-list="areaList" @confirm="ctConfirm" @cancel=" showCity = false"/>
    </van-popup>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import * as events from "events";
import {Toast} from "vant";
import Verify from "@/components/Verify.vue";
export default {
  name: "XxTopBar",
  components: {Verify,},
  computed: {
    events() {
      return events
    },
    inputData() {//给input组件传值
      return {
        date: this.valueDate,
        time: this.valueTime,
        city: this.valueCity,
      }
    }
  },
  data() {
    return {
      cityDate: '',
      areaList,
      showShare: false,
      showTop: false,
      showCity: false,
      showDx: false,
      showTime: false,
      showDate: false,
      valueTime: '',
      valueDate: '',
      valueCity: '四川/成都/天府新区',
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
    };
  },
  props: {
    title: String,
    shareX: {
      type: String,
      default: 'share'
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      if(this.shareX === 'share'){
        this.showShare = true
      }else if(this.shareX === 'setting'){
        this.showTop = true
      }
    },
    xShare(event){
      console.log(event)
    },
    weatherShare() {
      this.showShare = true
      this.showTop = false
    },
    weatherDx() {
      this.showDx = true
      this.showTop = false
    },
    changeCity() {
      this.showCity = true
      this.showTop = false
    },
    ctConfirm(value, index) {
      console.log(value[2].name, index)
      this.$parent.city = value[2].name
      this.showCity = false
      Toast.success('更改成功')
      console.log(index)
    },
    changeTime(time) {
      this.valueTime = time
      console.log(time)
      this.showTime = false
    },
    changeDate(date) {
      this.valueDate = `${date.getMonth() + 1}/${date.getDate()}`;
      console.log(this.valueDate)
      this.showDate = false;
    },
  },

}
</script>

<style scoped>

</style>