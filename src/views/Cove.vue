<template>
 <div >
   <xx-top-bar title="便民服务" share-x="x"></xx-top-bar>
   <div class="bmCard">
     <div class="bmT">
      咨询服务
     </div>
     <div class="bmP">
       国博服务台( 位置:北门人口处)
     </div>
     <div class="fgx"></div>
   </div>
   <div class="bmCard">
     <div class="bmT">
       轮椅、婴儿车
     </div>
     <div class="bmP">
       当日免费使用，需提供有效证件及押金500元，在服务台即可办理手续。
     </div>
     <div class="fgx"></div>
   </div>
   <div class="bmCard">
     <div class="bmT">
       母婴室
     </div>
     <div class="bmP">
       母婴室位于四川宋瓷博物馆--层大厅南侧，为有需要的哺乳期妈妈提供安全、私密、温馨的哺乳、集乳及婴儿护理的空间。
     </div>
     <div class="fgx"></div>
   </div>
   <div class="bmCard">
     <div class="bmT">
       留言簿
     </div>
     <div class="bmP">
       常设展览设有留言簿，欢迎观众踊跃留言!
     </div>
     <div class="fgx"></div>
   </div>
   <div class="bmCard">
     <div class="bmT">
       应急处置
     </div>
     <div class="bmP">
       如果您在参观过程中突感身体不适或意外受伤，请及时与工作人员联系，若情况紧急，工作人员将尽快联系急救，送您到距离最近的正规医院进行处理。如果您在参 观过程中与亲友走散，请前往服务台，工作人员将为您提供广播寻人服务。如遇突发情况，请您服从现场工作人员指挥，按.照疏散标识快速有序的撤离至安全区域。
     </div>
     <div class="fgx"></div>
   </div>
   <div class="bmCard">
     <div class="bmT">
       意见投诉
       <router-link to="/self/myIdea">
         <span style="float: right;margin-right: 0;font-size: 15px;color: rgba(0,0,0,0.3);margin-top: 5px">
           在线反馈
         </span>
       </router-link>
     </div>
     <div class="bmP">
       如果您对场馆、展览、服务等有意见，请到四川宋瓷博物馆国服务台进行投诉。
     </div>
     <div class="fgx"></div>
   </div>

 </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";

export default {
  name: "Cove",
  components: {XxTopBar}
}
</script>

<style scoped>
.bmCard {
  width: calc(100vw - 20px);
  margin: 0 auto;
  padding: 30px 0;
  /*background-color: #1989fa;*/
  border-bottom: 1px solid rgba(0,0,0,0.3);
}
.bmT {
  font-size: 20px;
  font-weight: bold;
  color: rgba(140,15,20,0.91);
}
.bmP {
  margin-top: 10px;
  font-size: 18px;
  line-height: 25px;
  text-align: justify;
}

</style>