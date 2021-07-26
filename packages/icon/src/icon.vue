<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'WmIcon',
  props: {
    class: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'inherit',
    },
    size: {
      type: String,
      default: 'inherit',
    },
    tag: {
      type: String,
      default: 'i',
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { size, spin } = props
    return () =>
      h(props.tag, {
        class: [props.class, spin ? 'loading-spin' : ''],
        style: {
          fontSize: isNaN(Number(size)) ? size : `${size}px`,
          color: props.color,
        },
      })
  },
})
</script>
