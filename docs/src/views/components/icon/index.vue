<template>
  <div class="icon_wrapper">
    <div class="example_box">
      <h3>
        test1
        <a href="#test1" data-title="test1" class="example_anchor">#</a>
      </h3>
      <div style="height: 200px; background: gray"></div>
    </div>
    <div class="example_box">
      <h3>
        test2
        <a href="#test2" data-title="test2" class="example_anchor">#</a>
      </h3>
      <div style="height: 100px; background: gray"></div>
    </div>
    <div class="example_box">
      <h3>
        test3
        <a href="#test3" data-title="test3" class="example_anchor">#</a>
      </h3>
      <div style="height: 300px; background: gray"></div>
    </div>
    <div class="example_box">
      <h3>
        test4
        <a href="#test4" data-title="test4" class="example_anchor">#</a>
      </h3>
      <div style="height: 200px; background: gray"></div>
    </div>
    <div class="example_box">
      <h3>
        test5
        <a href="#test5" data-title="test5" class="example_anchor">#</a>
      </h3>
      <div style="height: 500px; background: gray"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
h3 {
  a {
    height: 30px;
    line-height: 30px;
  }
}
</style>