<template>
  <div>
    <xx-top-bar title="评论" :share-x=false></xx-top-bar>
    <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="放心大胆的评论吧！"
        show-word-limit

    />
    <van-button type="primary" size="large" @click="comment">评论</van-button>
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