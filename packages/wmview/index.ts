import Button from '@wmview/button'
import Icon from '@wmview/icon'

const components = [Button, Icon]

const install = app => {
  components.map(component => {
    app.use(component)
  })
}

// 单独导出
export { Button, Icon }

// 默认导出
export default {
  install,
}
