<template>
  <div>
    <van-form validate-first @failed="onFailed" ref="from">
<!--      手机号-->
      <van-field
          label="手机号"
          v-model="valuePhone"
          placeholder="请输入手机号"
          :rules="[{ pattern:uPattern, message: '手机格式不正确！' }]"
      />
<!--      验证码-->
      <div style="display: flex;padding: 0 10px 0 0">
        <van-field
            label="验证码"
            v-model="valueCode"
            placeholder="请输入验证码"
            @keyup.enter="login"
            :rules="[{ validator: yzCode, message: '验证码格式不正确！' }]"
        />
        <ValidateCode ref="ref_validCode" @change="changeCode" style="margin-left: 20px;height: 44px"></ValidateCode>
      </div>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">设置短信</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import ValidateCode from "@/components/ValidateCode.vue";

export default {
  name: "Verify",
  components: {ValidateCode},
  data() {
    return {
      valueCode:'',//输入的验证码
      validCode: '', //验证码
      valuePhone: '',
      uPattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,//手机正则表达式

    };
  },
  methods: {
    onFailed(errorInfo) {
      console.log(this.date);
    },
    yzCode(val) {
      return /^[0-9,a-z,A-Z]{4}$/.test(val);
    },
    changeCode(value) {//图片验证码值
      this.validCode = value
    },
    login(){
    }
  },
  props: {
    date: Object
  }
};
</script>

<style scoped>

</style>