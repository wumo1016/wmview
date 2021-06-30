<template>
  <div class="header_wrapper">
    <div class="left_box" @click="goPage('/')">
      <img class="logo" src="@/assets/images/logo3.svg" alt="" />
      <img class="logo1" src="@/assets/images/logo1.png" alt="" />
    </div>
    <div class="right_box">
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
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    const goPage = (path) => {
      router.push(path);
    };
    return {
      goPage,
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
.header_wrapper {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(219, 219, 219, 0.3);
  $headerHeight: 70px;
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
    animation: rotate 1.6s 1 ease;
  }
  .logo1 {
    height: 60%;
    width: auto;
    animation: move 1.6s 1 ease;
    transform: translateX(-20px);
  }
  .right_box {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    ul {
      height: $headerHeight;
    }
    li {
      height: $headerHeight;
      line-height: $headerHeight;
      color: rgba(255, 153, 0, 0.7);
      cursor: pointer;
      font-size: 1.3rem;
      padding: 0 0.5rem;
      &:hover {
        color: rgb(255, 153, 0);
      }
    }
    .active_tab {
      color: rgb(255, 153, 0);
      border-bottom: 2px solid rgb(255, 153, 0);
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
      transform: translateX(200px);
    }
    to {
      transform: translateX(-20px);
    }
  }
  // rgb(255, 153, 0)
}
</style>