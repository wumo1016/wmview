<template>
  <div class="left_nav">
    <ul>
      <li
        v-ripple
        v-for="item in menuList"
        :key="item.path"
        :class="[
          'menu_item',
          { 'menu_item--active': route.path === `/component${item.path}` },
        ]"
        @click="goPage(item)"
      >
        <span> {{ item.title }} </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import menuList from '@r/config.json'

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()

    const state = reactive({
      menuList,
    })

    const goPage = (item) => {
      router.push(`/component${item.path}`)
    }

    return {
      ...toRefs(state),
      route,
      goPage,
    }
  },
})
</script>

<style lang="scss" scoped>
.left_nav {
  width: $leftWidth;
  height: 100%;
  overflow-y: auto;
  position: relative;
  padding-top: 36px;
  padding-bottom: 50px;
  &::after {
    content: '';
    position: absolute;
    top: 16px;
    bottom: 16px;
    right: 0;
    border-right: $cbs;
    z-index: -1;
  }
  .menu_item {
    position: relative;
    margin-bottom: 3px;
    padding: 0 16px 0 28px;
    height: 46px;
    line-height: 46px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: border-color 0.3s, background 0.3s,
      padding 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:hover {
      color: #1890ff;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 3px solid #1890ff;
      transform: scaleY(0.0001);
      opacity: 0;
      transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
        opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    &--active {
      background-color: #e6f7ff;
      color: #1890ff;
      &::after {
        transform: scaleY(1);
        opacity: 1;
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
          opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
}
</style>
