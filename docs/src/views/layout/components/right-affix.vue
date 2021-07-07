<template>
  <div class="right_affix">
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
    <div>12</div>
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
.right_affix {
  position: fixed;
  right: 0;
  top: 80px;
  height: auto;
  width: $rightWidth;
  border-left: $cbs;
}
</style>