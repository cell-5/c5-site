<template>
    <div class="msg">
        <span>{{text}}</span>
        <img :src="logo" alt="">
    </div>
</template>

<script>
import Cell5Logo from "../../assets/img/cell-5-logo.svg";

export default {
  name: "Message",
  props: ["text"],
  data: () => {
   return { logo: Cell5Logo}
  }
};
</script>

<style scoped>
.msg {
  width: 100%;
  height: 100%;
  position: fixed;
  background: white;
  color: black;
  z-index: 100;
  left: 0;
  top: 0;
  line-height: 100%;
}
.msg span {
  position: absolute;
  top: 50%;
  font-size: 30px;
  width: 100%;
  text-align: center;
}
</style>