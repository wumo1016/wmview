<template>
  <div class="layout_wrapper">
    <left-nav />
    <div class="layout_content">
      <router-view></router-view>
    </div>
    <right-nav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import leftNav from './components/left-nav.vue'
import rightNav from './components/right-nav.vue'

export default defineComponent({
  components: {
    leftNav,
    rightNav,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.layout_wrapper {
  height: calc(100% - #{$headerHeight});
  overflow-y: auto;
  display: flex;

  .layout_content {
    width: calc(100% - #{$leftWidth});
    padding: 40px 30px;
    height: 100%;
    overflow-y: auto;
    padding-right: calc(#{$rightWidth} + 20px);
  }
}
</style>