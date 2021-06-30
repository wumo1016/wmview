<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from "@v/header/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Header },
});
</script>

<style lang="scss">
</style>
