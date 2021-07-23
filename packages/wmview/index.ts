import Button from '../button'

const components = [Button]

const install = app => {
  components.map(component => {
    app.use(component)
  })
}

// 单独导出
export { Button }

// 默认导出
export default {
  install,
}
