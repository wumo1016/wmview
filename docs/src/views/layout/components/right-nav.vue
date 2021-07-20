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
import { defineComponent, onMounted, nextTick, ref } from 'vue'

export default defineComponent({
  setup() {
    let anchors = ref([])

    let scrollContainer

    onMounted(async () => {
      scrollContainer = document.querySelector('.layout_content')
      const h3s = scrollContainer.querySelectorAll('h3')
      console.log(h3s)
    })

    return {}
  },
})
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