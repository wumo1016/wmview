<template>
  <div class="header_wrapper">
    <div class="left_box" @click="goPage('/')">
      <img class="logo" src="@/assets/images/logo.svg" alt="" />
      <img class="logo1" src="@/assets/images/logo1.png" alt="" />
    </div>
    <div class="right_box">
      <div class="search_box">
        <input type="text" @focus="showAdvice = true" />
        <i class="wm-icon-sousuo"></i>
      </div>
      <div v-show="adviceList.length > 0 && showAdvice" class="search_res_box">
        <ul>
          <li v-for="item in adviceList" :key="item">
            {{ item }}
          </li>
        </ul>
        <div class="angle"></div>
      </div>
      <ul>
        <li
          :class="{ active_tab: route.path.startsWith('/component') }"
          @click="goPage('/component/icon')"
        >
          组件
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()

    const state = reactive({
      adviceList: [],
      showAdvice: false,
    })

    let blurFunc = (e) => {
      const deviceDom = document.querySelector(
        '.header_wrapper .search_res_box ul'
      )
      const searchDom = document.querySelector('.header_wrapper .search_box')
      if (!deviceDom.contains(e.target) && !searchDom.contains(e.target)) {
        state.showAdvice = false
      }
    }

    onMounted(() => {
      document.addEventListener('click', blurFunc)
    })

    onUnmounted(() => {
      document.removeEventListener('click', blurFunc)
    })

    const goPage = (path) => {
      router.push(path)
    }

    return {
      goPage,
      route,
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
.header_wrapper {
  display: flex;
  justify-content: space-between;
  border-bottom: $cbs;
  height: $headerHeight;
  .left_box {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logo {
    height: 100%;
    width: auto;
    transform: rotate(90deg);
    animation: rotate 1s 1 ease;
  }
  .logo1 {
    animation: move 1s 1 ease;
    transform: translateX(-20px);
  }
  .right_box {
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 3rem;
    flex-wrap: nowrap;
    > ul {
      height: $headerHeight;
      user-select: none;
      li {
        height: $headerHeight;
        line-height: $headerHeight;
        color: rgba(24, 144, 255, 0.7);
        cursor: pointer;
        font-size: 1.3rem;
        padding: 0 0.5rem;
        &:hover {
          color: $tcolor;
        }
      }
    }
    .active_tab {
      color: $tcolor;
      border-bottom: 2px solid $tcolor;
    }
    $search: 36px;
    .search_box {
      max-width: 200px;
      height: $search;
      border-radius: calc(#{$search} / 2);
      position: relative;
      margin-right: 20px;
      i {
        position: absolute;
        right: 0;
        top: 0;
        height: $search;
        width: $search;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: $tcolor;
        font-size: 15px;
      }
      input {
        width: 100%;
        height: 100%;
        border-width: 1px;
        border-radius: 21px;
        padding-left: 20px;
        padding-right: $search;
        border: 1px solid $bcolor;
        transition: border-color 0.5s;
        &:hover {
          border-color: $tcolor;
        }
        &:focus {
          border-color: $tcolor;
        }
      }
    }
    .search_res_box {
      position: absolute;
      left: 0;
      width: 80%;
      top: calc(100% - 10px);
      height: auto;
      padding: 10px 0;
      ul {
        border: 1px solid $bcolor;
        border-radius: 4px;
        background: #fff;
      }
      .angle {
        position: absolute;
        width: 10px;
        height: 10px;
        border: 1px solid $bcolor;
        left: calc(50% - 10px);
        top: 5px;
        transform: rotate(45deg);
        background: #fff;
        border-right-color: transparent;
        border-bottom-color: transparent;
      }
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(810deg);
    }
  }
  @keyframes move {
    from {
      transform: translateX(80px);
    }
    to {
      transform: translateX(-20px);
    }
  }
}
</style>