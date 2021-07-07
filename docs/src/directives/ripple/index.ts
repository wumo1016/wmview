import { ObjectDirective, DirectiveBinding } from 'vue';
import './index.scss'

const calculate = (
  e: MouseEvent,
  el: HTMLElement,
) => {
  let localX = 0
  let localY = 0

  const offset = el.getBoundingClientRect() // 相当于视窗的位置

  // 计算点击位置距离元素的距离
  localX = e.clientX - offset.left 
  localY = e.clientY - offset.top

  let radius = 0
  let scale = 0.3
  radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2 // 平方根

  const centerX = `${(el.clientWidth - (radius * 2)) / 2}px`
  const centerY = `${(el.clientHeight - (radius * 2)) / 2}px`

  const x = `${localX - radius}px`
  const y = `${localY - radius}px`

  return { radius, scale, x, y, centerX, centerY }
}

const ripples = {
  show(
    e: MouseEvent,
    el: HTMLElement,
  ) {

    const container = document.createElement('span')
    const animation = document.createElement('span')

    container.appendChild(animation)
    container.className = 'v-ripple__container'

    const { radius, scale, x, y, centerX, centerY } = calculate(e, el)

    const size = `${radius * 2}px`
    animation.className = 'v-ripple__animation'
    animation.style.width = size
    animation.style.height = size

    el.appendChild(container)

    const computed = window.getComputedStyle(el)
    if (computed && computed.position === 'static') {
      el.style.position = 'relative'
      el.dataset.previousPosition = 'static'
    }

    animation.classList.add('v-ripple__animation--enter')

    animation.style.transform = `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`
    animation.style.opacity = '0'

    animation.dataset.activated = String(performance.now())

    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--enter')
      animation.classList.add('v-ripple__animation--in')

      animation.style.transform = `translate(${centerX}, ${centerY}) scale3d(1,1,1)`

      animation.style.opacity = '0.16'
    }, 0)
  },

  hide(el: HTMLElement | null) {

    const ripples = el.getElementsByClassName('v-ripple__animation')

    if (ripples.length === 0) return
    const animation = ripples[ripples.length - 1] as HTMLElement

    if (animation.dataset.isHiding) return
    else animation.dataset.isHiding = 'true'

    const diff = performance.now() - Number(animation.dataset.activated)
    const delay = Math.max(250 - diff, 0)

    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--in')
      animation.classList.add('v-ripple__animation--out')

      animation.style.opacity = '0.08'

      setTimeout(() => {
        const ripples = el.getElementsByClassName('v-ripple__animation')
        if (ripples.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition
          delete el.dataset.previousPosition
        }
        animation.parentNode && el.removeChild(animation.parentNode)
      }, 300)
    }, delay)
  },
}

function rippleShow(e) {
  const el = e.currentTarget as HTMLElement | undefined
  ripples.show(e, el)
}

function rippleHide(e) {
  const el = e.currentTarget as HTMLElement | undefined
  ripples.hide(el)
}

const Ripple: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener('mousedown', rippleShow)
    el.addEventListener('mouseup', rippleHide)
    el.addEventListener('mouseleave', rippleHide)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value === binding.oldValue) return
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('mousedown', rippleShow)
    el.removeEventListener('mouseup', rippleHide)
    el.removeEventListener('mouseleave', rippleHide)
  }
}

export default Ripple
