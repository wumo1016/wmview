<template>
  <div>
    <Header class="home_header" />
    <i class="wm-icon-plus"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@v/layout/components/header.vue";

export default defineComponent({
  components: { Header },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.home_header{
  height: 70px;
}
</style>