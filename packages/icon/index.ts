import { App } from 'vue'
import Icon from './src/icon.vue'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

type IWithInstall<T> = T
const _Icon: IWithInstall<typeof Icon> = Icon

export default _Icon
