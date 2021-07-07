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
import { defineComponent, onMounted, nextTick } from "vue";

export default defineComponent({
  setup() {

    let scrollContainer

    onMounted(async () => {
      await nextTick()
      scrollContainer = document.querySelector('.layout_content')
      console.log(scrollContainer);
    })

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