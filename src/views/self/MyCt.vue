<template>
  <div style="height: 100vh;background-color: rgba(0,0,0,0.05)">
    <xx-top-bar title="常用联系人" :share-x="false"></xx-top-bar>
    <div v-for="(ct,index) in cts" :key="index"  style="padding: 0 10px">
      <van-swipe-cell>
        <div style="padding: 20px;
              background-color: white ;
              font-size: 20px;
              color: black;
              margin: 10px 0" >
          <div style="font-size: 25px;font-weight: bold;display: flex;align-items: center">
            <div>{{ ct.name }}</div>
            <van-tag v-if="ct.def" color="red" plain size="medium" style="margin-left: 15px">默认</van-tag>
          </div>
          <div style="font-size: 18px;margin-top: 10px">
            <div style="margin: 5px 0">
              <van-icon name="phone-o" style="margin-right: 10px"/>{{ ct.phone }}
            </div>
            <div>
              <van-icon name="idcard" style="margin-right: 10px"/>
              {{ ct.idcard }}
            </div>
          </div>
        </div>
        <template #right>
          <van-button style="width: 50px;height: 100%;font-size: 15px;" square type="primary" text="编辑" />
          <van-button style="width: 50px;height: 100%;font-size: 15px;" square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";
import SearchList from "@/components/SearchList.vue";

export default {
  name: "MyCt",
  components: {SearchList, XxTopBar},
  data() {
    return {
      cts:[
        {
          name:'小红',
          phone: '1545613151',
          idcard: '2153513153331561531',
          def: 1
        },
        {
          name:'小红',
          phone: '1545613151',
          idcard: '2153513153331561531',
          def: 0
        },
        {
          name:'小红',
          phone: '1545613151',
          idcard: '2153513153331561531',
          def: 0
        },
      ],
    }
  },

}
</script>

<style scoped>

</style>