<template>
  <div class="layout_wrapper">
    <left-nav class="layout_left" />
    <div class="layout_content">
      <router-view></router-view>
    </div>
    <right-affix class="layout_right" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import leftNav from "./components/left-nav.vue";
import rightAffix from "./components/right-affix.vue";

export default defineComponent({
  components: {
    leftNav,
    rightAffix,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.layout_wrapper {
  $leftWidth: 200px;
  $rightWidth: 150px;
  height: calc(100% - #{$headerHeight});
  overflow-y: auto;
  display: flex;

  .layout_left {
    width: $leftWidth;
  }

  .layout_content {
    width: calc(100% - #{$leftWidth + $rightWidth});
    padding: 40px 30px;
  }

  .layout_right {
    width: $rightWidth;
  }
}
</style>