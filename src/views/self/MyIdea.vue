<template>
  <div>
    <xx-top-bar title="意见反馈" :share-x=false></xx-top-bar>
    <p style="margin:10px 0 0 15px">问题/意见反馈</p>
    <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        maxlength="500"
        placeholder="请详细描述您在App使用中遇见的问题，以便我们能够更好的为您服务。"
        show-word-limit

    />
    <van-button type="primary" size="large" @click="comment">提交</van-button>
  </div>

<!--  输入框-->

</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";

export default {
  name: "Comment",
  data() {
    return {
      message: ''
    }
  },
  components: {XxTopBar},
  methods: {
    comment() {

    }
  }
}
</script>

<style scoped>

</style>