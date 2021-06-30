<template>
  <div class="layout_wrapper">
    <LeftNav class="layout_left" />
    <div class="layout_content">
      <router-view></router-view>
    </div>
    <RightNav class="layout_right" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftNav from "./components/left-nav.vue";
import RightNav from "./components/right-nav.vue";

export default defineComponent({
  components: {
    LeftNav,
    RightNav,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.layout_wrapper {
  $headerHeight: 70px;
  $leftWidth: 200px;
  $rightWidth: 150px;
  height: calc(100% - $headerHeight);
  display: flex;

  .layout_left {
    width: $leftWidth;
  }

  .layout_content {
    width: calc(100% - #{$leftWidth + $rightWidth});
  }

  .layout_right {
    width: $rightWidth;
  }
}
</style>