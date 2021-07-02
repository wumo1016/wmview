<template>
  <div class="home_wrapper">
    <h1>Wm View框架</h1>
    <h2>一套基于Vue3.0的PC端组件库</h2>
    <div class="button_box">
      <div class="start_use">开始使用吧</div>
    </div>
    <div class="banner">
      <img src="@/assets/images/banner.svg" alt="" />
    </div>
    <footer>
      <div class="link_wrapper">
        <div class="link_item">
          <h3>Wm View</h3>
          <ul>
            <li>GitHub</li>
            <li>更新日志</li>
          </ul>
        </div>
        <div class="link_item">
          <h3>友情链接</h3>
          <ul>
            <li>Vue</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.home_wrapper {
  height: calc(100% - #{$headerHeight});
  overflow-y: auto;
  padding-top: 1vw;
  min-width: 1000px;
  overflow-x: auto;
  h1 {
    text-align: center;
    font-size: 2rem;
    padding: 1vw 0;
  }
  h2 {
    text-align: center;
    font-size: 1.6rem;
    padding: 0.8vw 0;
    color: rgb(92, 92, 92);
  }
  .button_box {
    display: flex;
    justify-content: center;
    padding-top: 1vw;
    .start_use {
      background-color: rgba(24, 102, 192);
      color: #fff;
      padding: 0.8rem 3rem;
      border-radius: 0.3rem;
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
    }
  }
  .banner {
    padding: 0 3vw;
    padding-top: 2vw;
    margin: 0 auto;
    width: 900px;
    img {
      width: 100%;
      height: auto;
    }
  }
  footer {
    padding: 0 3vw;
    padding: 2vw 0;
    background: #000;
    color: #fff;
    .link_wrapper {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      .link_item {
        width: 200px;
        margin-right: 3vw;
        li {
          line-height: 1.6rem;
          cursor: pointer;
        }
      }
    }
    h3 {
      font-size: 1.2rem;
      line-height: 1.5rem;
      padding-bottom: 1vw;
    }
  }
}
</style>