import { ObjectDirective, DirectiveBinding } from 'vue';

const Ripple: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    console.log(el, '挂载');
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    console.log(el);
  },
  unmounted(el: HTMLElement) {
    console.log(el, '卸载');
  }
}

export default Ripple
