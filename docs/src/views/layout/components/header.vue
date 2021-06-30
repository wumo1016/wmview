<template>
  <div class="header_wrapper">
    <div class="left_box">
      <img class="logo" src="@/assets/images/logo.png" alt="" />
      <img class="logo1" src="@/assets/images/logo1.png" alt="" />
      <!-- <div>wm-ui</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.header_wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
  border-bottom: 1px solid rgba(219, 219, 219, 0.3);
  .left_box {
    display: flex;
    align-items: center;
  }
  .logo {
    height: 70%;
    width: auto;
    transform: rotate(-45deg);
  }
  .logo1{
    height: 60%;
    width: auto;
    margin-left: 10px;
  }
}
</style>