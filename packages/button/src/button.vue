<template>
  <button :class="classs">
    <slot>按钮</slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

type ButtonType =
  | 'default'
  | 'primary'
  | 'warning'
  | 'danger'
  | 'info'
  | 'success'

export default defineComponent({
  name: 'WmButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
      validator: (v: string) => {
        if (v === '') return true
        return [
          'primary',
          'warning',
          'danger',
          'default',
          'info',
          'success'
        ].includes(v)
      }
    }
  },
  setup(props) {
    const classs = computed(() => {
      return ['wm-button', `wm-button--${props.type}`]
    })

    return {
      classs
    }
  }
})
</script>

<style scoped>
</style>