<template>
  <transition name="fade">
    <div id="welcome-wrapper">
      <div id="welcome">
        <img :src="logo"
             alt="">
      </div>
    </div>
  </transition>
</template>



<script>
import Cell5Logo from "../../assets/img/cell-5-logo-white.svg";

export default {
  name: "Message",
  props: ["text"],
  data: () => {
    return {
      logo: Cell5Logo
    };
  }
};
</script>

<style scoped>
#welcome-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  background: black;
  color: black;
  z-index: 100;
  left: 0;
  top: 0;
  line-height: 100%;
}

#welcome {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
#welcome img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>