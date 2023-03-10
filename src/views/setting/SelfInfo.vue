<template>
  <div>
    <xx-top-bar title="个人资料" share-x="x"></xx-top-bar>
<!--    设置-->
    <div style="padding: 0 20px">
      <div class="zlCard" @click="txShow = true" >
        <div class="zlT">头像</div>
        <div style="display: flex;">
          <van-uploader v-model="fileList" :after-read="afterRead" :max-count="1" >
            <img  style="
                  width: 60px;
                  height: 60px;
                  border-radius: 50%;
                  object-fit: cover"
                  src="../../../src/assets/img/头像.jpg" />
          </van-uploader >
          <span style="margin-top: 20px;margin-left: 20px">
            <van-icon name="arrow" />
          </span>
        </div>
      </div>

      <div class="zlCard" @click="nickShow = true;changeNkNa = nickName">
        <div class="zlT">昵称</div>
        <div class="zlN">
          {{ nickName }}
          <span style="margin-left: 20px">
          <van-icon name="arrow" />
          </span>
        </div>
      </div>

      <div class="zlCard" @click="phoneShow = true ;changePh = phone">
        <div class="zlT">手机号</div>
        <div class="zlN">
          {{ phone }}
          <span style="margin-left: 20px">

            <van-icon name="arrow" />
          </span>
        </div>
      </div>
    </div>

<!--弹出层-->
<!--    头像-->
<!--    <van-popup closeable v-model="txShow" position="bottom" :style="{ height: '30%' }" >-->
<!--      <div class="info">-->
<!--        <div>-->
<!--          <van-button @click="changeTx" class="infoBut" type="primary" size="normal">确定</van-button>-->
<!--        </div>-->
<!--      </div>-->

<!--    </van-popup>-->
    <!--    昵称-->
    <van-popup closeable v-model="nickShow" position="bottom" :style="{ height: '30%' }" >
      <div class="info">
        <div style="border-bottom: 2px solid rgba(0,0,0,0.2);">
          <van-field
              v-model="changeNkNa"
              type="text"
              clearable
              input-align="center"
              size="large"
          />
        </div>
        <div style="text-align: center;margin-top: 10px;font-size: 12px;color: rgba(0,0,0,0.5)">{{nickName.length}} / 15</div>
        <div>
          <van-button @click="changeNick" class="infoBut" type="primary" size="normal">确定</van-button>
        </div>
      </div>

    </van-popup>
    <!--    手机号-->
    <van-popup  closeable v-model="phoneShow" position="bottom" :style="{ height: '30%' }" >
      <div class="info">
        <div style="border-bottom: 2px solid rgba(0,0,0,0.2);">
          <van-field
              v-model="changePh"
              type="tel"
              clearable
              input-align="center"
              size="large"
          />
        </div>
        <div style="text-align: center;margin-top: 10px;font-size: 12px;color: rgba(0,0,0,0.5)">{{changePh.length}} / 11</div>
        <div>
          <van-button @click="changePhone" class="infoBut" type="primary" size="normal">确定</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";

export default {
  name: "SelfInfo",
  components: {XxTopBar},
  data() {
    return {
      nickShow: false,
      phoneShow: false,
      txShow: false,
      nickName: '悍匪',
      phone: '12345678910',
      changeNkNa: '',
      changePh: '',
      fileList: [
        // { url: '../../../src/assets/img/头像.jpg' },
      ]

    }
  },
  methods: {
    changeNick() {
      this.nickName = this.changeNkNa
      console.log(this.nickName)
      this.nickShow = false
    },
    changePhone() {
      this.phone = this.changePh
      console.log(this.phone)
      this.phoneShow = false
    },
    // changeTx() {
    //   this.txShow = false
    // },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      console.log(this.fileList)
    },
  }
}
</script>

<style scoped>
.zlCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.5);
  height: 70px;
}
.zlTx {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #bf2762;
}
.zlT {
  font-size: 18px;
  color: rgba(0,0,0,0.5);
}
.zlN {
  font-size: 18px;
}
.info {
  width: 60%;
  margin: 60px auto 0;


}
.infoBut{
  width: 100%;
  border-radius: 50px;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
}
</style>