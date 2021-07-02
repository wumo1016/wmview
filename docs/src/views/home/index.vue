<template>
  <div class="home_wrapper">
    <h1>Wm View框架</h1>
    <h2>一套基于Vue3.0的PC端组件库</h2>
    <div class="banner">
      <img src="@/assets/images/banner.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.home_wrapper {
  padding-top: 1vw;
  h1 {
    text-align: center;
    font-size: 2rem;
    padding: 1vw 0;
  }
  h2 {
    text-align: center;
    font-size: 1.6rem;
    padding: 0.8vw 0;
    color: rgb(92, 92, 92);
  }
  .banner {
    padding: 0 3vw;
    padding-top: 2vw;
    max-width: 960px;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>