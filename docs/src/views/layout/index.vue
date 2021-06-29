<template>
  <div class="layout_wrapper">
    <Header class="layout_header" />
    <div class="layout_content_wrapper">
      <LeftNav class="layout_left" />
      <div class="layout_content">
        <router-view></router-view>
      </div>
      <RightNav class="layout_right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/header.vue";
import LeftNav from "./components/left-nav.vue";
import RightNav from "./components/right-nav.vue";

export default defineComponent({
  components: {
    Header,
    LeftNav,
    RightNav,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.layout_wrapper {
  height: 100%;
  $headerHeight: 50px;
  $leftWidth: 200px;
  $rightWidth: 150px;

  .layout_header {
    height: $headerHeight;
  }

  .layout_content_wrapper {
    height: calc(100% - $headerHeight);
    display: flex;
  }

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