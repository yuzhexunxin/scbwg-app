<template>
  <div>
    <xx-top-bar title="游览须知" share-x="x"></xx-top-bar>
    <img src="../assets/img/背景1.jpg" style="width: 100%;height: 200px;object-fit: cover">
    <div class="ylP">
      1.严禁携带“三品”等危险品进入展馆，禁止携带宠物、管制械具进馆。<br/>
      2.随身携带物品请存放在馆内自助寄存柜内。<br/>
      3.衣冠不整、醉酒者谢绝参观。<br/>
      4.保持馆内安静。禁止追逐打闹，推搡拥挤、大声喧哗。<br/>
      5.个人参观需答疑时，请与展馆管理人员联系解决。<br/>
      6.保持馆内清洁、卫生。禁止在展厅内饮食、吸烟、随地吐痰、乱扔果皮纸屑。违者罚款<br/>
      7.禁止翻越围栏，禁止触摸展柜、展品、展板和其它物品。<br/>
      8.小心玻璃、注意安全。请勿爬靠或挤压玻璃展柜，以防玻璃破裂，造成藏品损坏和伤及身体。<br/>
      9.爱护展览设施和公共服务设施，如有损坏照价赔偿并承担相应法律责任。<br/>
      10.服从管理，听从指挥，保证参观活动正常进行。<br/>
      11.携带儿童参观的观众，请遵照观众须知看管好携带儿童。<br/>
      12.除年老活动不便者、残障人士，其他观众谢绝乘坐电梯。<br/>
      13.如遇突发事件，请服从博物馆有关工作人员的安排，保持展厅秩序。<br/>
      14.请您协助我们维持好展厅内的参观秩序和良好的参观环境，谢谢合作。<br/>
    </div>

  </div>
</template>

<script>
import XxTopBar from "@/components/XxTopBar.vue";

export default {
  name: "ShuKw",
  components: {XxTopBar}
}
</script>

<style scoped>
.ylP {
  padding: 10px;
  text-align: justify;
  line-height: 25px;
  font-size: 18px;
}
</style>