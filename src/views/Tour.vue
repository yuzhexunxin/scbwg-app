<template>
  <div style="overflow: scroll">
<!--    touchstart touchend-->
    <Header title="导览" icon="search" url="search" acolor="black" :show-zw="true"/>
<!--    导航-->
    <van-tabbar v-model="active" :fixed="false" :border="false">
      <van-tabbar-item @click="changeIcon('showZl')" icon="home-o">展览</van-tabbar-item>
      <van-tabbar-item @click="changeIcon('showWsj')" icon="search">卫生间</van-tabbar-item>
      <van-tabbar-item @click="changeIcon('showMyj')" icon="friends-o">母婴间</van-tabbar-item>
      <van-tabbar-item @click="changeIcon('showAqtd')" icon="setting-o">安全通道</van-tabbar-item>
      <van-tabbar-item @click="changeIcon('showLt')" icon="setting-o">楼梯</van-tabbar-item>
    </van-tabbar>
<!--    地图-->
    <div @touchstart="ydStart"  class="dlBody" >
      <div @touchmove="move">
<!--          一楼-->
        <div v-if="showF.show1F"  ref="imgDiv" class="dlBox" >
          <div style="width: 100%;height: 100%;">
            <img class="dlImg" src="../assets/img/1F.png"  />

            <!--          一楼-展览-->
            <div v-show="showIcon.showZl" style="width: 100%;height: 100%;">
              <div @click="showZl(zlCardLists.zl1FCard1)" class="F1ZlCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl1FCard2)" class="F1ZlCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl1FCard3)" class="F1ZlCard3">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl1FCard4)" class="F1ZlCard4">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl1FCard5)" class="F1ZlCard5">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl1FCard6)" class="F1ZlCard6">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl1FCard1)" class="F1ZlCard7">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl1FCard8)" class="F1ZlCard8">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <!--          一楼-卫生间-->
            <div v-show="showIcon.showWsj" style="width: 100%;height: 100%;">
              <div @click="" class="F1WsjCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/1F.png">
              </div>
            </div>
            <!--          一楼-母婴间-->
            <div v-show="showIcon.showMyj" style="width: 100%;height: 100%;">
              <div @click="" class="F1MyjCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <!--          一楼-安全通道-->
            <div v-show="showIcon.showAqtd" style="width: 100%;height: 100%;">
              <div @click="" class="F1AqtdCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F1AqtdCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F1AqtdCard3">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
<!--            楼梯-->
            <div v-show="showIcon.showLt" style="width: 100%;height: 100%;">
              <div @click="" class="F1LtCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F1LtCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>

            </div>
          </div>
        </div>
<!--          二楼-->
        <div v-if="showF.show2F" ref="imgDiv" class="dlBox" >
          <div style="width: 100%;height: 100%;">
            <img class="dlImg" src="../assets/img/2F.png"  />
            <!--          二楼-展览-->
            <div v-show="showIcon.showZl" style="width: 100%;height: 100%;">
              <div @click="showZl(zlCardLists.zl2FCard1)" class="F2ZlCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl2FCard2)" class="F2ZlCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl2FCard3)" class="F2ZlCard3">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl2FCard4)" class="F2ZlCard4">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl2FCard5)" class="F2ZlCard5">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl2FCard6)" class="F2ZlCard6">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <!--          二楼-卫生间-->
            <div v-show="showIcon.showWsj" style="width: 100%;height: 100%;">
              <div @click="" class="F2WsjCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>

            </div>
            <!--          二楼-母婴间-->
            <div v-show="showIcon.showMyj" style="width: 100%;height: 100%;">
              <div @click="" class="F2MyjCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <!--          二楼-安全通道-->
            <div v-show="showIcon.showAqtd" style="width: 100%;height: 100%;">
              <div @click="" class="F2AqtdCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F2AqtdCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F2AqtdCard3">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <div v-show="showIcon.showLt" style="width: 100%;height: 100%;">
              <div @click="" class="F2LtCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F2LtCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
          </div>
        </div>
<!--          三楼-->
        <div v-if="showF.show3F" ref="imgDiv" class="dlBox" >
          <div style="width: 100%;height: 100%;">
            <img class="dlImg" src="../assets/img/3F.png"  />

            <!--          三楼-展览-->
            <div v-show="showIcon.showZl" style="width: 100%;height: 100%;">
              <div @click="showZl(zlCardLists.zl3FCard1)" class="F3ZlCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl3FCard2)" class="F3ZlCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl3FCard3)" class="F3ZlCard3">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl3FCard4)" class="F3ZlCard4">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl3FCard5)" class="F3ZlCard5">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="showZl(zlCardLists.zl3FCard6)" class="F3ZlCard6">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <!--          三楼-卫生间-->
            <div v-show="showIcon.showWsj" style="width: 100%;height: 100%;">
              <div @click="" class="F3WsjCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <!--          三楼-母婴间-->
            <div v-show="showIcon.showMyj" style="width: 100%;height: 100%;">
              <div @click="" class="F3MyjCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <!--          三楼-安全通道-->
            <div v-show="showIcon.showAqtd" style="width: 100%;height: 100%;">
              <div @click="" class="F3AqtdCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F3AqtdCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F3AqtdCard3">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
            </div>
            <!--          三楼-楼梯  -->
            <div v-show="showIcon.showLt" style="width: 100%;height: 100%;">
              <div @click="" class="F3LtCard1">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>
              <div @click="" class="F3LtCard2">
                <img style="width: 100%;height: 100%;object-fit: cover" src="../assets/img/2F.png">
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!--      左上角小地图显示-->
    <div style="position: absolute;top: 130px;left: 10px">
      <div v-show="!showF.show1F" style="width: 80px;height: 40px;background-color: #1989fa"></div>
      <div>
        <img v-show="showF.show1F" style="width: 80px;height: 40px;object-fit: contain" src="../assets/img/1F.png">
      </div>
      <div v-show="!showF.show2F" style="width: 80px;height: 40px;background-color: #1989fa"></div>
      <div>
        <img v-show="showF.show2F" style="width: 80px;height: 40px;object-fit: contain" src="../assets/img/2F.png">
      </div>
      <div v-show="!showF.show3F" style="width: 80px;height: 40px;background-color: #1989fa"></div>
      <div>
        <img v-show="showF.show3F" style="width: 80px;height: 40px;object-fit: contain" src="../assets/img/3F.png">
      </div>

    </div>

    <!--      展览显示-->
    <div v-show="showZlCard" style="position: absolute;top: 115px;padding: 10px">
      <ZlCardImg :zl-card-ob="zlCardOb"></ZlCardImg>
    </div>

    <!--      楼层切换-->
    <div style="display: flex;
          justify-content: space-between;
          padding: 0 40px;
          position: relative;
          bottom: 100px;
          ">
      <van-button @click="changeF('show1F')" style="width: 100px" type="info">1F</van-button>
      <van-button @click="changeF('show2F')" style="width: 100px" type="info">2F</van-button>
      <van-button @click="changeF('show3F')" style="width: 100px" type="info">3F</van-button>
    </div>

    <Footer :zw="false"></Footer>
  </div>

</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import ZlCardImg from "@/components/ZlCardImg.vue";

export default{
  data() {
    return {
      active: 0,
      startL: 0,
      endL: 0,
      jsq: 0,
      endA: [],
      endB: [],
      status: 0,
      zoom: '',
      permint: false,
      end1: 0,
      end2: 0,
      w: 0,
      h: 0,
      left: 0,
      top: 0,
      startX: 0,
      startY: 0,
      speed: 10,//设置移动速度
      showF: {
        show1F: true,
        show2F: false,
        show3F: false,
      },
      showIcon: {
        showZl:true,
        showWsj:false,
        showMyj:false,
        showAqtd:false,
        showLt:false
      },
      showLast: 'showZl',
      showLastF: 'show1F',
      showZlCard: false,
      zlCardOb: {
        title: '古代中国（6小时版）',
        seat: '地下一层展厅',
        text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
        imgUrl: require('../assets/img/背景1.jpg'),
      },
      zlCardLists: {
        zl1FCard1: {
          title: 'zl1FCard1（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl1FCard2: {
          title: 'zl1FCard2（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl1FCard3: {
          title: 'zl1FCard3（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl1FCard4: {
          title: 'zl1FCard4（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl1FCard5: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl1FCard6: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl1FCard7: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl1FCard8: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl2FCard1: {
          title: 'zl2FCard1（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl2FCard2: {
          title: 'zl2FCard2（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl2FCard3: {
          title: 'zl2FCard3（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl2FCard4: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl2FCard5: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl2FCard6: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl3FCard1: {
          title: 'zl3FCard1（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl3FCard2: {
          title: 'zl3FCard21（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl3FCard3: {
          title: 'zl3FCard3（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl3FCard4: {
          title: 'zl3FCard4（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl3FCard5: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
        zl3FCard6: {
          title: '古代中国（6小时版）',
          seat: '地下一层展厅',
          text: '阿斯顿卡拉斯科淡蓝色的就难道就那时的那就看到你的就看上看到那看到看上看到那看到看上看到那看到',
          imgUrl: require('../assets/img/背景1.jpg'),
        },
      }
    }
  },
  components: {ZlCardImg, Footer,Header},
  methods:{
    ydStart(e) {
      this.startX = e.targetTouches[0].pageX
      this.startY = e.targetTouches[0].pageY
      console.log('this.startX',this.startX,'this.startY',this.startY)
    },
    changeIcon(index) {
      this.showIcon[this.showLast] = false
      this.showIcon[index] = true
      this.showLast = index
    },
    changeF(index) {
      this.showF[this.showLastF] = false
      this.showF[index] = true
      this.showLastF = index
      console.log(this.showF[index])
    },
    move(e) {
      // 初始化
      this.w = parseInt(this.$refs.imgDiv.style.width) || 400 ;
      this.h = parseInt(this.$refs.imgDiv.style.height) || 700 ;
      this.left = parseInt(this.$refs.imgDiv.style.marginLeft) || 0 ;
      this.top = parseInt(this.$refs.imgDiv.style.marginTop) || 0 ;
      e.cancelBubble = true
      e.preventDefault();
      // 单指拖动
      if (e.targetTouches.length <= 1 ) {
        // 左滑
        if(this.startX - e.targetTouches[0].pageX > 0) {
          this.left -= this.speed
          // 设置左滑边界
          if(this.left+this.w/2 < -150) {
            return
          }
          this.$refs.imgDiv.style.marginLeft = this.left + "px"
          this.$refs.imgDiv.style.transition = "all 1s"
          this.startX = e.targetTouches[0].pageX
          console.log('左滑')
        }else if(this.startX - e.targetTouches[0].pageX < 0){//右滑
          this.left += this.speed//设置移动速度
          // 设置右滑边界
          if(this.left > 150) {
            return
          }
          this.$refs.imgDiv.style.marginLeft = this.left + "px"
          this.$refs.imgDiv.style.transition = "all 1s"
          this.startX = e.targetTouches[0].pageX
          console.log('右滑')
        }
        // 上滑
        if(this.startY - e.targetTouches[0].pageY > 0) {
          this.top -= this.speed
          // 设置上滑边界
          if(this.top+this.h/6/0.75 < -150) {
            return
          }
          this.$refs.imgDiv.style.marginTop = this.top + "px"
          this.$refs.imgDiv.style.transition = "all 1s"
          this.startY = e.targetTouches[0].pageY
          console.log('上滑')
        }else if(this.startY - e.targetTouches[0].pageY < 0){//下滑
          this.top += this.speed
          // 设置下滑边界
          if(this.top > 250) {
            return
          }
          this.$refs.imgDiv.style.marginTop = this.top + "px"
          this.$refs.imgDiv.style.transition = "all 1s"
          this.startY = e.targetTouches[0].pageY
          console.log('下滑')

        }

      // 双指放大
      }else{
        this.jsq += 1
        if(this.jsq === 1) {
          this.endA = [e.targetTouches[0],e.targetTouches[1]]
          // console.log("计时器",this.jsq,this.endA)
        }else if(this.jsq === 2) {
          this.endB = [e.targetTouches[0],e.targetTouches[1]]
          // console.log("计时器",this.jsq,this.endB)
        }

        if( this.jsq === 2){
          this.end1 = Math.sqrt(Math.pow((this.endA[0].pageX - this.endA[1].pageX),2) + Math.pow((this.endA[0].pageY - this.endA[1].pageY),2))
          this.end2 = Math.sqrt(Math.pow((this.endB[0].pageX - this.endB[1].pageX),2) + Math.pow((this.endB[0].pageY - this.endB[1].pageY),2))
          // 判断放大缩小
          this.status = this.end2 - this.end1
          if(this.status > 100 ) {
            this.status = 100
          }else if(this.status < -100) {
            this.status = -100
          }

          this.w += this.status*2
          this.h = this.w/3*2
          // console.log('this.w',this.w,'this.h',this.h , this.status)

          // 缩放
          if(this.w <= 300 | this.h<= 200) {
            this.w = 300
            this.h = 200
          }else if(this.w >= 1200 | this.h>= 800) {
            this.w = 1200
            this.h = 800
          }
          this.$refs.imgDiv.style.width = this.w + "px"
          this.$refs.imgDiv.style.height = this.h + "px"
          this.$refs.imgDiv.style.transition = "all 1s"
          // 相对固定缩放
          this.left = parseInt(this.$refs.imgDiv.style.marginLeft) || 0 ;
          this.top = parseInt(this.$refs.imgDiv.style.marginTop) || 0 ;
          this.$refs.imgDiv.style.marginLeft = this.left - this.status + "px"
          this.$refs.imgDiv.style.marginTop = this.top - this.status/0.75 + "px"
          // 还原数据
          this.jsq = 0
        }
      }
    },

    showZl(e){
      this.zlCardOb = e
      this.showZlCard = true
    }
  }
}
</script>

<style>
.dlBody {
  width: 100vw;
  height: calc(100vh - 650px);
  overflow: hidden;
  margin-top: 10px;
  background-color: rgba(0,0,0,0.21);
  padding: 140px 0 320px;
}
.dlBox {
  text-align: center;
  width: 420px;
  height: 280px;
  transition: all 0.1s;
}
.dlImg {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
/* 1F */
.F1ZlCard1 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -20%;
  margin-left: 13%;
  position: relative;
}
.F1ZlCard2 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -50%;
  margin-left: 64%;
  position: relative;
}
.F1ZlCard3 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -7.5%;
  margin-left:73.5%;
  position: relative;
}
.F1ZlCard4 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: 4%;
  margin-left: 64%;
  position: relative;
}
.F1ZlCard5 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -7.5%;
  margin-left: 74.5%;
  position: relative;
}
.F1ZlCard6 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: 1.5%;
  margin-left: 76%;
  position: relative;
}
.F1ZlCard7 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -0.5%;
  margin-left: 53%;
  position: relative;
}
.F1ZlCard8 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: 10%;
  margin-left: 48.5%;
  position: relative;
}

.F1WsjCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -50%;
  margin-left: 29%;
  position: relative;
}
.F1MyjCard1 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -50%;
  margin-left: 49%;
  position: relative;
}
.F1AqtdCard1 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -60%;
  margin-left: 37.5%;
  position: relative;
}
.F1AqtdCard2 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: 3%;
  margin-left: 39%;
  position: relative;
}
.F1AqtdCard3 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: 13%;
  margin-left: 3%;
  position: relative;
}
.F1LtCard1 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -31%;
  margin-left: 26.5%;
  position: relative;
}
.F1LtCard2 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -7%;
  margin-left: 49%;
  position: relative;
}
/* 2F ???????????????????????????????????????????????????????????*/
.F2ZlCard1 {
  width: 5%;
  height: 10%;
  background-color: #8a4daa;
  margin-top: -50%;
  margin-left: 12%;
  position: relative;
}
.F2ZlCard2 {
  width: 5%;
  height: 10%;
  background-color: gold;
  margin-top: -12%;
  margin-left: 24%;
  position: relative;
}
.F2ZlCard3 {
  width: 5%;
  height: 10%;
  background-color: yellowgreen;
  margin-top: -3%;
  margin-left: 30%;
  position: relative;
}
.F2ZlCard4 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: 5%;
  margin-left: 26%;
  position: relative;
}
.F2ZlCard5 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -4%;
  margin-left: 39%;
  position: relative;
}
.F2ZlCard6 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: 10%;
  margin-left: 15%;
  position: relative;
}
/**/
.F2WsjCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -21%;
  margin-left: 42%;
  position: relative;
}

.F2MyjCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -50%;
  margin-left: 47.5%;
  position: relative;
}
.F2AqtdCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -32.5%;
  margin-left: 3.5%;
  position: relative;
}
.F2AqtdCard2 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -25%;
  margin-left: 38.5%;
  position: relative;
}
.F2AqtdCard3 {
   width: 5%;
   height: 10%;
   background-color: red;
   margin-top: 6%;
   margin-left: 52.5%;
   position: relative;
 }
.F2LtCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -34.5%;
  margin-left: 26.5%;
  position: relative;
}
.F2LtCard2 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -4%;
  margin-left: 49%;
  position: relative;
}

.F3ZlCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -53%;
  margin-left: 38%;
  position: relative;
}
.F3ZlCard2 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: 1%;
  margin-left: 54%;
  position: relative;
}
.F3ZlCard3 {
  width: 5%;
  height: 10%;
  background-color: blue;
  margin-top: -7%;
  margin-left: 65.5%;
  position: relative;
}
.F3ZlCard4 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -20.5%;
  margin-left: 66.5%;
  position: relative;
}
.F3ZlCard5 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: 25%;
  margin-left: 19%;
  position: relative;
}
.F3ZlCard6 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: 0%;
  margin-left: 34%;
  position: relative;
}

.F3WsjCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -20%;
  margin-left: 52%;
  position: relative;
}
.F3MyjCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -52%;
  margin-left: 59%;
  position: relative;
}
.F3AqtdCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -52%;
  margin-left: 49%;
  position: relative;
}
.F3AqtdCard2 {
  width: 5%;
  height: 10%;
  background-color: yellowgreen;
  margin-top: 13%;
  margin-left: 9%;
  position: relative;
}
.F3AqtdCard3 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -12%;
  margin-left: 64%;
  position: relative;
}
.F3LtCard1 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -36%;
  margin-left: 36.5%;
  position: relative;
}
.F3LtCard2 {
  width: 5%;
  height: 10%;
  background-color: red;
  margin-top: -8%;
  margin-left: 64.5%;
  position: relative;
}



</style>
