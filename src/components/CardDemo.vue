<template>
  <div>
    <div class="zpIt" v-for="(li,index2) in lis" :key="index2">
      <router-link to="/echDet">
        <img :src="li.url">
        <div>{{ li.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDemo",
  props:{
    lis:Array
  }
}
</script>

<style scoped>
.zpIt {
  background-color: white;
  width: calc((100vw - 70px)/2);
  padding: 10px;
  margin: 10px 5px 0;
  border-radius: 15px;
}
.zpIt img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;

}
.zpIt div {
  font-size: 15px;
  margin-top: 5px;
  color: black;
}
</style>