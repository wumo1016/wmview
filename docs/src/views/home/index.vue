<template>
  <div class="home_wrapper">
    <div class="s_width">
      <h1>Wm View框架</h1>
      <h2>一套基于Vue3.0的PC端组件库</h2>
      <div class="button_box">
        <div v-ripple class="start_use" @click="startUse">开始使用吧</div>
      </div>
      <div class="banner">
        <img src="@/assets/images/banner.svg" alt="" />
      </div>
    </div>
    <footer>
      <div class="s_width">
        <div class="link_wrapper">
          <div class="link_item">
            <h3>Wm View</h3>
            <ul>
              <li>
                <a href="https://github.com/wumo1016/wmview" target="_blank"
                  >GitHub</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/wumo1016/wmview/releases"
                  target="_blank"
                >
                  更新日志
                </a>
              </li>
            </ul>
          </div>
          <div class="link_item">
            <h3>友情链接</h3>
            <ul>
              <li>
                <a href="https://v3.cn.vuejs.org/" target="_blank">Vue</a>
              </li>
              <li>
                <a href="https://webpack.docschina.org/" target="_blank">
                  Webpack
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          ©2021 BY 舞
          <a href="https://beian.miit.gov.cn/" target="_blank">
            豫ICP备19047103号-2
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const startUse = () => {
      setTimeout(() => {
        router.push('/component')
      }, 100)
    }

    return {
      startUse,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>