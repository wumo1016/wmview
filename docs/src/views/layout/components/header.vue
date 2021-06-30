<template>
  <div class="header_wrapper">
    <div class="left_box">
      <img class="logo" src="@/assets/images/logo3.svg" alt="" />
      <img class="logo1" src="@/assets/images/logo1.png" alt="" />
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
  border-bottom: 1px solid rgba(219, 219, 219, 0.3);
  .left_box {
    display: flex;
    align-items: center;
  }
  .logo {
    height: 100%;
    width: auto;
    transform: rotate(90deg);
    animation: rotate 1.6s 1 ease;
  }
  .logo1 {
    height: 60%;
    width: auto;
    animation: move 1.6s 1 ease;
    transform: translateX(-20px);
  }
  @keyframes rotate {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(810deg);
    }
  }
  @keyframes move {
    from {
      transform: translateX(200px);
    }
    to {
      transform: translateX(-20px);
    }
  }
  // rgb(255, 153, 0)
}
</style>