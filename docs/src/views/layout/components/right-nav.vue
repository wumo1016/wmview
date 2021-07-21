<template>
  <div class="right_nav">
    <div class="anchor-ink" :style="`top: ${14 + 28 * activeIndex}px`"></div>
    <ul>
      <li
        v-for="item in anchors"
        :key="item.title"
        :class="{ active_anchor: active === item.title }"
        @click="handleLinkClick(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      anchors: [],
      active: '',
    })

    let isManualScroll = true // 是否是鼠标滚轮操作导致的滑动

    let scrollContainer

    onMounted(async () => {
      scrollContainer = document.querySelector('.layout_content')
      const h3s = scrollContainer.querySelectorAll('h3')
      state.anchors = Array.from(h3s).map((ele: HTMLElement) => {
        return {
          title: ele.childNodes[0].textContent.trim(),
          offsetTop: ele.offsetTop,
        }
      })
      state.active = state.anchors[0].title

      scrollContainer.addEventListener('scroll', (e) => {
        if (!isManualScroll) return
        const target = state.anchors.find(
          (v) => v.offsetTop - 70 > scrollContainer.scrollTop
        )
        if (target) {
          state.active = target.title
        }
      })
    })

    const activeIndex = computed(() => {
      return state.anchors.findIndex((v) => state.active === v.title)
    })

    const setScrollTop = (value) => {
      isManualScroll = false
      const oldScrollTop = scrollContainer.scrollTop
      const newScrollTop = value - 70
      const differ = newScrollTop - oldScrollTop
      const step = differ / (200 / 10)
      const scrollHeight = scrollContainer.scrollHeight
      const offsetHeight = scrollContainer.offsetHeight

      let T = setInterval(() => {
        scrollContainer.scrollTop += step
        const curScrollTop = scrollContainer.scrollTop
        if (
          curScrollTop <= 0 ||
          curScrollTop + offsetHeight >= scrollHeight ||
          (differ >= 0 && curScrollTop > newScrollTop) ||
          (differ < 0 && curScrollTop < newScrollTop)
        ) {
          clearInterval(T)
          isManualScroll = true
        }
      }, 10)
    }

    const handleLinkClick = (item) => {
      state.active = item.title
      setScrollTop(item.offsetTop)
    }

    return {
      ...toRefs(state),
      activeIndex,
      handleLinkClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.right_nav {
  position: fixed;
  right: 0;
  top: 80px;
  height: auto;
  width: $rightWidth;
  border-left: $cbs;
  .anchor-ink {
    position: absolute;
    width: 8px;
    height: 8px;
    left: -4px;
    border-radius: 4px;
    border: 1px solid #2d8cf0;
    background: #fff;
    top: 14px;
    transition: top 0.2s;
  }
  ul {
    padding-left: 16px;
    li {
      margin: 8px 0;
      line-height: 20px;
      color: #515a6e;
      cursor: pointer;
      &:hover {
        color: #2d8cf0;
      }
    }
    .active_anchor {
      color: #2d8cf0;
    }
  }
}
</style>